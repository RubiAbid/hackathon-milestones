"use client"; // Mark this component as a client-side component

import { useState } from 'react';

const Contact = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col items-center justify-start p-6"> {/* No need for min-h-screen here */}
      {/* Button in the middle of the content, just below the text */}
      <button
        onClick={toggleDropdown}
        className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 mb-4"
      >
        {isDropdownOpen ? 'Hide Options' : 'Show Contact Options'}
      </button>

      {isDropdownOpen && (
        <ul className="bg-white shadow-lg rounded-md py-2 w-48 mt-2">
          <li className="px-4 py-2 hover:bg-gray-200">
            <a href="mailto:example@example.com" className="text-gray-800">
              Email
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-200">
            <a href="tel:+1234567890" className="text-gray-800">
              Phone
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-200">
            <a href="/support" className="text-gray-800">
              Support
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Contact;
