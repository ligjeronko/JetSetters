import React from "react";
import "./CardComponent.css"; // Ensure this CSS file exists

const CardComponent = ({ title, description, backImage }) => {
  return (
    <div className="card">
      <div className="card-front">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div
        className="card-back"
        style={{ backgroundImage: `url(${backImage})` }}
      ></div>
    </div>
  );
};

export default CardComponent;
