import React from 'react';
import { CONTACT_INFO, WHATSAPP_MESSAGE } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Contact Info */}
          <div className="space-y-8 text-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-blue mb-4">
                Entre em Contato
              </h2>
              <div className="w-16 h-1 bg-brand-gold mb-6 mx-auto"></div>
              <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                Estamos prontos para analisar o seu caso. Agende uma reunião presencial ou online e proteja seu patrimônio hoje mesmo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-brand-blue/5 rounded flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-blue">Endereço</h3>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  <p className="text-gray-600">{CONTACT_INFO.city}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-brand-blue/5 rounded flex items-center justify-center shrink-0">
                  <Phone className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-blue">Telefone</h3>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="text-gray-600 hover:text-brand-gold transition-colors block">
                    {CONTACT_INFO.phone}
                  </a>
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} className="text-gray-600 hover:text-brand-gold transition-colors block">
                    {CONTACT_INFO.whatsapp} (WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
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

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
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

        </div>
      </div>
    </section>
  );
};