import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#1A2330] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="inline-block mb-3">
              <div className="mb-1">
                <h2 
                  className="font-display text-3xl tracking-[0.15em] text-[#C0A875]"
                  style={{ 
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    textShadow: '0 1px 2px rgba(0,0,0,0.05)',
                    textTransform: 'uppercase'
                  }}
                >
                  Lina Nizar
                </h2>
              </div>
              <span 
                className="text-[10px] tracking-[0.3em] text-gray-400"
                style={{ letterSpacing: '0.3em' }}
              >
                LUXURY REAL ESTATE CONSULTANT
              </span>
            </Link>
            <p className="text-sm text-gray-400 mt-6 mb-6">CEO, EXPATKEY PROPERTIES</p>
            
            <p className="text-sm text-gray-300 leading-relaxed">
              Smart Real Estate. Global Vision. Strategic guidance for luxury real estate investments 
              across Sri Lanka and Dubai with two decades of proven market expertise and cultural 
              intelligence.
            </p>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#2A3441] flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" />
                </svg>
              </div>
              <span className="text-gray-300">lina@expatkey.com</span>
            </div>
            
            <div className="mt-4 flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#2A3441] flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16.42v3.536a1 1 0 01-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 014.044 3H7.58a.5.5 0 01.498.45c.023.23.044.413.064.552A13.901 13.901 0 0019.645 15.5c.139.02.322.042.552.064a.5.5 0 01.45.498z" />
                </svg>
              </div>
              <span className="text-gray-300">+94 77 772 5485</span>
            </div>
          </div>
          
          {/* Column 2: Navigation */}
          <div className="md:ml-12">
            <h3 className="text-lg font-medium mb-6">Navigation</h3>
            <nav className="flex flex-col space-y-4">
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/insights" className="text-gray-300 hover:text-white transition-colors">
                Insights
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Column 3: Connect */}
          <div>
            <h3 className="text-lg font-medium mb-6">Exclusive Updates</h3>
            <p className="text-sm text-gray-300 mb-6">
              Subscribe for exclusive market insights and investment opportunities.
            </p>
            
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#2A3441] border-0 text-white placeholder:text-gray-500"
              />
              <Button className="bg-muted-gold hover:bg-muted-gold/90 text-white border-0">
                Join
              </Button>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Connect</h3>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#2A3441] flex items-center justify-center hover:bg-muted-gold/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#2A3441] flex items-center justify-center hover:bg-muted-gold/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Lina Nizar. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-400">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;