import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <div className="text-title font-serif font-normal mb-3">
                Lina Nizar
              </div>
              <div className="text-caption text-primary-foreground/80 tracking-[0.2em] uppercase mb-6">
                CEO, ExpatKey Properties
              </div>
              <p className="text-body text-primary-foreground/70 max-w-md leading-relaxed">
                Smart Real Estate. Global Vision. Strategic guidance for luxury real estate 
                investments across Sri Lanka and Dubai with two decades of proven market expertise 
                and cultural intelligence.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-primary-foreground/70">
                <span className="text-lg">📧</span>
                <a href="mailto:lina@expatkey.com" className="hover:text-gold transition-luxury">
                  lina@expatkey.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/70">
                <span className="text-lg">📱</span>
                <a href="tel:+94777725485" className="hover:text-gold transition-luxury">
                  +94 77 772 5485
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-8">Navigation</h3>
            <ul className="space-y-4">
              {["About", "Portfolio", "Services", "Insights", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-luxury"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Connect */}
          <div>
            <h3 className="text-lg font-medium mb-8">Connect</h3>
            <div className="space-y-4">
              <a
                href="https://instagram.com/lina_in_realestate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-foreground/70 hover:text-gold transition-luxury group"
              >
                <span className="text-lg group-hover:scale-110 transition-luxury">📸</span>
                <span>Instagram</span>
              </a>
              <a
                href="https://linkedin.com/in/lina-nizar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-foreground/70 hover:text-gold transition-luxury group"
              >
                <span className="text-lg group-hover:scale-110 transition-luxury">🔗</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-16 pt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © 2024 Lina Nizar. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-luxury">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-luxury">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;