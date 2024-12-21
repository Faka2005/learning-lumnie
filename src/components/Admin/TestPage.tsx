import React from "react";
import { Link } from "react-router-dom";
import "../../css/card.css";
import { CardProps } from "../../services/data";


function Card({ title, url, theme }: CardProps) {
    return (
      <div className="card-container">
        <div className="card">
          {/* Titre */}
          <h1 className="card-title">
            <Link to={url}>{title}</Link>
          </h1>
          {/* Thème */}
          <div className="card-theme">
            <p>{theme}</p>
          </div>
        </div>
      </div>
    );
  }
  

export default Card;
