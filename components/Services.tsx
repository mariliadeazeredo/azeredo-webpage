import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            O Que Fazemos
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Soluções completas para regularizar sua situação fiscal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-brand-gold transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-white text-brand-blue border border-brand-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-brand-gold transition-all shadow-sm">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-blue mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="mt-16 bg-brand-blue rounded-xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">
                Condições Especiais de Parcelamento
              </h3>
              <p className="text-gray-300">
                Através de <strong>Transações Tributárias</strong>, analisamos oportunidades para:
              </p>
            </div>

            <div className="flex flex-row gap-8 text-center md:w-1/3 justify-center md:justify-end">
              <div>
                <span className="block text-3xl md:text-4xl font-bold text-brand-gold">145x</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Parcelas</span>
              </div>
              <div className="w-px bg-white/10 h-12"></div>
              <div>
                <span className="block text-3xl md:text-4xl font-bold text-brand-gold">70%</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Redução</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};