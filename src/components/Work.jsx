import React, { useState } from 'react';
import company1Image from '../assets/company1-logo.jpg';
import company2Image from '../assets/company2-logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`mywork ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} p-[30px]`} >
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000"  className="container mx-auto px-4 mt-8">
        <div className=" justify-between items-center mb-4">
          <h2 className="text-4xl font-bold text-center mb-8">Work Experience</h2>
          <button
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} hover:bg-gray-300 focus:outline-none`}
            onClick={toggleDarkMode}
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-yellow-500" />
          </button>
        </div>
        <div className="flex mt-8">
          <div className={`w-1/3 ${darkMode ? 'pr-0' : 'pr-8'}`}>
            <img src={company1Image} alt="Company 1 Logo" className="h-[300px] w-full" />
          </div>
          <div className="w-2/3 m-12">
            <h3 className="text-xl font-semibold mb-2">Company 1</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Software Intern</p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Duration: June 2022 - August 2022</p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              Description of your role and responsibilities at Company 1 goes here.
            </p>
          </div>
        </div>
        <div className="flex mt-8">
          <div className={`w-2/3 ${darkMode ? 'pr-0' : 'pr-8'}`}>
            <h3 className="text-xl font-semibold mb-2">Company 2</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Software Intern</p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Duration: September 2022 - November 2022</p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              Description of your role and responsibilities at Company 2 goes here.
            </p>
          </div>
          <div className={`w-1/3 ${darkMode ? 'pr-8' : 'pr-0'}`}>
            <img src={company2Image} alt="Company 2 Logo" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
