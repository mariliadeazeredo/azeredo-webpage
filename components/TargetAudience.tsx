import React from 'react';
import { Briefcase, User, CheckCircle2 } from 'lucide-react';
import { AUDIENCE_PROBLEMS } from '../constants';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Who is it for */}
          <div className="space-y-8">
            <div>
               <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Público Alvo</span>
               <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-blue mt-2 mb-6">
                 Para quem é nossa assessoria?
               </h2>
               <p className="text-gray-600 text-lg">
                 Se você se enquadra em um dos perfis abaixo e está enfrentando problemas com o fisco, nós podemos ajudar.
               </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
               <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-gold">
                  <div className="flex items-center gap-3 mb-2">
                     <Briefcase className="text-brand-blue" />
                     <h3 className="font-bold text-brand-blue text-lg">Empresários</h3>
                  </div>
                  <p className="text-sm text-gray-500">Que buscam regularizar CNPJ e proteger o patrimônio da empresa.</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-gold">
                  <div className="flex items-center gap-3 mb-2">
                     <User className="text-brand-blue" />
                     <h3 className="font-bold text-brand-blue text-lg">Profissionais Liberais</h3>
                  </div>
                  <p className="text-sm text-gray-500">Médicos, dentistas, engenheiros com pendências na pessoa física.</p>
               </div>
            </div>

            <div className="bg-brand-blue/5 p-4 rounded text-brand-blue font-medium flex items-start gap-3">
               <CheckCircle2 className="shrink-0 mt-1" />
               <p>Cada caso é único – analisamos sua situação com precisão para buscar o melhor caminho.</p>
            </div>
          </div>

          {/* Right: Problems Solved */}
          <div>
             <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="font-serif text-2xl font-bold text-brand-blue mb-6">
                   Situações em que atuamos:
                </h3>
                <div className="space-y-6">
                   {AUDIENCE_PROBLEMS.map((item, idx) => (
                      <div key={idx} className="flex gap-4 group">
                         <div className="shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors text-gray-400">
                            <item.icon size={20} />
                         </div>
                         <div>
                            <h4 className="font-bold text-brand-blue">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.text}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};