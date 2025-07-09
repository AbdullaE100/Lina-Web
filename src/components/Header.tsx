import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.97)',
          color: isTransparent ? 'white' : '#1A1A1A',
          borderBottom: isTransparent ? 'none' : '1px solid rgba(0,0,0,0.05)',
          backdropFilter: isTransparent ? 'none' : 'blur(10px)',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link to="/" className="flex flex-col group">
            <div className="mb-1">
              <span 
                className="font-luxury text-3xl tracking-[0.15em]"
                style={{ 
                  letterSpacing: '0.2em',
                  textShadow: isTransparent ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                  textTransform: 'uppercase'
                }}
          >
                <span className="relative inline-block">
                  L
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
                INA
                <span className="mx-2"></span>
                <span className="relative inline-block">
                  N
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
                IZAR
              </span>
                </div>
                          <span 
              className="text-[11px] tracking-[0.3em] opacity-100 font-medium"
              style={{ letterSpacing: '0.3em' }}
            >
              LUXURY REAL ESTATE ADVISORY
            </span>
            </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-xs tracking-widest transition-all hover:opacity-100 group font-ui ${
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

          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant={isTransparent ? "outline" : "default"}
              className={`rounded-none px-7 py-4 h-auto text-xs tracking-widest group relative overflow-hidden font-ui ${
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

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col space-y-1.5 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span 
              className={`block w-6 h-0.5 ${isTransparent || isMenuOpen ? 'bg-white' : 'bg-[#1A1A1A]'}`}
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                />
            <motion.span 
              className={`block w-6 h-0.5 ${isTransparent || isMenuOpen ? 'bg-white' : 'bg-[#1A1A1A]'}`}
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
                />
            <motion.span 
              className={`block w-6 h-0.5 ${isTransparent || isMenuOpen ? 'bg-white' : 'bg-[#1A1A1A]'}`}
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
        <AnimatePresence>
        {isMenuOpen && (
            <motion.div
            className="fixed inset-0 bg-[#1A1A1A] z-40 flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                    <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-white text-2xl font-ui tracking-wide ${isActive ? 'text-[#C0A875]' : ''}`
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
                transition={{ delay: 0.5 }}
              >
                <Button 
                  className="bg-gradient-to-r from-[#D4BC8A] to-[#C0A875] hover:from-[#E5CDA1] hover:to-[#D1B886] text-black border-none rounded-none px-8 py-6 mt-6 text-sm tracking-wide font-ui shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 glow-gold pulse-animation-gold"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="flex items-center">
                    <span>CONTACT US</span>
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </nav>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  );
};

export default Header;