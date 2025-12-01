import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO, WHATSAPP_MESSAGE } from '../constants';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Se rolou a página OU se o menu estiver aberto, usa fundo sólido azul
        isScrolled || isMenuOpen ? 'bg-brand-blue shadow-lg py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center md:justify-between relative">

        {/* Logo Container - Absolute center on mobile, static on desktop */}
        <a
          href="#home"
          className="md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:flex items-center gap-3 group z-50"
        >
          <div className="transition-all duration-300">
            <Logo variant="horizontal" className={isScrolled || isMenuOpen ? "text-white" : "text-white"} />
          </div>
        </a>

        {/* Spacer for mobile layout balance (keeps hamburger on right) */}
        <div className="md:hidden w-8"></div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-brand-gold font-sans font-medium tracking-wide text-sm transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-gold hover:bg-brand-goldDark text-brand-blue font-bold py-2 px-5 rounded-sm transition-colors uppercase text-xs tracking-wider"
          >
            <Phone size={14} />
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-brand-gold transition-colors ml-auto z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-blue border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl h-screen animate-[fadeIn_0.3s_ease-out]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-brand-gold font-medium py-4 border-b border-white/5 text-center text-lg uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            className="mt-6 flex items-center justify-center gap-2 bg-brand-gold text-brand-blue font-bold py-4 rounded-sm uppercase tracking-wide"
          >
            <Phone size={20} />
            Ligar Agora
          </a>
        </div>
      )}
    </header>
  );
};