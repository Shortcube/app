import { NextResponse } from 'next/server'

const TOLERANCE_SECONDS = 300
const methodNotAllowed = () => NextResponse.json(
  { error: 'Method Not Allowed. Use POST.' },
  { status: 405 }
)

const parseSignatureHeader = (header) => {
  if (!header) return null
  return header.split(',').reduce((acc, part) => {
    const [key, value] = part.split('=')
    if (!key || !value) return acc
    if (!acc[key]) acc[key] = []
    acc[key].push(value)
    return acc
  }, {})
}

const timingSafeEqual = (a, b) => {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i += 1) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return diff === 0
}

const toHex = (buffer) => Array.from(new Uint8Array(buffer))
  .map((value) => value.toString(16).padStart(2, '0'))
  .join('')

const computeSignature = async (payload) => {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!secret) {
    throw new Error('STRIPE_WEBHOOK_SECRET is not configured')
  }
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload))
  return toHex(signature)
}

const ensureTimestampFresh = (timestamp) => {
  const timestampNumber = Number(timestamp)
  if (Number.isNaN(timestampNumber)) {
    return false
  }
  const now = Math.floor(Date.now() / 1000)
  return Math.abs(now - timestampNumber) <= TOLERANCE_SECONDS
}

const sendResendEmail = async ({ plan, activation, sessionId, subscriptionId, customerEmail }) => {
  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) return
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'BureauWeb <info@bureauweb.ca>',
        to: 'info@bureauweb.ca',
        subject: 'Nouveau paiement Stripe reçu',
        html: `
          <p>Session: ${sessionId}</p>
          <p>Plan: ${plan}</p>
          <p>Activation: ${activation}</p>
          <p>Abonnement: ${subscriptionId || 'non transmis'}</p>
          <p>Client: ${customerEmail || 'non transmis'}</p>
        `,
      }),
    })
  } catch (error) {
    console.error('[Stripe webhook] Resend notification failed', error)
  }
}

const dispatchLeadWebhook = async ({ plan, activation, sessionId, subscriptionId, customerEmail }) => {
  const webhookUrl = process.env.LEADS_WEBHOOK_URL
  if (!webhookUrl) return
  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan,
        activation,
        sessionId,
        subscriptionId,
        customerEmail,
        timestamp: new Date().toISOString(),
      }),
    })
  } catch (error) {
    console.error('[Stripe webhook] Lead webhook failed', error)
  }
}

export const runtime = 'edge'

export async function POST(request) {
  const signatureHeader = request.headers.get('stripe-signature')
  const rawBody = await request.text()

  if (!signatureHeader) {
    return NextResponse.json({ error: 'Missing Stripe signature' }, { status: 400 })
  }

  const components = parseSignatureHeader(signatureHeader)
  if (!components || !components.t || !components.v1) {
    return NextResponse.json({ error: 'Invalid Stripe signature header' }, { status: 400 })
  }

  if (!ensureTimestampFresh(components.t[0])) {
    return NextResponse.json({ error: 'Stripe webhook timestamp is too old' }, { status: 400 })
  }

  let expectedSignature
  try {
    expectedSignature = await computeSignature(`${components.t[0]}.${rawBody}`)
  } catch (error) {
    console.error('[Stripe webhook] Signature computation error', error)
    return NextResponse.json({ error: 'Signature computation failed' }, { status: 500 })
  }

  const validSignature = components.v1.some((candidate) => timingSafeEqual(candidate, expectedSignature))
  if (!validSignature) {
    return NextResponse.json({ error: 'Stripe signature mismatch' }, { status: 400 })
  }

  let event
  try {
    event = JSON.parse(rawBody)
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
  }

  const { type, data } = event
  const payload = data?.object || {}

  if (type === 'checkout.session.completed') {
    const metadata = payload.metadata || {}
    const details = {
      plan: metadata.plan || 'inconnu',
      activation: metadata.activation || 'non précisé',
      sessionId: payload.id,
      subscriptionId: payload.subscription,
      customerEmail: payload.customer_details?.email || payload.customer_email || 'non renseigné',
    }
    await Promise.all([
      sendResendEmail(details),
      dispatchLeadWebhook(details),
    ])
  } else if (type === 'invoice.payment_failed') {
    console.warn('[Stripe webhook] invoice.payment_failed', payload.id)
  }

  return NextResponse.json({ received: true })
}

export function GET() {
  return methodNotAllowed()
}

export function PUT() {
  return methodNotAllowed()
}

export function PATCH() {
  return methodNotAllowed()
}

export function DELETE() {
  return methodNotAllowed()
}

export function OPTIONS() {
  return methodNotAllowed()
}

export function HEAD() {
  return methodNotAllowed()
}
