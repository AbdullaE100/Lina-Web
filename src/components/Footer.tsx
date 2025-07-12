import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TouchButton } from "./ui/touch-button";
import { ArrowRight, Mail, Phone, Instagram, Linkedin, Facebook, Twitter, ChevronRight, Loader2, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useDeviceSize } from "@/hooks/use-mobile";
import { useState } from "react";
import { subscribeToNewsletter } from "@/lib/newsletter";
import { toast } from "@/components/ui/use-toast";

const Footer = () => {
  const { isExtraSmall, isMobile } = useDeviceSize();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        setIsSuccess(true);
        setEmail("");
        toast({
          title: "Subscription successful!",
          description: "Thank you for subscribing to our newsletter.",
        });
        
        // Reset success state after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } else {
        toast({
          title: "Subscription failed",
          description: result.error || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <footer className="bg-[#1A2330] text-white pt-16 xs:pt-20 sm:pt-24 pb-6 sm:pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A875]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link to="/" className="inline-block mb-5 sm:mb-6">
              <div className="mb-1">
                <h2 
                  className="font-display text-2xl xs:text-3xl tracking-[0.15em] text-[#C0A875]"
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
                className="text-[9px] xs:text-[10px] tracking-[0.3em] text-gray-400"
                style={{ letterSpacing: '0.3em' }}
              >
                LUXURY REAL ESTATE ADVISORY
              </span>
            </Link>
            
            <div className="flex items-center gap-2 text-[#C0A875] mb-5 sm:mb-6">
              <div className="h-px w-6 xs:w-8 bg-[#C0A875]"></div>
              <span className="text-[10px] xs:text-xs tracking-wider">CEO, EXPATKEY PROPERTIES</span>
            </div>
            
            <p className="text-gray-300 text-sm xs:text-base leading-relaxed mb-6 sm:mb-8 pr-0 sm:pr-4">
              Smart Real Estate. Global Vision. Strategic guidance for investments 
              across Sri Lanka and Dubai with two decades of proven market expertise and cultural 
              intelligence.
            </p>
            
            <div className="flex flex-col space-y-4">
              <a href="mailto:lina@expatkey.com" className="flex items-center space-x-3 xs:space-x-4 group">
                <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-full bg-[#2A3441] flex items-center justify-center hover:bg-[#C0A875] transition-colors duration-300">
                  <Mail className="w-4 h-4 xs:w-5 xs:h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-300 text-sm xs:text-base group-hover:text-white transition-colors duration-300">lina@expatkey.com</span>
              </a>
              
              <a href="tel:+94777725485" className="flex items-center space-x-3 xs:space-x-4 group">
                <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-full bg-[#2A3441] flex items-center justify-center hover:bg-[#C0A875] transition-colors duration-300">
                  <Phone className="w-4 h-4 xs:w-5 xs:h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-300 text-sm xs:text-base group-hover:text-white transition-colors duration-300">+94 77 772 5485</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="sm:col-span-1 lg:col-span-3 mt-2 sm:mt-0">
            <h3 className="text-base xs:text-lg font-medium mb-5 xs:mb-6 relative inline-block">
              Navigation
              <div className="absolute -bottom-2 left-0 w-10 xs:w-12 h-0.5 bg-[#C0A875]"></div>
            </h3>
            
            <nav className="flex flex-col space-y-3 xs:space-y-4 mt-6 xs:mt-8">
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
                  className="text-gray-300 text-sm xs:text-base hover:text-white transition-colors group flex items-center tap-highlight-transparent"
                >
                  <span className="w-0 h-px bg-[#C0A875] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Connect */}
          <div className="sm:col-span-1 lg:col-span-4 mt-2 sm:mt-0">
            <h3 className="text-base xs:text-lg font-medium mb-5 xs:mb-6 relative inline-block">
              Exclusive Updates
              <div className="absolute -bottom-2 left-0 w-10 xs:w-12 h-0.5 bg-[#C0A875]"></div>
            </h3>
            
            <p className="text-gray-300 text-sm xs:text-base mb-5 xs:mb-6 leading-relaxed">
              Subscribe for exclusive market insights and investment opportunities.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#2A3441] border-0 text-white h-10 text-sm placeholder:text-gray-500 focus:ring-1 focus:ring-[#C0A875]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || isSuccess}
                required
              />
              <TouchButton 
                type="submit"
                className="bg-[#C0A875] hover:bg-[#D4BC8A] text-black border-0 h-10 px-3 xs:px-4"
                ripple={true}
                scaleOnPress={true}
                disabled={isSubmitting || isSuccess}
              >
                <span className="flex items-center text-sm">
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : isSuccess ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <>
                      <span className="hidden xs:inline">Join</span>
                      <span className="xs:hidden">Go</span>
                      <ChevronRight className="ml-1 w-3 h-3 xs:w-4 xs:h-4" />
                    </>
                  )}
                </span>
              </TouchButton>
            </form>
            
            <div className="mt-10 sm:mt-12">
              <h3 className="text-base xs:text-lg font-medium mb-5 xs:mb-6 relative inline-block">
                Connect
                <div className="absolute -bottom-2 left-0 w-10 xs:w-12 h-0.5 bg-[#C0A875]"></div>
              </h3>
              
              <div className="flex items-center space-x-3 xs:space-x-4">
                <a
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 xs:w-10 xs:h-10 rounded-full bg-[#2A3441] flex items-center justify-center hover:bg-[#C0A875] transition-colors duration-300 tap-highlight-transparent"
                >
                  <Instagram className="w-4 h-4 xs:w-5 xs:h-5 text-gray-300" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 xs:w-10 xs:h-10 rounded-full bg-[#2A3441] flex items-center justify-center hover:bg-[#C0A875] transition-colors duration-300 tap-highlight-transparent"
                >
                  <Linkedin className="w-4 h-4 xs:w-5 xs:h-5 text-gray-300" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 xs:w-10 xs:h-10 rounded-full bg-[#2A3441] flex items-center justify-center hover:bg-[#C0A875] transition-colors duration-300 tap-highlight-transparent"
                >
                  <Facebook className="w-4 h-4 xs:w-5 xs:h-5 text-gray-300" />
                </a>
                <a
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 xs:w-10 xs:h-10 rounded-full bg-[#2A3441] flex items-center justify-center hover:bg-[#C0A875] transition-colors duration-300 tap-highlight-transparent"
                >
                  <Twitter className="w-4 h-4 xs:w-5 xs:h-5 text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-10 sm:mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs sm:text-sm text-gray-500">
              © {new Date().getFullYear()} Lina Nizar. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-gray-400 transition-colors tap-highlight-transparent">
                Privacy Policy
              </a>
              <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-gray-400 transition-colors tap-highlight-transparent">
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