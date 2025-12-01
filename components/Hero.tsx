import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center bg-brand-blue text-white pt-28 md:pt-36 pb-20 overflow-hidden">
      {/* Background Image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000" 
          alt="Advocacia Background" 
          className="w-full h-full object-cover opacity-20 transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue via-brand-blue/90 to-brand-blue/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        <div className="max-w-4xl mx-auto animate-[fadeIn_1s_ease-out]">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Débitos com a <span className="text-brand-gold">Receita Federal</span> ou Execução Fiscal?
          </h1>
          
          <div className="w-16 md:w-24 h-1 bg-brand-gold mb-8 mx-auto rounded-full"></div>
          
          <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light max-w-2xl mx-auto mb-10">
            Não espere a dívida crescer. A solução jurídica e tributária para proteger seu patrimônio começa agora.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-16 px-4">
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=Olá, gostaria de avaliar minha situação tributária.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-goldDark text-brand-blue font-bold py-3.5 px-8 rounded-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-gold/20 text-base md:text-lg uppercase tracking-wide"
          >
            Falar com Advogado
            <ArrowRight size={20} />
          </a>
          
          <a 
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-gold text-white hover:text-brand-gold font-medium py-3.5 px-8 rounded-sm transition-colors text-base md:text-lg bg-brand-blue/50 backdrop-blur-sm uppercase tracking-wide"
          >
            Avaliar Situação
          </a>
        </div>
        
        <div className="pt-8 border-t border-white/10 w-full max-w-4xl flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-brand-gold" />
            <span className="tracking-wide uppercase text-xs md:text-sm">Proteção Patrimonial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-brand-gold" />
            <span className="tracking-wide uppercase text-xs md:text-sm">Atendimento Especializado</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-brand-gold" />
            <span className="tracking-wide uppercase text-xs md:text-sm">OAB/RS 35.604</span>
          </div>
        </div>

      </div>
    </section>
  );
};