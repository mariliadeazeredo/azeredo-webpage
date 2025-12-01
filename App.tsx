import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TargetAudience } from './components/TargetAudience';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <TargetAudience />
        <Services />
        <Methodology />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;