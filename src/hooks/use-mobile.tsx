import * as React from "react"

// Define breakpoints for consistent usage across the app
export const BREAKPOINTS = {
  MOBILE: 640,  // sm
  TABLET: 768,  // md
  DESKTOP: 1024 // lg
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.MOBILE}px)`)
    
    const onChange = () => {
      setIsMobile(window.innerWidth <= BREAKPOINTS.MOBILE)
    }
    
    // Modern event listener
    mql.addEventListener("change", onChange)
    
    // Initial check
    onChange()
    
    // Clean up
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${BREAKPOINTS.MOBILE + 1}px) and (max-width: ${BREAKPOINTS.TABLET}px)`)
    
    const onChange = () => {
      setIsTablet(window.innerWidth > BREAKPOINTS.MOBILE && window.innerWidth <= BREAKPOINTS.TABLET)
    }
    
    mql.addEventListener("change", onChange)
    onChange()
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isTablet
}

export function useDeviceSize() {
  const [deviceSize, setDeviceSize] = React.useState<{
    width: number;
    height: number;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false
  })

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      setDeviceSize({
        width,
        height,
        isMobile: width <= BREAKPOINTS.MOBILE,
        isTablet: width > BREAKPOINTS.MOBILE && width <= BREAKPOINTS.TABLET,
        isDesktop: width > BREAKPOINTS.TABLET
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial check
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return deviceSize
}
