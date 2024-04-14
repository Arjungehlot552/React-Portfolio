import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faPaintBrush, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const [darkMode, setDarkMode] = useState(true); // Setting dark mode as default

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen py-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000"  className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <button
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} hover:bg-gray-300 focus:outline-none`}
            onClick={toggleDarkMode}
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-yellow-500" />
          </button>
        </div>
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title="Web Development"
            description="Proficient in HTML, CSS, JavaScript, React.js, and Tailwind CSS. Experienced in building responsive and dynamic web applications."
            icon={faLaptopCode}
            darkMode={darkMode}
          />
          <SkillCard
            title="Backend Development"
            description="Familiar with Node.js, Express.js, MongoDB, and RESTful APIs. Capable of building server-side applications and managing databases."
            icon={faServer}
            darkMode={darkMode}
          />
          <SkillCard
            title="UI/UX Design"
            description="Skilled in creating intuitive and user-friendly interfaces. Proficient in Adobe XD and Figma for designing wireframes and prototypes."
            icon={faPaintBrush}
            darkMode={darkMode}
          />
          <SkillCard
            title="UI/UX Design"
            description="Skilled in creating intuitive and user-friendly interfaces. Proficient in Adobe XD and Figma for designing wireframes and prototypes."
            icon={faPaintBrush}
            darkMode={darkMode}
          />
          <SkillCard
            title="Backend Development"
            description="Familiar with Node.js, Express.js, MongoDB, and RESTful APIs. Capable of building server-side applications and managing databases."
            icon={faServer}
            darkMode={darkMode}
          />
          <SkillCard
            title="UI/UX Design"
            description="Skilled in creating intuitive and user-friendly interfaces. Proficient in Adobe XD and Figma for designing wireframes and prototypes."
            icon={faPaintBrush}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, description, icon, darkMode }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="flex items-center justify-center mb-4">
        <FontAwesomeIcon icon={icon} className={`text-4xl ${darkMode ? 'text-blue-300' : 'text-blue-500'}`} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
    </div>
  );
};

export default Skills;
