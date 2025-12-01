import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-blue mb-4">
                Entre em Contato
              </h2>
              <div className="w-16 h-1 bg-brand-gold mb-6"></div>
              <p className="text-gray-600 mb-8">
                Estamos prontos para analisar o seu caso. Agende uma reunião presencial ou online e proteja seu patrimônio hoje mesmo.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue/5 rounded flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-blue">Endereço</h3>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  <p className="text-gray-600">{CONTACT_INFO.city}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue/5 rounded flex items-center justify-center shrink-0">
                  <Phone className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-blue">Telefone</h3>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="text-gray-600 hover:text-brand-gold transition-colors block">
                    {CONTACT_INFO.phone}
                  </a>
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} className="text-gray-600 hover:text-brand-gold transition-colors block">
                    {CONTACT_INFO.whatsapp} (WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue/5 rounded flex items-center justify-center shrink-0">
                  <Mail className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-blue">Email</h3>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-brand-gold transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue/5 rounded flex items-center justify-center shrink-0">
                  <Clock className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-blue">Atendimento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 08:30 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-brand-blue mb-6">Envie sua mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <select className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-white">
                  <option>Execução Fiscal</option>
                  <option>Parcelamento de Débitos</option>
                  <option>Recuperação de Crédito</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  placeholder="Descreva brevemente seu caso..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-blue text-white font-bold py-4 rounded hover:bg-blue-900 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};