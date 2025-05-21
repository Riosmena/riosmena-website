"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  speed = 200,
  delay = 2000,
}) => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const currentString = texts[index];

      if (isDeleting) {
        setCurrentText(currentString.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentText(currentString.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentString.length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((index + 1) % texts.length);
      }
    };

    const timeout = setTimeout(handleType, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts, speed, delay]);

  return <div className="typewriter">{currentText}</div>;
};

export default Typewriter;
