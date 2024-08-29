"use client";

import { useState } from "react";

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  tools: string[]; // Lista de herramientas
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  shortDescription,
  tools,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`service-card ${isExpanded ? "active" : ""}`}
      onClick={handleClick}
    >
      <h3>{title}</h3>
      <p>{shortDescription}</p>
      {isExpanded && (
        <div className="more-content">
          <h4>Herramientas:</h4>
          <ul>
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      )}
      <style jsx>{`
        .service-card {
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .more-content {
          background-color: #222;
          margin-top: 10px;
        }

        .service-card.active .more-content {
          display: block;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
