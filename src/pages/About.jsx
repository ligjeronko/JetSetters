import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./About.css"; // Adjust the path as necessary

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate(); // Hook to programmatically navigate

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleGetInTouch = () => {
    navigate("/contact"); // Redirect to the Contact page
  };

  return (
    <div className="page-content-about">
      <h1 className="h1-about">About JetSetters</h1>
      <p className="p-about">
        Welcome to JetSetters, your premier destination for renting and
        purchasing private jets and aircraft.
      </p>
      <p className="p-about">
        At JetSetters, we specialize in providing top-of-the-line jets for both
        personal and business use. Our fleet features state-of-the-art aircraft
        equipped with cutting-edge technology, ensuring safety, comfort, and
        efficiency for all your travel needs.
      </p>

      {/* Show More Button */}
      <button onClick={toggleShowMore} className="show-more-button">
        {showMore ? "Show Less" : "Show Location"}
      </button>

      {showMore && (
        <div>
          <p className="p-about">
            Our extensive network of locations allows us to provide seamless
            travel experiences for our clients. We strategically position our
            fleet to ensure quick access to key destinations, making it easy for
            you to reach your desired location. Whether you're flying to a
            business meeting or a vacation getaway, we prioritize convenience
            and accessibility, ensuring that your journey is as smooth as
            possible.
          </p>

          {/* Map Container */}
          <div className="map-container">
            <h2>Our Service Locations</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509774!2d144.95373531531526!3d-37.81627997975122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f9c7e7d%3A0x5045675218ceed30!2sMelbourne%20Airport!5e0!3m2!1sen!2sau!4v1610425252673!5m2!1sen!2sau"
              width="800" // Increased width
              height="300" // Decreased height
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <p className="map-description">
              Explore our service locations around the world!
            </p>
          </div>
        </div>
      )}

      <p className="p-about">
        Ready to fly? Contact us to learn more about our services and to book
        your next journey!
      </p>
      <button onClick={handleGetInTouch} className="contact-button">
        Get in Touch
      </button>
    </div>
  );
};

export default About;
