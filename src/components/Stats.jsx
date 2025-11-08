import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStar,
  faTools,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./Stats.css";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      icon: faUsers,
      end: 500,
      suffix: "+",
      title: "Clientes Satisfeitos",
      description: "Atendimentos realizados",
    },
    {
      icon: faStar,
      end: 5,
      prefix: "",
      suffix: ".0",
      title: "Avaliação Média",
      description: "Excelência comprovada",
    },
    {
      icon: faTools,
      end: 1000,
      suffix: "+",
      title: "Reparos Realizados",
      description: "Equipamentos consertados",
    },
    {
      icon: faClock,
      end: 5,
      suffix: "+",
      title: "Anos de Experiência",
      description: "Expertise no mercado",
    },
  ];

  useEffect(() => {
    const currentRef = statsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  const AnimatedCounter = ({
    end,
    duration = 2000,
    prefix = "",
    suffix = "",
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [end, duration]);

    return (
      <span>
        {prefix}
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section className="stats-section" ref={statsRef}>
      <Container>
        <Row>
          {stats.map((stat, index) => (
            <Col lg={3} md={6} sm={6} key={index} className="mb-4">
              <div
                className={`stat-card scroll-animate-scale delay-${
                  index * 200
                }`}
              >
                <div className="stat-icon-wrapper">
                  <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
                </div>
                <h3 className="stat-number">
                  <AnimatedCounter
                    end={stat.end}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </h3>
                <h4 className="stat-title">{stat.title}</h4>
                <p className="stat-description">{stat.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
