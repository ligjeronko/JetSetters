import React from "react";
import "./Contact.css"; // Adjust the path as necessary

const Contact = () => {
  return (
    <div className="page-content-contact">
      <div className="contact-info">
        <h1 className="h1-contact">Contact JetSetters</h1>
        <p className="p-contact">
          If you have any inquiries or need assistance, feel free to reach out
          to us!
        </p>

        <h2>Contact Information:</h2>
        <p className="p-contact">
          <strong>Email:</strong> info@jetsetters.com
        </p>
        <p className="p-contact">
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p className="p-contact">
          <strong>Office Address:</strong>
          <br />
          JetSetters Aviation
          <br />
          123 Skyway Drive
          <br />
          Air City, AC 12345
        </p>

        <h2>Business Hours:</h2>
        <p className="p-contact">
          Monday - Friday: 9:00 AM - 6:00 PM
          <br />
          Saturday: 10:00 AM - 4:00 PM
          <br />
          Sunday: Closed
        </p>

        <p className="p-contact">
          We look forward to assisting you with all your aviation needs!
        </p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <form action="" className="form-container">
          <h2 className="h2-contact">Contact</h2>
          <hr />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="contact-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your e-mail"
            className="contact-input"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your text here"
            className="contact-input"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
