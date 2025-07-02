import * as React from "react"

// Different breakpoints can be defined here
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280
}

/**
 * A hook that detects if the current viewport is considered mobile
 * @param breakpoint Optional custom breakpoint (defaults to 768px)
 * @returns boolean indicating if the viewport is mobile-sized
 */
export function useIsMobile(breakpoint = BREAKPOINTS.MOBILE) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return

    // Initial check
    setIsMobile(window.innerWidth < breakpoint)

    // Create media query for future changes
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    
    // Handler for changes to viewport width
    const handleChange = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Modern event listener approach
    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange)
    } else {
      // Fallback for older browsers
      window.addEventListener('resize', handleChange)
    }

    // Cleanup
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleChange)
      } else {
        window.removeEventListener('resize', handleChange)
      }
    }
  }, [breakpoint])

  // Return false during SSR to default to desktop layout
  return typeof isMobile === 'undefined' ? false : isMobile
}

/**
 * A hook that provides various responsive breakpoint states
 * @returns An object with boolean flags for different screen sizes
 */
export function useResponsive() {
  const [screenSize, setScreenSize] = React.useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      const width = window.innerWidth
      setScreenSize({
        isMobile: width < BREAKPOINTS.MOBILE,
        isTablet: width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.DESKTOP,
        isDesktop: width >= BREAKPOINTS.DESKTOP
      })
    }

    // Initial check
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}
