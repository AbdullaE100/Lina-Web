import * as React from "react"

// Define breakpoints for consistent usage across the app
export const BREAKPOINTS = {
  XS: 480, // Extra small devices
  SMALL: 640,  // sm
  MOBILE: 768,  // md
  TABLET: 1024, // lg
  DESKTOP: 1280, // xl
  LARGE: 1536  // 2xl
}

// Hook to check if the viewport is below a certain breakpoint
export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export function useIsMobile() {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.MOBILE}px)`);
}

export function useIsTablet() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.MOBILE + 1}px) and (max-width: ${BREAKPOINTS.TABLET}px)`);
}

export function useIsExtraSmall() {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.XS}px)`);
}

export function useIsSmallDevice() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.XS + 1}px) and (max-width: ${BREAKPOINTS.SMALL}px)`);
}

export function useIsDesktop() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.TABLET + 1}px)`);
}

export function useIsLargeScreen() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.DESKTOP + 1}px)`);
}

export function useDeviceSize() {
  const [deviceSize, setDeviceSize] = React.useState<{
    width: number;
    height: number;
    isExtraSmall: boolean;
    isSmallDevice: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isLargeScreen: boolean;
  }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isExtraSmall: false,
    isSmallDevice: false,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeScreen: false
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setDeviceSize({
        width,
        height,
        isExtraSmall: width <= BREAKPOINTS.XS,
        isSmallDevice: width > BREAKPOINTS.XS && width <= BREAKPOINTS.SMALL,
        isMobile: width <= BREAKPOINTS.MOBILE,
        isTablet: width > BREAKPOINTS.MOBILE && width <= BREAKPOINTS.TABLET,
        isDesktop: width > BREAKPOINTS.TABLET && width <= BREAKPOINTS.DESKTOP,
        isLargeScreen: width > BREAKPOINTS.DESKTOP
      });
    }

    // Add throttling to resize event for better performance
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const throttledResize = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          timeoutId = null;
          handleResize();
        }, 200);
      }
    };

    window.addEventListener('resize', throttledResize);
    handleResize(); // Initial check
    
    return () => {
      window.removeEventListener('resize', throttledResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return deviceSize;
}

// Helper for safe SSR/client side rendering
export function useIsClient() {
  const [isClient, setIsClient] = React.useState(false);
  
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient;
}
