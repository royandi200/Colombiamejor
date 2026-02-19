import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Cursos', href: '#cursos' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-nav'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo - 30% más grande (de h-12 a h-16 aprox) */}
            <motion.a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#inicio');
              }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/logo-transparent.png" 
                alt="Fundación Colombia Mejor"
                className={`h-16 md:h-20 w-auto object-contain transition-all duration-300 ${
                  !isScrolled 
                    ? 'drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)] brightness-110' 
                    : ''
                }`}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`font-medium text-sm transition-colors duration-200 hover:text-colombia-green ${
                    isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection('#cursos')}
                className="bg-colombia-green hover:bg-colombia-green-dark text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Inscríbete Ahora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-institucional-blue/95 backdrop-blur-lg" />
            <div className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white text-2xl font-heading font-semibold hover:text-dorado transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={() => scrollToSection('#cursos')}
                  className="bg-colombia-green hover:bg-colombia-green-dark text-white font-semibold px-8 py-3 rounded-lg text-lg"
                >
                  Inscríbete Ahora
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
