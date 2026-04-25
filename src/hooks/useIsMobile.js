import { useState, useEffect } from 'react'

/**
 * Custom hook to detect mobile viewport.
 * Returns `true` when window width is below the given breakpoint (default 768px).
 * Desktop components are never affected — this hook is read-only.
 */
export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const handler = (e) => setIsMobile(e.matches)

    // Modern browsers
    if (mql.addEventListener) {
      mql.addEventListener('change', handler)
    } else {
      mql.addListener(handler)
    }

    // Sync on mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(mql.matches)

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', handler)
      } else {
        mql.removeListener(handler)
      }
    }
  }, [breakpoint])

  return isMobile
}
