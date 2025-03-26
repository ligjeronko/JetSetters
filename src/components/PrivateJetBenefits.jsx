import React from "react";
import "./PrivateJetBenefits.css"; // Optional: For styling

const PrivateJetBenefits = () => {
  return (
    <div className="private-jet-benefits">
      <div className="empty-space" style={{ height: "32px" }}></div>
      <h2 style={{ textAlign: "center" }} className="custom-heading">
        Why rent a private jet?
      </h2>
      <div
        style={{ color: "#c3912b", textAlign: "center" }}
        className="benefits-description"
      >
        <p style={{ textAlign: "center" }}>
          There are numerous benefits to renting a private jet that go far
          beyond comfort and flexibility. Here are some of the top reasons why
          you should choose Eurojets:
        </p>
        <ul>
          <li style={{ textAlign: "left" }}>
            <strong>Luxury and comfort: </strong>
            Enjoy a luxurious cabin, state-of-the-art entertainment systems and
            first-class service.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivateJetBenefits;
