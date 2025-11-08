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
  const handleEmailClick = (e) => {
    const email = "hyplayempresa@gmail.com";

    // Tenta copiar para a área de transferência
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        // Alerta personalizado e bonito
        const alertBox = document.createElement("div");
        alertBox.innerHTML = `
          <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
            color: #C6AB52;
            padding: 20px 30px;
            border-radius: 15px;
            border: 2px solid #C6AB52;
            box-shadow: 0 10px 40px rgba(198, 171, 82, 0.3);
            z-index: 9999;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 16px;
            animation: slideIn 0.5s ease-out;
            max-width: 350px;
          ">
            <div style="display: flex; align-items: center; gap: 15px;">
              <span style="font-size: 24px;">✅</span>
              <div>
                <div style="margin-bottom: 5px;">E-mail copiado com sucesso!</div>
                <div style="font-size: 12px; color: #B0B0B0; font-weight: 400;">
                  Cole o endereço onde preferir
                </div>
              </div>
            </div>
          </div>
          <style>
            @keyframes slideIn {
              from {
                transform: translateX(400px);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
          </style>
        `;
        document.body.appendChild(alertBox);

        // Remove o alerta após 3 segundos
        setTimeout(() => {
          alertBox.style.transition = "all 0.5s ease-out";
          alertBox.style.opacity = "0";
          alertBox.style.transform = "translateX(400px)";
          setTimeout(() => document.body.removeChild(alertBox), 500);
        }, 3000);
      });
    }

    // Tenta abrir o cliente de e-mail (só funciona se tiver um instalado)
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contato" className="contact-section">
      <Container>
        <div className="text-center mb-5 scroll-animate">
          <h2 className="section-title">
            Fale <span className="text-gold">Conosco</span>
          </h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="contact-info-wrapper scroll-animate-scale delay-200">
              <h3 className="form-title">Informações de Contato</h3>

              <div className="contact-info-item">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="contact-icon"
                />
                <div>
                  <h5>Endereço</h5>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rico+informática+e+tecnologia,+R.+Bahia,+132+-+Irineópolis,+SC,+89440-000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>R. Bahia, 132</p>
                    <p>Irineópolis - SC, 89440-000</p>
                  </a>
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
                    (47) 99214-2296
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <div>
                  <h5>E-mail</h5>
                  <span
                    onClick={handleEmailClick}
                    style={{ cursor: "pointer" }}
                    className="email-link"
                  >
                    hyplayempresa@gmail.com
                  </span>
                </div>
              </div>

              <div className="contact-info-item">
                <FontAwesomeIcon icon={faClock} className="contact-icon" />
                <div>
                  <h5>Horário de Atendimento</h5>
                  <p>Segunda a Sexta — 8:30h às 18h</p>
                  <p>Sábado — 9:00h às 12h</p>
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
                  <a
                    href="https://www.instagram.com/ricoinformatica.oficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://www.facebook.com/ricoinformatica.oficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
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
