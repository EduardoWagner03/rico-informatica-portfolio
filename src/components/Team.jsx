import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Team.css";

const Team = () => {
  const team = [
    {
      name: "Ricardo Silva",
      role: "Técnico em Informática",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      specialty: "Especialista em hardware e redes",
    },
    {
      name: "João Mendes",
      role: "Especialista em Mobile",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      specialty: "Reparo de smartphones e tablets",
    },
    {
      name: "Carla Souza",
      role: "Atendimento ao Cliente",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      specialty: "Suporte e relacionamento",
    },
  ];

  return (
    <section className="team-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">
            Nossa <span className="text-gold">Equipe</span>
          </h2>
          <div className="title-underline mx-auto"></div>
          <p className="section-subtitle">
            Profissionais dedicados e apaixonados por tecnologia
          </p>
        </div>

        <Row className="justify-content-center">
          {team.map((member, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="team-card">
                <div className="team-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                  <div className="team-overlay">
                    <div className="team-social">
                      <a href="#team" className="social-link">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>
                  </div>
                </div>
                <Card.Body className="team-info">
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                  <p className="team-specialty">{member.specialty}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
