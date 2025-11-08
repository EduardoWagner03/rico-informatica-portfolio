import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import useScrollAnimation from './hooks/useScrollAnimation';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useScrollAnimation();

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
