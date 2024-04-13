import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} hover:bg-gray-300 focus:outline-none`}
      onClick={toggleDarkMode}
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-yellow-500" />
    </button>
  );
};

export default DarkModeToggle;
