import React from 'react';
import { CONTACT_INFO } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=Olá, vim pelo site e gostaria de saber mais sobre assessoria tributária.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 hover:shadow-green-500/30"
      aria-label="Falar no WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-white"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Fale conosco agora
      </span>
    </a>
  );
};