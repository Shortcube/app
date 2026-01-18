import { NextResponse } from 'next/server'

import { createCheckoutSessionUrl, getOriginFromHeaders, normalizePlan } from '@/lib/stripe-edge'

export const runtime = 'edge'

export async function GET(request) {
  const planParam = request.nextUrl.searchParams.get('plan') || ''
  let plan
  try {
    plan = normalizePlan(planParam)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  let sessionUrl
  try {
    sessionUrl = await createCheckoutSessionUrl({
      plan,
      origin: getOriginFromHeaders(request.headers),
    })
  } catch (error) {
    console.error('[Stripe checkout]', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.redirect(sessionUrl, 303)
}
