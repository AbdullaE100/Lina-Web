import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { Button } from './ui/button';

const navLinks = [
  { path: '/about', label: 'ABOUT' },
  { path: '/portfolio', label: 'PORTFOLIO' },
  { path: '/services', label: 'SERVICES' },
  { path: '/insights', label: 'INSIGHTS' },
];

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  return (
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
        <Link to="/" className="flex flex-col">
          <div className="mb-1">
            <span 
              className="font-display text-3xl tracking-[0.15em]"
              style={{ 
                fontWeight: 300,
                letterSpacing: '0.2em',
                textShadow: isTransparent ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                textTransform: 'uppercase'
              }}
            >
              Lina Nizar
            </span>
          </div>
          <span 
            className="text-[10px] tracking-[0.3em] opacity-90 font-light"
            style={{ letterSpacing: '0.3em' }}
          >
            LUXURY REAL ESTATE CONSULTANT
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-xs tracking-widest transition-opacity hover:opacity-100 hover-underline ${
                  isActive ? 'opacity-100' : 'opacity-80'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
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

        <Button 
          variant={isTransparent ? "outline" : "default"}
          className={`hidden md:inline-flex rounded-none px-6 py-2 text-xs tracking-widest ${
            isTransparent 
              ? 'border-white text-white hover:bg-white/10' 
              : 'border-[#C0A875] bg-transparent text-[#C0A875] hover:bg-[#C0A875]/5'
          }`}
        >
          <Link to="/contact">CONTACT</Link>
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;