'use client'

import { forwardRef, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { PREVIOUS_PATH_KEY } from '@/lib/navigation'

const BackToHomeLink = forwardRef(function BackToHomeLink(
  { homeHref = '/', onClick, ...props },
  ref
) {
  const router = useRouter()

  const handleClick = useCallback(
    (event) => {
      if (onClick) {
        onClick(event)
      }
      if (event.defaultPrevented) return

      event.preventDefault()

      let previousPath = null
      try {
        previousPath = sessionStorage.getItem(PREVIOUS_PATH_KEY)
      } catch {
        previousPath = null
      }

      if (previousPath === '/') {
        router.back()
        return
      }

      router.push(homeHref)
    },
    [homeHref, onClick, router]
  )

  return <Link ref={ref} href={homeHref} onClick={handleClick} {...props} />
})

export default BackToHomeLink
