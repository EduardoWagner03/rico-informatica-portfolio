import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faMobileAlt,
  faShoppingCart,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: faLaptop,
      title: "Assistência Técnica Especializada",
      description:
        "Manutenção completa de computadores e notebooks com diagnóstico preciso e reparo rápido.",
    },
    {
      icon: faMobileAlt,
      title: "Reparo em Android e iPhone",
      description:
        "Troca de tela, bateria, reparo de placa e muito mais. Atendemos todas as marcas.",
    },
    {
      icon: faShoppingCart,
      title: "Venda de Acessórios",
      description:
        "Periféricos, cabos, capas, películas e diversos acessórios para seus dispositivos.",
    },
    {
      icon: faShieldAlt,
      title: "Manutenção Preventiva",
      description:
        "Limpeza, atualização de software e diagnóstico para evitar problemas futuros.",
    },
  ];

  return (
    <section id="servicos" className="services-section">
      <Container>
        <div className="text-center mb-5 scroll-animate">
          <h2 className="section-title">
            <span className="text-gold">Nossos Serviços</span>
          </h2>
          <div className="title-underline mx-auto"></div>
          <p className="section-subtitle">
            Soluções completas em tecnologia para você e sua empresa
          </p>
        </div>

        <Row>
          {services.map((service, index) => (
            <Col lg={6} md={6} key={index} className="mb-4">
              <Card
                className={`service-card glow-gold scroll-animate-scale delay-${
                  (index + 2) * 100
                }`}
              >
                <Card.Body>
                  <div className="service-icon-wrapper">
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="service-icon"
                    />
                  </div>
                  <Card.Title className="service-title">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="service-description">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
