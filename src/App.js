import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import useScrollAnimation from './hooks/useScrollAnimation';

import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  useScrollAnimation();

  // Parallax effect for gradient background
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const gradient = document.querySelector('.gradient-background');
      if (gradient) {
        gradient.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <ParticlesBackground />
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export default App;
