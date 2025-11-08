import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faLock,
  faBolt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./WhyChoose.css";

const WhyChoose = () => {
  const reasons = [
    {
      icon: faMedal,
      title: "Profissionalismo",
      description: "Equipe altamente qualificada e certificada",
    },
    {
      icon: faLock,
      title: "Segurança",
      description: "Seus dados e equipamentos sempre protegidos",
    },
    {
      icon: faBolt,
      title: "Agilidade",
      description: "Serviços rápidos sem perder a qualidade",
    },
    {
      icon: faHeart,
      title: "Atendimento Humanizado",
      description: "Tratamos cada cliente com atenção especial",
    },
  ];

  return (
    <section className="why-choose-section">
      <Container>
        <div className="text-center mb-5 scroll-animate">
          <h2 className="section-title">
            Por Que Escolher a <span className="text-gold">Rico?</span>
          </h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <Row>
          {reasons.map((reason, index) => {
            // Delays bem maiores para aparecer um de cada vez: 0, 500, 1000, 1500
            const delayClass = index === 0 ? "" : `delay-${index * 500}`;
            return (
              <Col lg={3} md={6} sm={6} key={index} className="mb-4">
                <div
                  className={`reason-card text-center scroll-animate-scale ${delayClass}`}
                >
                  <div className="reason-icon-wrapper">
                    <FontAwesomeIcon
                      icon={reason.icon}
                      className="reason-icon"
                    />
                  </div>
                  <h4 className="reason-title">{reason.title}</h4>
                  <p className="reason-description">{reason.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoose;
