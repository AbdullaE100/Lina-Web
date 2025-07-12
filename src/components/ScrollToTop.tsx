import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that resets scroll position to top when navigating between routes
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // When the route changes, scroll to the top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Using "instant" instead of "smooth" to avoid visual jumps
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop; 