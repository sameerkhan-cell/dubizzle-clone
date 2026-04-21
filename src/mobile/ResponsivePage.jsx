import useIsMobile from '../hooks/useIsMobile'

/**
 * Wrapper that conditionally renders mobile or desktop layout.
 * Desktop components pass through completely untouched.
 */
export default function ResponsivePage({ desktop, mobile }) {
  const isMobile = useIsMobile()
  return isMobile ? mobile : desktop
}
