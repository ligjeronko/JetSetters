import React, { useState } from "react";
import "./DropdownMenu.css"; // Import CSS for styling

const DropdownMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (isOpen) => {
    setIsOpen(isOpen);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={() => toggleDropdown(true)} // Open on mouse enter
      onMouseLeave={() => toggleDropdown(false)} // Close on mouse leave
    >
      <div className="dropdown-toggle">Menu</div>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <div key={index} className="dropdown-item">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
