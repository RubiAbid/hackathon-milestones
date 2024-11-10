"use client"; // Mark this component as a client-side component

import { useState } from 'react';

const Contact = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="contact-container"> {/* Use the global class here */}
      {/* Button in the middle of the content, just below the text */}
      <button
        onClick={toggleDropdown}
        className="contact-button" 
      >
        {isDropdownOpen ? 'Hide Options' : 'Show Contact Options'}
      </button>

      {isDropdownOpen && (
        <ul className="contact-dropdown"> {/* Apply the global class for the dropdown */}
          <li className="contact-dropdown-item"> {/* Apply the global class for each item */}
            <a href="mailto:example@example.com">
              Email
            </a>
          </li>
          <li className="contact-dropdown-item">
            <a href="tel:+1234567890">
              Phone
            </a>
            </li>
    <li className="contact-dropdown-item">
      {/* Make this non-clickable by removing the <a> tag */}
      <span className="black cursor-not-allowed">
        Support
      </span>
    </li>
  </ul>
      )}
    </div>
  );
};

export default Contact;
