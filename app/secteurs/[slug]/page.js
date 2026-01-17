import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SECTOR_PAGES, TRADE_PAGES } from '@/lib/content'

// Edge Runtime pour Cloudflare Pages
export const runtime = 'edge'

export function generateMetadata({ params }) {
  const sector = SECTOR_PAGES.find((s) => s.slug === params.slug)
  if (!sector) return { title: 'Secteurs d’activité | BureauWeb' }
  return {
    title: sector.metaTitle ?? `${sector.title} | BureauWeb`,
    description: sector.metaDescription ?? sector.intro,
  }
}

export default function SecteurSlugPage({ params }) {
  const sector = SECTOR_PAGES.find((s) => s.slug === params.slug)
  if (!sector) return notFound()

  const relatedTrades = (sector.relatedTrades || [])
    .map((slug) => TRADE_PAGES.find((trade) => trade.slug === slug))
    .filter(Boolean)

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <nav className="text-sm text-concrete-600">
        <Link href="/secteurs" className="text-safety hover:underline">Secteurs</Link>
        <span className="mx-2">/</span>
        <span className="text-navy">{sector.title}</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy">{sector.title}</h1>
        <p className="mt-4 text-lg text-concrete-600">{sector.intro}</p>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-navy">Métiers typiques</h2>
        <ul className="mt-4 space-y-2 text-concrete-600">
          {sector.typicalTrades.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-concrete-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {relatedTrades.length > 0 && (
        <section className="mt-10 rounded-xl border border-concrete-200 bg-concrete-50 p-6">
          <h2 className="text-xl font-semibold text-navy">Métiers connexes</h2>
          <p className="mt-2 text-concrete-600">
            Pages métiers déjà disponibles pour approfondir l’approche par spécialité.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {relatedTrades.map((trade) => (
              <Link
                key={trade.slug}
                href={`/metiers/${trade.slug}`}
                className="rounded-lg border border-concrete-200 bg-white p-4 text-navy hover:border-concrete-300 hover:shadow-sm transition"
              >
                <p className="font-semibold">{trade.title}</p>
                <p className="mt-2 text-sm text-concrete-600">{trade.hero}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/#contact" className="btn-cta inline-flex items-center justify-center px-6 py-3 rounded-md text-white">
          Diagnostic gratuit
        </Link>
        <Link
          href="/#forfaits"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-concrete-200 text-navy hover:bg-concrete-50"
        >
          Voir les forfaits
        </Link>
      </div>
    </main>
  )
}
