import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a
      href="https://wa.me/5547997762425"
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float ${isVisible ? "visible" : ""}`}
      title="Fale conosco no WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
