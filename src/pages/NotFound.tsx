import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-24">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="text-6xl mb-8">🏢</div>
        <h1 className="text-4xl font-serif font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page seems to have moved to a different property.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-luxury text-primary font-semibold rounded-lg hover:shadow-gold transform hover:scale-105 transition-all duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
