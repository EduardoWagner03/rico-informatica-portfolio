import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`header-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#inicio" className="brand-logo">
          <img
            src="/logo-rico.png"
            alt="Rico Informática"
            className="logo-img"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
          <span className="logo-text" style={{ display: "none" }}>
            Rico Informática
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler">
          <span className="navbar-toggler-icon-custom"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#inicio" className="nav-link-custom">
              Início
            </Nav.Link>
            <Nav.Link href="#sobre" className="nav-link-custom">
              Sobre
            </Nav.Link>
            <Nav.Link href="#servicos" className="nav-link-custom">
              Serviços
            </Nav.Link>
            <Nav.Link href="#portfolio" className="nav-link-custom">
              Portfólio
            </Nav.Link>
            <Nav.Link href="#depoimentos" className="nav-link-custom">
              Depoimentos
            </Nav.Link>
            <Nav.Link href="#contato" className="nav-link-custom">
              Contato
            </Nav.Link>
            <div className="header-image-wrapper">
              <img
                src="/logo-rico.png"
                alt="Rico Informática"
                className="header-extra-img"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
