'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

const SCROLL_THRESHOLD_PX = 500

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD_PX)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Retour en haut"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed z-40 rounded-full bg-navy px-3 py-3 text-white shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety focus-visible:ring-offset-2 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'pointer-events-none opacity-0 translate-y-2'
      }`}
      style={{
        bottom: 'calc(1rem + env(safe-area-inset-bottom))',
        right: 'calc(1rem + env(safe-area-inset-right))',
      }}
    >
      <ChevronUp className="h-4 w-4" aria-hidden="true" />
    </button>
  )
}

export default ScrollToTopButton
