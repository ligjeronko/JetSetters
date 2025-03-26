import React, { useState } from "react";
import "./SearchForm.css"; // Import the CSS file for styling

const SearchForm = () => {
  const [startAirport, setStartAirport] = useState("");
  const [endAirport, setEndAirport] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");
  const [paxCount, setPaxCount] = useState(2);
  const [tripType, setTripType] = useState("one-way"); // State for trip type

  const handlePaxIncrement = () => {
    setPaxCount(paxCount + 1);
  };

  const handlePaxDecrement = () => {
    if (paxCount > 1) {
      setPaxCount(paxCount - 1);
    }
  };

  const handleTripTypeChange = (type) => {
    setTripType(type); // Update trip type state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ startAirport, endAirport, date, time, paxCount, tripType });
    // Handle search logic here
  };

  return (
    <div className="search-form-container">
      <div className="booking-info">
        <h2 className="search-form__heading">Book your flight here.</h2>
        <p>
          Experience unparalleled luxury and convenience with our flight booking
          service. Whether for business or pleasure, our streamlined process
          ensures a smooth journey from start to finish. Enjoy the flexibility
          and personalized attention that comes with booking a private jet.
        </p>
        <p>
          With our expert team at your service, you can customize every aspect
          of your journey. Choose from a wide selection of aircraft that meet
          your specific needs, ensuring comfort and style as you travel to your
          destination.
        </p>
        <p>
          Don’t settle for less—embrace the freedom of flying on your terms. Our
          dedicated customer support is available around the clock to assist
          you, guaranteeing a hassle-free experience every step of the way.
        </p>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="currency-selector">
          <select className="currency-selector-input">
            <option value="EUR">EUR</option>
            <option value="AUD">AUD</option>
            <option value="USD">USD</option>
            {/* Add more currencies as needed */}
          </select>
        </div>

        <ul className="trip-type-tabs">
          <li className="trip-type-tabs__tab">
            <a
              className={`trip-type-tabs__tab-link ${
                tripType === "one-way"
                  ? "trip-type-tabs__tab-link--selected"
                  : ""
              }`}
              href="#"
              onClick={() => handleTripTypeChange("one-way")}
            >
              One way
            </a>
          </li>
          <li className="trip-type-tabs__tab">
            <a
              className={`trip-type-tabs__tab-link ${
                tripType === "round-trip"
                  ? "trip-type-tabs__tab-link--selected"
                  : ""
              }`}
              href="#"
              onClick={() => handleTripTypeChange("round-trip")}
            >
              Round trip
            </a>
          </li>
          <li className="trip-type-tabs__tab">
            <a
              className={`trip-type-tabs__tab-link ${
                tripType === "multi-city"
                  ? "trip-type-tabs__tab-link--selected"
                  : ""
              }`}
              href="#"
              onClick={() => handleTripTypeChange("multi-city")}
            >
              Multi-city
            </a>
          </li>
        </ul>

        <div className="search-form-segment">
          <div className="search-form-segment__inputs">
            <div className="inputs__responsive-group">
              <input
                type="text"
                name="startAirport"
                placeholder="From"
                value={startAirport}
                onChange={(e) => setStartAirport(e.target.value)}
                className="input-field"
              />
              <input
                type="text"
                name="endAirport"
                placeholder="To"
                value={endAirport}
                onChange={(e) => setEndAirport(e.target.value)}
                className="input-field"
              />
            </div>

            <div className="inputs__responsive-group">
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input-field"
              />
              <input
                type="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="input-field"
              />
              <div className="passenger-input">
                <button
                  type="button"
                  onClick={handlePaxDecrement}
                  className="passenger-button"
                >
                  -
                </button>
                <input
                  type="number"
                  name="paxCount"
                  value={paxCount}
                  readOnly
                  className="pax-count"
                />
                <button
                  type="button"
                  onClick={handlePaxIncrement}
                  className="passenger-button"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="search-form__buttons">
            <button type="submit" className="buttons__button text-button">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
