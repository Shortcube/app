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
import { LeadForm } from '@/components/forms'

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
      
      {/* Lead Capture Form */}
      <LeadForm />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
