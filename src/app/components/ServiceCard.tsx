"use client";

import { useState } from "react";

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  tools: string[];
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
      {isExpanded && (
        <div className="more-content">
          <p>{shortDescription}</p>
          <h4>Herramientas:</h4>
          <ul>
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      )}
      <style jsx>{`
        .service-card.active {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1.2);
          width: 50%;
          z-index: 1000;
        }

        .more-content {
          background-color: #222;
          margin-top: 10px;
        }

        .service-card.active .more-content {
          display: block;
        }

        ul {
          list-style-type: none;
          padding-left: 0px;
        }

        ul li {
          border: 1px solid #444;
          border-radius: 12px;
          padding: 5px 10px;
          margin-bottom: 5px;
          background-color: #333;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
