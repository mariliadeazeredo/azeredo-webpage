import React from 'react';
import { CONTACT_INFO, WHATSAPP_MESSAGE } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full hover:scale-110 transition-all shadow-lg animate-pulse"
      style={{ backgroundColor: '#25d366' }}
      aria-label="Falar no WhatsApp"
    >
      <img
        src="/images/wppfacil.svg"
        alt="WhatsApp"
        className="w-full h-full object-contain drop-shadow-lg"
      />
      <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco agora
      </span>
    </a>
  );
};