import React from "react";
import CardComponent from "../components/CardComponent"; // Adjust path based on your structure
import cardsData from "../jets.json"; // Correct path to jets.json
import "./CardsPage.css"; // Ensure this CSS file exists

const CardsPage = () => {
  return (
    <div className="cards-container">
      <h1 className="title">Choose Your Jet</h1>{" "}
      {/* Title moved above the header container */}
      <div className="header-container">
        <div className="header-background"></div>{" "}
        {/* Background image container */}
      </div>
      <div className="cards-grid">
        {" "}
        {/* Cards grid container */}
        {cardsData.map((card) => (
          <CardComponent // Use the CardComponent
            key={card.title}
            title={card.title}
            description={card.description}
            backImage={require(`../pages/${card.backImage}`)} // Correct path to images
          />
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
