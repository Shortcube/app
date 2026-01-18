import { redirect } from 'next/navigation'

import { normalizePlan } from '@/lib/stripe-edge'

export const runtime = 'edge'

const EXPECTED_PLANS = ['depart', 'pro', 'croissance']

export default function PayerPage({ searchParams }) {
  const planParam = String(searchParams?.plan || '')
  let plan = null
  try {
    plan = normalizePlan(planParam)
  } catch (error) {
    plan = null
  }

  if (plan) {
    redirect(`/api/stripe/checkout?plan=${plan}`)
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-navy">Tunnel de paiement Stripe</h1>
      <p className="mt-4 text-concrete-600">
        Passez par <code>/api/stripe/checkout?plan=&lt;nom-forfait&gt;</code> pour créer une session sécurisée.
        Les plans valides sont listés ci-dessous.
      </p>
      <div className="mt-6 rounded-xl border border-concrete-200 bg-concrete-50 p-4 text-sm text-concrete-600">
        <p className="font-semibold text-navy">Paramètre attendu</p>
        <ul className="mt-2 space-y-1">
          {EXPECTED_PLANS.map((item) => (
            <li key={item}>
              • <code>?plan={item}</code>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4 text-xs text-concrete-500">
        Ce point d’entrée redirige immédiatement vers Stripe Checkout ; il n’y a pas de formulaire sur ce site.
      </p>
    </main>
  )
}
