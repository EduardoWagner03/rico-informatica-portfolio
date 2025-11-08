import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TypewriterEffect from "./TypewriterEffect";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-overlay"></div>
      <Container className="hero-container">
        <Row className="align-items-center justify-content-center text-center">
          <Col lg={9} className="hero-content fade-in">
            <div className="hero-brand-wrapper">
              <div className="hero-logo-container">
                <img
                  src="/logo-rico.png"
                  alt="Rico Informática"
                  className="hero-logo-img"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <h1 className="hero-main-title">
                Rico Informática <span className="text-gold">e Tecnologia</span>
              </h1>
            </div>

            <h2 className="hero-tagline">
              Transformando <span className="text-gold">Tecnologia</span> em{" "}
              <span className="text-gold">
                <TypewriterEffect
                  texts={["Soluções", "Resultados", "Inovação", "Qualidade"]}
                  speed={120}
                  deleteSpeed={80}
                  pauseDuration={2500}
                />
              </span>
            </h2>

            <p className="hero-description">
              Somos especialistas em assistência técnica para smartphones,
              notebooks e computadores. Combinamos expertise técnica,
              atendimento diferenciado e compromisso com a qualidade para
              entregar as melhores soluções em tecnologia para você.
            </p>

            <div className="hero-buttons">
              <Button href="#servicos" className="hero-btn hero-btn-primary">
                Nossos Serviços
              </Button>
              <Button href="#contato" className="hero-btn hero-btn-secondary">
                Fale Conosco
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
