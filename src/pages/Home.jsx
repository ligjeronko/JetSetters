import React, { useState } from "react";
import "./Home.css"; // Import your CSS file
import SearchForm from "../components/SearchForm/SearchForm"; // Import the SearchForm component

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="home-content-container">
        <div className="home-background-image"></div>
        <div className="home-overlay">
          <h1 className="home-heading">WELCOME</h1>
          <p className="home-welcome-text">to JetSetters!</p>
        </div>
      </div>

      <div className="home-content-container wider-container">
        <SearchForm />
      </div>

      <div className="home-content-container wider-container">
        <div className="home-overlay">
          <h1 className="home-heading">Discover more about our services!</h1>
          <p className="home-description">
            Experience luxury and flexibility with Eurojets. Welcome to
            Eurojets, your partner for exclusive private jet charters. Whether
            for business or pleasure, we offer you an unparalleled flight
            experience that goes far beyond the standard. With our global reach,
            24/7 availability, and tailor-made VIP services, we make the
            impossible possible to fulfill your wishes.
          </p>

          {/* Button to toggle additional information */}
          <button onClick={toggleShowMore} className="toggle-button">
            {showMore ? "Show Less" : "Learn More"}
          </button>

          {/* Additional information with transition effect */}
          {showMore && (
            <div className="additional-info">
              <p className="home-description">
                Additional information: We pride ourselves on offering the most
                luxurious jets and exceptional service. Our fleet includes a
                variety of aircraft to meet your needs.
              </p>
              <p className="home-description">
                Our experienced team is available around the clock to assist you
                with any requests. We aim to make your travel experience
                seamless and enjoyable.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="home-content-container wider-container">
        <h2 className="benefits-heading">
          Why choose JetSetters? <br />
          At JetSetters, it's all about you: we offer you an exceptional flight
          experience with uncompromising luxury, safety, and service. Our
          services are designed to meet all your needs so you can enjoy a
          personalized and stress-free journey.
          <br />
          <br />
          Benefits of renting a private flight from JetSetters
        </h2>
        <div className="benefits-row">
          {benefitsData.map((benefit, index) => (
            <div className="benefit-column" key={index}>
              <div className="wpb_single_image wpb_content_element vc_align_center">
                <figure className="wpb_wrapper vc_figure">
                  <div className="benefit-image-wrapper">
                    <img
                      className="benefit-image"
                      src={benefit.image}
                      alt={benefit.title}
                      title={benefit.title}
                      loading="lazy"
                    />
                  </div>
                </figure>
              </div>
              <h4 className="vc_custom_heading vc_do_custom_heading">
                {benefit.title}
              </h4>
              <div className="wpb_text_column wpb_content_element">
                <div className="wpb_wrapper">
                  <p>{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-container">
        <div className="home-overlay">
          <p className="home-description">
            Follow us:
            <br />
            <ul className="social-links">
              <li>
                <i className="ticon ticon-facebook"></i> Facebook
              </li>
              <li>
                <i className="ticon ticon-instagram"></i> Instagram
              </li>
              <li>
                <i className="ticon ticon-whatsapp"></i> Whatsapp
              </li>
            </ul>
            <br />
            Copyright JetSetters. 2024 - All Rights Reserved.
            <br />
            Home | Terms & Conditions
          </p>
        </div>
      </div>

      <style>
        {`
          .social-links {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .social-links li {
            display: inline;
            margin-right: 10px;
            color: #ffffff;
          }
          .toggle-button {
            background-color: #007bff; /* Button color */
            color: white; /* Text color */
            border: none;
            border-radius: 5px;
            padding: 10px 15px;
            cursor: pointer;
            transition: background-color 0.3s ease; /* Transition effect for button */
            margin-top: 10px; /* Space above the button */
          }
          .toggle-button:hover {
            background-color: #0056b3; /* Darker shade on hover */
          }
          .additional-info {
            margin-top: 10px;
            opacity: 0; /* Start hidden */
            transition: opacity 0.3s ease; /* Smooth transition */
          }
          .additional-info-enter {
            opacity: 1; /* Fully visible */
          }
        `}
      </style>
    </>
  );
};

// Benefits data
const benefitsData = [
  {
    image:
      "https://eurojets.nl/wp-content/uploads/2020/11/Eurojets_stewardess-150x150.jpg.webp",
    title: "Efficiency",
    description:
      "No fixed timetables and minimal waiting time before departure.",
  },
  {
    image:
      "https://eurojets.nl/wp-content/uploads/2020/11/Eurojets-dame_in_vliegtuig.jpg.webp",
    title: "Data Protection",
    description: "Exclusive use of the aircraft without other passengers.",
  },
  {
    image:
      "https://eurojets.nl/wp-content/uploads/2020/11/Eurojets-Champagne.jpg.webp",
    title: "Comfort",
    description:
      "Direct flights to nearby airports, avoiding long car journeys.",
  },
  {
    image:
      "https://eurojets.nl/wp-content/uploads/2020/11/Eurojets-headerbeeld_couple_shape-1-150x150.jpg.webp",
    title: "Flexibility",
    description: "Customizable travel plans, including last-minute changes.",
  },
];

export default Home;
