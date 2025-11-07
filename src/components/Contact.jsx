import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contato" className="contact-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">
            Fale <span className="text-gold">Conosco</span>
          </h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="contact-info-wrapper">
              <h3 className="form-title">Informações de Contato</h3>

              <div className="contact-info-item">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="contact-icon"
                />
                <div>
                  <h5>Endereço</h5>
                  <p>Irineópolis - SC, Brasil</p>
                </div>
              </div>

              <div className="contact-info-item">
                <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
                <div>
                  <h5>WhatsApp</h5>
                  <a
                    href="https://wa.me/5547997762425"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (47) 99776-2425
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <div>
                  <h5>E-mail</h5>
                  <p>contato@ricoinformatica.com.br</p>
                </div>
              </div>

              <div className="contact-info-item">
                <FontAwesomeIcon icon={faClock} className="contact-icon" />
                <div>
                  <h5>Horário de Atendimento</h5>
                  <p>Segunda a Sexta — 8h às 18h</p>
                  <p>Sábado — 8h às 12h</p>
                </div>
              </div>

              <div className="social-links">
                <h5>Redes Sociais</h5>
                <div className="social-icons">
                  <a
                    href="https://wa.me/5547997762425"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a href="#instagram" className="social-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#facebook" className="social-icon">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
