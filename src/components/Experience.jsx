import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import sihImage from '../assets/SIH-image.jpg'; // Import your image here

const Experience = () => {
  const [darkMode, setDarkMode] = useState(true); // Setting dark mode as default

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div  className={`container px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className="text-4xl font-bold pt-7 text-center mb-8">Work Achievements</h2>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className="mt-6 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 md:pr-8 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl">
              <h3 className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-xl font-semibold mb-2`}>Smart India Hackathon 2023 (SIH 2k23)</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Full Stack Developer</p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Duration: March 2023 - May 2023</p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                As a part of the Smart India Hackathon 2023, I worked as a full-stack developer on a project aimed to Create Online Education Platform For Students and Colleges for upload there projects.
                My responsibilities included:
              </p>
              <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} list-disc list-inside mb-4`}>
                <li>Developing frontend components using React.js</li>
                <li>Designing and implementing backend APIs using Node.js and Express</li>
                <li>Database design and implementation using MongoDB</li>
                <li>Integration of third-party services and APIs</li>
                <li>Collaborating with team members to ensure project milestones were met</li>
              </ul>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                This experience provided me with valuable insights into full-stack development, teamwork, and problem-solving in a time-constrained environment.
              </p>
            </div>
          </div>

          <div className="w-[700px] md:w-1/2 md:pl-8">
            <div className="w-[650px] rounded-lg overflow-hidden shadow-md hover:shadow-xl">
              <img src={sihImage} alt="Smart India Hackathon" className="w-[650px] h-[400px] transform transition-transform hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
