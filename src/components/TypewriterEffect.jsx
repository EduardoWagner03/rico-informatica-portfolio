import React, { useState, useEffect } from "react";

const TypewriterEffect = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Digitando
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.substring(0, displayText.length + 1));
          } else {
            // Texto completo, aguardar e começar a deletar
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          // Deletando
          if (displayText.length > 0) {
            setDisplayText(currentText.substring(0, displayText.length - 1));
          } else {
            // Texto completamente deletado, passar para o próximo
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    currentIndex,
    texts,
    speed,
    deleteSpeed,
    pauseDuration,
  ]);

  return (
    <span>
      {displayText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default TypewriterEffect;
