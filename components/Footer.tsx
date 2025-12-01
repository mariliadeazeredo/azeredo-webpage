import React from 'react';
import { CONTACT_INFO, NAV_ITEMS, LAWYER_NAME, WHATSAPP_MESSAGE } from '../constants';
import { Logo } from './Logo';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">

        {/* Layout Flex para Desktop, Coluna para Mobile */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">

          {/* Coluna da Marca (Logo e Descrição) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:max-w-sm">
            <div className="mb-6 transform scale-90 md:scale-100 origin-center md:origin-left">
              <Logo variant="horizontal" className="text-white" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Advocacia tributária com estratégia e resultado. Especialistas em proteger o patrimônio de empresas e profissionais liberais.
            </p>
          </div>

          {/* Grupo Links + Contato (Lado a Lado sempre) */}
          <div className="grid grid-cols-2 gap-8 md:gap-24 w-full md:w-auto">

            {/* Links Rápidos */}
            <div className="flex flex-col items-start">
              <h4 className="font-serif font-bold text-lg text-brand-gold mb-6 relative inline-block">
                Links
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-gold/50 rounded-full -mb-2"></span>
              </h4>
              <ul className="space-y-3 w-full text-left">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-brand-gold transition-colors text-sm py-1 block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div className="flex flex-col items-start">
              <h4 className="font-serif font-bold text-lg text-brand-gold mb-6 relative inline-block">
                Contato
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-gold/50 rounded-full -mb-2"></span>
              </h4>
              <ul className="space-y-4 text-sm text-gray-400 w-full text-left">
                <li className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-brand-gold mb-1">
                    <MapPin size={14} />
                    <span className="font-bold text-xs uppercase">Endereço</span>
                  </div>
                  <span>{CONTACT_INFO.address}</span>
                  <span>{CONTACT_INFO.city}</span>
                </li>

                <li className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-brand-gold mb-1">
                    <Phone size={14} />
                    <span className="font-bold text-xs uppercase">Telefone</span>
                  </div>
                  <div className="flex flex-col">
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="hover:text-brand-gold transition-colors">{CONTACT_INFO.phone}</a>
                    <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} className="hover:text-brand-gold transition-colors">{CONTACT_INFO.whatsapp}</a>
                  </div>
                </li>

                <li className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-brand-gold mb-1">
                    <Mail size={14} />
                    <span className="font-bold text-xs uppercase">Email</span>
                  </div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-gold transition-colors break-all">{CONTACT_INFO.email}</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 mt-12 pt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center md:text-left">
          <p>© {new Date().getFullYear()} {LAWYER_NAME}. <span className="hidden sm:inline">Todos os direitos reservados.</span></p>
          <div className="flex items-center gap-4">
            <p>OAB/RS 35.604</p>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <p>Privacidade</p>
          </div>
        </div>
      </div>
    </footer>
  );
};