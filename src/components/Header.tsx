import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronRight, Menu, X } from 'lucide-react';
import { useDeviceSize, useIsExtraSmall } from '@/hooks/use-mobile';

const navLinks = [
  { path: '/about', label: 'ABOUT' },
  { path: '/portfolio', label: 'PORTFOLIO' },
  { path: '/services', label: 'SERVICES' },
  { path: '/insights', label: 'INSIGHTS' },
];

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isMobile, isTablet, isSmallDevice, isExtraSmall } = useDeviceSize();
  const showMobileMenu = isMobile || isTablet;
  const isVerySmallScreen = isExtraSmall;

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled && !isMenuOpen;

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isMenuOpen ? 'bg-transparent' : ''
        }`}
        style={{
          backgroundColor: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.97)',
          color: isTransparent ? 'white' : '#1A1A1A',
          borderBottom: isTransparent ? 'none' : '1px solid rgba(0,0,0,0.05)',
          backdropFilter: isTransparent ? 'none' : 'blur(10px)',
          paddingTop: 'env(safe-area-inset-top)',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 xs:h-18 sm:h-20 md:h-24 flex items-center justify-between">
          <Link to="/" className="flex flex-col group z-50">
            <div className="mb-1">
              <span 
                className={`font-luxury text-xl xs:text-2xl sm:text-2xl md:text-3xl tracking-[0.15em] ${
                  isMenuOpen ? 'text-white' : ''
                }`}
                style={{ 
                  letterSpacing: '0.15em', // Reduce letter spacing on mobile
                  textShadow: isTransparent ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                  textTransform: 'uppercase'
                }}
              >
                <span className="relative inline-block">
                  L
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
                INA
                <span className="mx-1 xs:mx-2"></span>
                <span className="relative inline-block">
                  N
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
                IZAR
              </span>
            </div>
            <span 
              className={`text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.2em] xs:tracking-[0.25em] opacity-100 font-medium ${
                isMenuOpen ? 'text-white' : ''
              }`}
              style={{ letterSpacing: '0.25em' }}
            >
              LUXURY REAL ESTATE ADVISORY
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-xs tracking-widest transition-all hover:opacity-100 group font-ui tap-highlight-transparent ${
                    isActive ? 'opacity-100' : 'opacity-80'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    {isActive && (
                    <motion.div 
                        className="absolute -bottom-1 left-0 right-0 h-[1px] bg-current"
                        layoutId="underline"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant={isTransparent ? "outline" : "default"}
              className={`rounded-none px-5 lg:px-7 py-4 h-auto text-xs tracking-widest group relative overflow-hidden font-ui ${
                isTransparent 
                  ? 'border-[2px] border-[#D4BC8A] text-[#D4BC8A] hover:bg-[#D4BC8A]/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow-gold pulse-animation-gold' 
                  : 'bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] text-black hover:from-[#E5CDA1] hover:to-[#D1B886] border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow-gold pulse-animation-gold'
              }`}
            >
              <Link to="/contact" className="flex items-center">
                <span className="relative z-10">CONTACT</span>
                <ChevronRight className="ml-1 w-3 h-3 relative z-10" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button - Improved for touch */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 touch-callout-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence initial={false} mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`w-6 h-6 ${isTransparent || isMenuOpen ? 'text-white' : 'text-[#1A1A1A]'}`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col space-y-1.5"
                >
                  <span 
                    className={`block w-5 sm:w-6 h-0.5 ${isTransparent || isMenuOpen ? 'bg-white' : 'bg-[#1A1A1A]'}`}
                  />
                  <span 
                    className={`block w-5 sm:w-6 h-0.5 ${isTransparent || isMenuOpen ? 'bg-white' : 'bg-[#1A1A1A]'}`}
                  />
                  <span 
                    className={`block w-5 sm:w-6 h-0.5 ${isTransparent || isMenuOpen ? 'bg-white' : 'bg-[#1A1A1A]'}`}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu - Improved animation, layout and touch interactions */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 bg-[#1A1A1A] z-40 flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              paddingTop: 'calc(env(safe-area-inset-top) + 1rem)',
              paddingBottom: 'env(safe-area-inset-bottom)',
              paddingLeft: 'env(safe-area-inset-left)',
              paddingRight: 'env(safe-area-inset-right)',
            }}
          >
            <nav className="flex flex-col items-center gap-5 xs:gap-6 sm:gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="w-full text-center"
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `inline-block py-2 px-4 text-white text-lg xs:text-xl sm:text-2xl font-ui tracking-wide 
                      ${isActive ? 'text-[#C0A875]' : ''} 
                      active:scale-95 transition-transform duration-150 touch-callout-none tap-highlight-transparent`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-4 sm:mt-6 w-full flex justify-center"
              >
                <Button 
                  className="bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] hover:from-[#E5CDA1] hover:to-[#D1B886] 
                  text-black border-none rounded-none px-6 sm:px-8 py-5 sm:py-6 text-sm tracking-wide font-ui 
                  shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 w-3/4 xs:w-auto
                  tap-highlight-transparent touch-callout-none"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center w-full">
                    <span>CONTACT US</span>
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </nav>
            
            {/* Social links for mobile menu */}
            <motion.div 
              className="absolute bottom-8 sm:bottom-12 flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <a 
                href="https://instagram.com/lina_in_realestate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/lina-nizar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white opacity-70 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;