import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center justify-content-between footer-content">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="footer-text mb-0">
              © {currentYear}{" "}
              <span className="text-gold">Rico Informática</span> • Todos os
              direitos reservados
            </p>
          </Col>

          <Col md={6} className="text-center text-md-end">
            <div className="footer-right">
              <div className="footer-social">
                <a
                  href="https://wa.me/5547997762425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a
                  href="#instagram"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="#facebook"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
              <p className="footer-dev">
                Desenvolvido por{" "}
                <span className="dev-name">Eduardo Wagner</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
