import React from 'react';
import { Scale } from 'lucide-react';

interface LogoProps {
  className?: string;
  variant?: 'vertical' | 'horizontal';
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'vertical' }) => {
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        <div className="relative flex items-center justify-center w-10 h-10 border border-brand-gold rounded-full shrink-0">
          <Scale className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-serif text-xl font-bold tracking-widest text-brand-gold uppercase leading-none">
            Azeredo
          </h1>
          <p className="font-sans text-[0.5rem] tracking-[0.2em] text-brand-gold/80 uppercase mt-0.5">
            Consultoria Estratégica
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <div className="relative flex items-center justify-center w-16 h-16 border-2 border-brand-gold rounded-full mb-1">
        <Scale className="w-10 h-10 text-brand-gold" strokeWidth={1.5} />
      </div>
      <h1 className="font-serif text-2xl font-bold tracking-widest text-brand-gold uppercase leading-none">
        Azeredo
      </h1>
      <p className="font-sans text-[0.6rem] tracking-[0.2em] text-brand-gold/80 uppercase mt-1">
        Consultoria Estratégica
      </p>
    </div>
  );
};