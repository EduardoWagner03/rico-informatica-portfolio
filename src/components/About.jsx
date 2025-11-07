import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faCheckCircle,
  faLightbulb,
  faHandshake,
  faBullseye,
  faEye,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = () => {
  const features = [
    {
      icon: faTrophy,
      title: "Excelência",
      description: "Comprometimento com a qualidade em cada serviço",
    },
    {
      icon: faCheckCircle,
      title: "Confiança",
      description: "Transparência e honestidade em todos os atendimentos",
    },
    {
      icon: faLightbulb,
      title: "Inovação",
      description: "Sempre atualizados com as últimas tecnologias",
    },
    {
      icon: faHandshake,
      title: "Parceria",
      description: "Relacionamento próximo e duradouro com nossos clientes",
    },
  ];

  return (
    <section id="sobre" className="about-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">
            Conheça a <span className="text-gold">Rico Informática</span>
          </h2>
          <div className="title-underline mx-auto"></div>
          <p className="section-subtitle">
            Excelência e confiança em assistência técnica especializada
          </p>
        </div>

        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <div className="about-intro-card">
              <div className="intro-icon">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h3 className="intro-title">Sua Parceira em Tecnologia</h3>
              <p className="about-intro">
                A{" "}
                <strong className="text-gold">
                  Rico Informática e Tecnologia
                </strong>{" "}
                é referência em assistência técnica especializada em{" "}
                <strong>Irineópolis-SC</strong>. Com anos de experiência no
                mercado, oferecemos soluções completas em tecnologia para
                particulares e empresas, sempre com foco em qualidade, agilidade
                e satisfação do cliente.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <div className="mission-vision-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <h3 className="card-title">Nossa Missão</h3>
              <p className="card-text">
                Proporcionar soluções tecnológicas de alta qualidade, com
                atendimento humanizado e preços justos, superando as
                expectativas dos nossos clientes e contribuindo para o
                desenvolvimento tecnológico da região.
              </p>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="mission-vision-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faEye} />
              </div>
              <h3 className="card-title">Nossa Visão</h3>
              <p className="card-text">
                Ser a assistência técnica mais confiável e reconhecida da
                região, destacando-se pela excelência, inovação e compromisso em
                todos os serviços prestados, sempre à frente das necessidades
                tecnológicas dos nossos clientes.
              </p>
            </div>
          </Col>
        </Row>

        <div className="text-center mb-4">
          <h3 className="values-title">
            Nossos <span className="text-gold">Valores</span>
          </h3>
          <div className="title-underline mx-auto small"></div>
        </div>

        <Row className="features-row">
          {features.map((feature, index) => (
            <Col lg={3} md={6} key={index} className="feature-col mb-4">
              <div className="feature-card-new">
                <div className="feature-icon-wrapper-new">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="feature-icon-new"
                  />
                </div>
                <h4 className="feature-title-new">{feature.title}</h4>
                <p className="feature-description-new">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={10}>
            <div className="about-cta-card">
              <div className="cta-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="cta-title">Faça Parte da Nossa História</h3>
              <p className="cta-text">
                Junte-se aos centenas de clientes satisfeitos que confiam na
                Rico Informática para cuidar de suas necessidades tecnológicas.
                Estamos prontos para atendê-lo com excelência!
              </p>
              <a href="#contato" className="cta-button">
                Entre em Contato
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
