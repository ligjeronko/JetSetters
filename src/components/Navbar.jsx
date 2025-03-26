import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure your CSS file is imported
import DropdownMenu from "../components/DropdownMenu"; // Import the DropdownMenu

const Navbar = () => {
  // Define the dropdown menu items
  const menuItems = ["Private Flights", "Business Flight", "Charter Flights"]; // Updated menu items

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <DropdownMenu className="menu-left" items={menuItems} />{" "}
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cards">Jets</Link>
        <Link to="/login">Login</Link> {/* Add the Login link */}
      </div>
    </nav>
  );
};

export default Navbar;
