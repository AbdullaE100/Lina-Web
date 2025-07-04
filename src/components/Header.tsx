import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-fluid ${
        isScrolled
          ? "glass shadow-elevated border-b border-border/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group flex-shrink-0 magnetic">
            <div className="flex flex-col">
              <div className="text-title font-display font-light text-primary group-hover:text-gradient-gold transition-fluid">
                Lina Nizar
              </div>
              <div className="text-xs tracking-[0.3em] text-muted-foreground font-medium uppercase opacity-70">
                Real Estate Advisory
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-fluid group magnetic ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span className="relative z-10 tracking-wide">{item.name}</span>
                {location.pathname === item.path && (
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-gold rounded-full opacity-80" />
                )}
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-gold rounded-full transition-all duration-500 group-hover:w-full opacity-60" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Book Strategy Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-400 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-400 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-400 ${
                  isMobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                }`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass border-b border-border/20 shadow-floating backdrop-blur-xl">
            <nav className="flex flex-col space-y-6 p-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-fluid magnetic ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-border/20">
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <Link to="/contact">Book Strategy Call</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;