'use client'

import { useRouter } from 'next/navigation'

export default function GoBackButton() {
  const router = useRouter()

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-full border border-safety px-3 py-2 text-sm font-semibold text-safety transition hover:bg-safety hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-safety focus-visible:ring-offset-2"
      onClick={() => router.back()}
    >
      Retour à la page précédente
    </button>
  )
}
