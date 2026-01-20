'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { LAST_PATH_KEY, PREVIOUS_PATH_KEY } from '@/lib/navigation'

const RouteTracker = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return

    try {
      const lastPath = sessionStorage.getItem(LAST_PATH_KEY)
      if (lastPath && lastPath !== pathname) {
        sessionStorage.setItem(PREVIOUS_PATH_KEY, lastPath)
      }
      sessionStorage.setItem(LAST_PATH_KEY, pathname)
    } catch {
      // no-op
    }
  }, [pathname])

  return null
}

export default RouteTracker
