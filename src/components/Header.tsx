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
      className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
        isScrolled
          ? "glass shadow-lg border-b border-border/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-9xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group flex-shrink-0">
            <div className="flex flex-col">
              <div className="text-title font-serif font-normal text-primary group-hover:text-gradient-gold transition-luxury">
                Lina Nizar
              </div>
              <div className="text-xs tracking-[0.2em] text-muted-foreground font-light uppercase">
                Real Estate Advisory
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-luxury group ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname === item.path && (
                  <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-gold rounded-full" />
                )}
                <div className="absolute -bottom-2 left-0 w-0 h-px bg-gradient-gold rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="cta" size="lg" asChild>
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
            <div className="relative w-6 h-6">
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass border-b border-border/20 shadow-xl">
            <nav className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-luxury ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/20">
                <Button variant="cta" size="lg" className="w-full" asChild>
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