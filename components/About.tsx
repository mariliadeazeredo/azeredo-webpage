import React from 'react';
import { LAWYER_NAME, OAB_NUMBER } from '../constants';
import { Scale, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-gray-50 text-brand-blue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-100">

          {/* Image Side */}
          <div className="w-full lg:w-1/3 relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-brand-gold translate-x-3 translate-y-3 rounded-sm"></div>
              <img
                src="/images/advazeredo.webp"
                alt="João Gustavo de Azeredo - Advogado Tributarista OAB-RS 35.604"
                width="600"
                height="800"
                loading="lazy"
                className="relative w-full max-w-xs h-auto rounded-sm shadow-lg"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="space-y-2">
              <h4 className="text-brand-gold font-bold tracking-widest uppercase text-sm">Quem está à frente da sua defesa</h4>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                {LAWYER_NAME}
              </h2>
              <p className="text-xl text-gray-500 font-serif">{OAB_NUMBER}</p>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Especialista em Direito Tributário com atuação focada em execuções fiscais, recuperação de créditos e transações tributárias.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Minha missão é clara: <strong>proteger o patrimônio do cliente</strong> e buscar a solução mais vantajosa dentro da lei.
              Aqui, o atendimento é direto, sem burocracia excessiva e com visão estratégica focada em resultados.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-blue/5 rounded text-brand-gold"><Scale size={24} /></div>
                <div>
                  <h4 className="font-bold text-sm">Visão Estratégica</h4>
                  <p className="text-xs text-gray-500">Foco em reduzir passivos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-blue/5 rounded text-brand-gold"><ShieldCheck size={24} /></div>
                <div>
                  <h4 className="font-bold text-sm">Segurança Jurídica</h4>
                  <p className="text-xs text-gray-500">Defesa técnica especializada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};