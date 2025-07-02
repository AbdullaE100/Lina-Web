import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-serif font-bold mb-2">
              Lina Nizar
            </div>
            <div className="text-sm text-primary-foreground/80 mb-4">
              CEO, ExpatKey Properties
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Smart Real Estate. Global Vision. Expert guidance for luxury real estate 
              investments in Sri Lanka and Dubai with two decades of market expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Portfolio", "Services", "Insights", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-elegant"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <div className="text-primary-foreground/70">
                📧 lina@expatkey.com
              </div>
              <div className="text-primary-foreground/70">
                📱 +94 77 772 5485
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://instagram.com/lina_in_realestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-gold transition-elegant"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/in/lina-nizar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-gold transition-elegant"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Lina Nizar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;