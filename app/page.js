'use client'

import { Header, Footer } from '@/components/layout'
import { Hero, TrustBar, Problem, Solution, NotIncluded, Process } from '@/components/sections'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Trust Bar */}
      <TrustBar />
      
      {/* Problem Section */}
      <Problem />
      
      {/* Solution Section */}
      <Solution />
      
      {/* What's NOT Included */}
      <NotIncluded />
      
      {/* Process / How it Works */}
      <Process />
      
      {/* Placeholder sections for Phase 4+ */}
      <section id="forfaits" className="py-24 bg-concrete-50 scroll-mt-header">
        <div className="section-container text-center">
          <h2 className="text-navy mb-4">Forfaits et Prix</h2>
          <p className="text-concrete-500">[Section à développer en Phase 4]</p>
        </div>
      </section>
      
      <section id="avis" className="py-24 scroll-mt-header">
        <div className="section-container text-center">
          <h2 className="text-navy mb-4">Système d'avis Google</h2>
          <p className="text-concrete-500">[Section à développer en Phase 4]</p>
        </div>
      </section>
      
      <section id="conformite" className="py-24 bg-concrete-50 scroll-mt-header">
        <div className="section-container text-center">
          <h2 className="text-navy mb-4">Conformité Loi 25</h2>
          <p className="text-concrete-500">[Section à développer en Phase 4]</p>
        </div>
      </section>
      
      <section id="contact" className="py-24 scroll-mt-header">
        <div className="section-container text-center">
          <h2 className="text-navy mb-4">Formulaire de contact</h2>
          <p className="text-concrete-500">[Section à développer en Phase 4]</p>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
