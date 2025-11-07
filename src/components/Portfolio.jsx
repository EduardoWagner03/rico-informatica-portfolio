import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "./Portfolio.css";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const portfolioItems = [
    {
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=400&fit=crop",
      title: "Reparo iPhone",
      category: "Smartphones",
      description:
        "Troca de tela, bateria, botões e outros componentes. Trabalhamos com peças originais e de alta qualidade.",
      details:
        "Realizamos reparos completos em iPhones de todos os modelos, incluindo troca de display, bateria, câmeras, alto-falantes e muito mais. Garantia de 90 dias em todos os serviços.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop",
      title: "Manutenção Notebook",
      category: "Computadores",
      description:
        "Limpeza completa, troca de pasta térmica, upgrade de componentes e muito mais.",
      details:
        "Serviço especializado de manutenção preventiva e corretiva para notebooks. Incluímos limpeza interna profunda, aplicação de pasta térmica premium, teste de componentes e diagnóstico completo.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&h=400&fit=crop",
      title: "Upgrade de Hardware",
      category: "Melhorias",
      description:
        "Aumente a performance do seu equipamento com upgrades de memória RAM, SSD e processador.",
      details:
        "Realizamos upgrades personalizados para melhorar significativamente o desempenho do seu computador. Instalação de SSDs, memória RAM, placas de vídeo e outros componentes com total segurança.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=600&h=400&fit=crop",
      title: "Troca de Tela",
      category: "Reparos",
      description:
        "Substituição de telas para smartphones, tablets e notebooks com garantia.",
      details:
        "Especialistas em troca de displays para diversos modelos. Utilizamos telas de alta qualidade, com cores vibrantes e touch responsivo. Garantia contra defeitos de fabricação.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&h=400&fit=crop",
      title: "Instalação de Software",
      category: "Software",
      description:
        "Formatação, instalação de sistemas operacionais, programas e drivers.",
      details:
        "Instalamos e configuramos Windows, Linux e softwares essenciais. Incluímos atualização de drivers, configuração de segurança e otimização do sistema para máximo desempenho.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      title: "Limpeza Técnica",
      category: "Manutenção",
      description:
        "Limpeza profunda interna e externa, remoção de poeira e sujeira acumulada.",
      details:
        "Limpeza técnica completa com equipamentos profissionais. Removemos poeira dos coolers, dissipadores e componentes internos, garantindo melhor refrigeração e vida útil prolongada.",
    },
  ];

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">
            Nosso Trabalho Fala <span className="text-gold">por Nós</span>
          </h2>
          <div className="title-underline mx-auto"></div>
          <p className="section-subtitle">
            Confira alguns dos nossos trabalhos realizados
          </p>
        </div>

        <Row>
          {portfolioItems.map((item, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div
                className="portfolio-item"
                onClick={() => handleShowModal(item)}
              >
                <div className="portfolio-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-image"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <h4 className="portfolio-title">{item.title}</h4>
                      <p className="portfolio-category">{item.category}</p>
                      <span className="portfolio-btn">Ver Detalhes</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Modal
          show={showModal}
          onHide={handleCloseModal}
          centered
          size="lg"
          className="portfolio-modal"
        >
          {selectedItem && (
            <>
              <Modal.Header closeButton className="border-0">
                <Modal.Title className="text-gold">
                  {selectedItem.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="img-fluid rounded mb-3"
                />
                <div className="modal-category mb-3">
                  <span className="badge bg-gold">{selectedItem.category}</span>
                </div>
                <p className="modal-description">{selectedItem.description}</p>
                <hr
                  className="my-3"
                  style={{ borderColor: "#C6AB52", opacity: 0.3 }}
                />
                <p className="modal-details">{selectedItem.details}</p>
              </Modal.Body>
              <Modal.Footer className="border-0">
                <Button variant="outline-secondary" onClick={handleCloseModal}>
                  Fechar
                </Button>
                <Button
                  href="#contato"
                  className="btn-gold"
                  onClick={handleCloseModal}
                >
                  Solicitar Orçamento
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
    </section>
  );
};

export default Portfolio;
