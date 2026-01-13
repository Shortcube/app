'use client'

import { Header, Footer } from '@/components/layout'
import { 
  Hero, 
  TrustBar, 
  Problem, 
  Solution, 
  NotIncluded, 
  Process,
  Pricing,
  Reviews,
  Compliance
} from '@/components/sections'

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
      
      {/* Pricing */}
      <Pricing />
      
      {/* Google Reviews System */}
      <Reviews />
      
      {/* Compliance / Loi 25 */}
      <Compliance />
      
      {/* Contact Form - Placeholder for Phase 5 */}
      <section id="contact" className="py-24 bg-white scroll-mt-header">
        <div className="section-container text-center">
          <h2 className="text-navy mb-4">Formulaire de contact</h2>
          <p className="text-concrete-500">[Section à développer en Phase 5]</p>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
