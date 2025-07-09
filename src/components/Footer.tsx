import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone, Instagram, Linkedin, Facebook, Twitter, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#1A2330] text-white pt-24 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-6">
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
            
            <div className="flex items-center gap-2 text-[#C0A875] mb-6">
              <div className="h-px w-8 bg-[#C0A875]"></div>
              <span className="text-xs tracking-wider">CEO, EXPATKEY PROPERTIES</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8">
              Smart Real Estate. Global Vision. Strategic guidance for luxury real estate investments 
              across Sri Lanka and Dubai with two decades of proven market expertise and cultural 
              intelligence.
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#2A3441] flex items-center justify-center group hover:bg-[#C0A875] transition-colors duration-300">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">lina@expatkey.com</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#2A3441] flex items-center justify-center group hover:bg-[#C0A875] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-300">+94 77 772 5485</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium mb-6 relative inline-block">
              Navigation
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#C0A875]"></div>
            </h3>
            
            <nav className="flex flex-col space-y-4 mt-8">
              {[
                { to: "/about", label: "About" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/services", label: "Services" },
                { to: "/insights", label: "Insights" },
                { to: "/contact", label: "Contact" },
              ].map((link, index) => (
                  <Link
                  key={index}
                  to={link.to} 
                  className="text-gray-300 hover:text-white transition-colors group flex items-center"
                  >
                  <span className="w-0 h-px bg-[#C0A875] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  {link.label}
                  </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Connect */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-medium mb-6 relative inline-block">
              Exclusive Updates
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#C0A875]"></div>
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Subscribe for exclusive market insights and investment opportunities delivered directly to your inbox.
            </p>
            
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#2A3441] border-0 text-white placeholder:text-gray-500 focus:ring-1 focus:ring-[#C0A875]"
              />
              <Button className="bg-[#C0A875] hover:bg-[#D4BC8A] text-black border-0 group flex items-center">
                <span>Join</span>
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            <div className="mt-12">
              <h3 className="text-lg font-medium mb-6 relative inline-block">
                Connect
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#C0A875]"></div>
              </h3>
              
              <div className="flex items-center space-x-4">
              <a
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#2A3441] flex items-center justify-center hover:bg-[#C0A875] transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 text-gray-300" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#2A3441] flex items-center justify-center hover:bg-[#C0A875] transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-gray-300" />
                </a>
                <a 
                  href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#2A3441] flex items-center justify-center hover:bg-[#C0A875] transition-colors duration-300"
              >
                  <Facebook className="w-5 h-5 text-gray-300" />
              </a>
              <a
                  href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#2A3441] flex items-center justify-center hover:bg-[#C0A875] transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5 text-gray-300" />
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
              <a href="#" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
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