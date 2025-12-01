import React from 'react';
import { STEPS, CONTACT_INFO, WHATSAPP_MESSAGE } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-12 md:py-20 bg-brand-blue text-white relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Passo a Passo</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">
            Como funciona o atendimento
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Connector Line (Desktop) */}
              {index < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/10 group-hover:bg-brand-gold/50 transition-colors"></div>
              )}

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-brand-blue border-2 border-brand-gold rounded-full flex items-center justify-center text-brand-gold mb-6 text-xl font-bold shadow-[0_0_15px_rgba(251,191,36,0.2)] group-hover:scale-110 transition-transform bg-brand-blue">
                  <step.icon size={28} />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-gold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-goldDark text-brand-blue font-bold py-3 px-8 rounded-sm transition-colors"
          >
            Iniciar Agora
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};