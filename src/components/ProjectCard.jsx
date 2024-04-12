import React, { useState } from 'react';
import Card from './Card';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/Project2.png';
import project3Image from '../assets/project3.png';

const Projects = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showAllBasicProjects, setShowAllBasicProjects] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    // Your projects data here
  ];

  const handleMoreProjectsClick = () => {
    setShowAllBasicProjects(true);
  };

  const handleButtonClick = (link) => {
    window.open(link, '_blank'); // Open the link in a new tab
  };

  const renderProjectsByCategory = (category) => {
    const projectsToRender = showAllBasicProjects ? 
      projects.filter((project) => project.category === category) :
      projects.filter((project) => project.category === category).slice(0, 3);

    return projectsToRender.map((project) => (
      <Card
        key={project.id}
        image={project.image}
        title={project.title}
        description={project.description}
        websiteLink={project.websiteLink}
        onButtonClick={handleButtonClick}
      />
    ));
  };

  return (
    <div className={`projects-container ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>

      <div data-aos="zoom-in" data-aos-duration="1000"  className='m-[20px] p-16'>
        <div className="container mx-auto mb-8  ">
          <h2 className="text-3xl font-semibold mb-4">Basic Projects</h2>
          <div className="flex space-x-4">
            {renderProjectsByCategory('Basic')}
          </div>
          {!showAllBasicProjects && (
            <button onClick={handleMoreProjectsClick} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-6">More Projects</button>
          )}
        </div>

        <div  data-aos="zoom-in" data-aos-duration="1000" className="container mx-auto mb-8 overflow-x-auto">
          <h2 className="text-3xl font-semibold mb-4">Advanced Projects</h2>
          <div className="flex space-x-4">
            {renderProjectsByCategory('Advanced')}
          </div>
            <button onClick={()=>{alert("No More Projects")}} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-6">More Projects</button>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1000" className="container mx-auto overflow-x-auto">
          <h2 className="text-3xl font-semibold mb-4">Pro Projects</h2>
          <div className="flex space-x-4">
            {renderProjectsByCategory('Pro')}
          </div>
            <button onClick={()=>{alert("No More Projects")}} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-6">More Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
