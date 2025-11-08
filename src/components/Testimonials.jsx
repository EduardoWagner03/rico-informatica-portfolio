import React from "react";
import { Container, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      location: "Irineópolis - SC",
      text: "Excelente atendimento! Resolveram meu problema de forma rápida e eficiente. Meu notebook voltou a funcionar perfeitamente.",
      rating: 5,
    },
    {
      name: "Ana P.",
      location: "Porto União - SC",
      text: "Troquei a tela do meu iPhone e ficou perfeito, recomendo muito. Preço justo e qualidade excepcional!",
      rating: 5,
    },
    {
      name: "Lucas R.",
      location: "Irineópolis - SC",
      text: "Equipe atenciosa e preço justo. Melhor assistência da região. Sempre que preciso, sei que posso contar com eles.",
      rating: 5,
    },
    {
      name: "Marina S.",
      location: "Irineópolis - SC",
      text: "Profissionais muito competentes! Recuperaram todos os meus dados depois que meu computador parou de ligar. Estou muito grata!",
      rating: 5,
    },
    {
      name: "Roberto F.",
      location: "Porto União - SC",
      text: "Fiz um upgrade completo no meu PC e o resultado foi incrível. Atendimento nota 10 e preços justos!",
      rating: 5,
    },
    {
      name: "Juliana T.",
      location: "Irineópolis - SC",
      text: "Meu celular caiu na água e achei que tinha perdido tudo. A equipe conseguiu consertar e não perdi nenhuma foto. Muito obrigada!",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="testimonials-section">
      <Container>
        <div className="text-center mb-5 scroll-animate">
          <h2 className="section-title">
            O Que Nossos <span className="text-gold">Clientes Dizem</span>
          </h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <Carousel
          indicators={true}
          controls={true}
          interval={5000}
          className="testimonials-carousel scroll-animate-scale delay-200"
        >
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="testimonial-card">
                <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="star-icon"
                    />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <h5 className="author-name">{testimonial.name}</h5>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
