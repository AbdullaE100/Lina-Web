import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,hsl(42_70%_70%/0.08),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-32 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-12">
              <div className="text-title font-display font-light mb-4 text-gradient-gold">
                Lina Nizar
              </div>
              <div className="text-caption text-primary-foreground/70 tracking-[0.3em] mb-8">
                CEO, ExpatKey Properties
              </div>
              <p className="text-body-xl text-primary-foreground/80 max-w-lg leading-relaxed font-light">
                Smart Real Estate. Global Vision. Strategic guidance for luxury real estate 
                investments across Sri Lanka and Dubai with two decades of proven market expertise 
                and cultural intelligence.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-primary-foreground/70">
                <span className="text-xl">📧</span>
                <a href="mailto:lina@expatkey.com" className="hover:text-gold transition-fluid text-lg">
                  lina@expatkey.com
                </a>
              </div>
              <div className="flex items-center space-x-4 text-primary-foreground/70">
                <span className="text-xl">📱</span>
                <a href="tel:+94777725485" className="hover:text-gold transition-fluid text-lg">
                  +94 77 772 5485
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-medium mb-10 text-primary-foreground">Navigation</h3>
            <ul className="space-y-6">
              {["About", "Portfolio", "Services", "Insights", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-gold transition-fluid magnetic text-base tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-medium mb-10 text-primary-foreground">Connect</h3>
            <div className="space-y-6">
              <a
                href="https://instagram.com/lina_in_realestate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-primary-foreground/70 hover:text-gold transition-fluid group magnetic"
              >
                <span className="text-xl group-hover:scale-110 transition-fluid">📸</span>
                <span className="text-base tracking-wide">Instagram</span>
              </a>
              <a
                href="https://linkedin.com/in/lina-nizar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-primary-foreground/70 hover:text-gold transition-fluid group magnetic"
              >
                <span className="text-xl group-hover:scale-110 transition-fluid">🔗</span>
                <span className="text-base tracking-wide">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-24 pt-16 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-base mb-6 md:mb-0 font-light">
            © 2024 Lina Nizar. All rights reserved.
          </p>
          <div className="flex space-x-10 text-base text-primary-foreground/60">
            <a href="#" className="hover:text-gold transition-fluid tracking-wide">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-fluid tracking-wide">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;