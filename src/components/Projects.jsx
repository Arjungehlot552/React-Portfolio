import React, { useState } from 'react';
import Card from './Card';
import project1Image from '../assets/project1.png'; // Replace 'project1.jpg' with your project image file
import project2Image from '../assets/Project2.png'; // Replace 'project2.jpg' with your project image file
import project3Image from '../assets/project3.png'; // Replace 'project2.jpg' with your project image file
// Add more project images as needed

const Projects = () => {
  const [showAllBasicProjects, setShowAllBasicProjects] = useState(false);

  // Define your projects data
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is my Apple Vision Pro clone In this website i use locomotive.js , scrool-trigger , smooth scrool',
      image: project1Image,
      websiteLink: 'https://arjungehlot552.github.io/Apple_Vision_Pro/',
      category: 'Basic',
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'This is my Spotify clone Project I use HTML and CSS to make this beautiful page. ',
        image: project2Image,
        websiteLink: 'https://arjungehlot552.github.io/Spotify-Clone/',
        category: 'Basic',
      },
      {
        id: 3,
        title: 'Project 3',
        description: 'This is my Image Search Web we can search any image. In this website i Use unsplash API ',
        image: project3Image,
        websiteLink: 'https://arjungehlot552.github.io/Photos-Search/',
        category: 'Basic',
      },
      {
        id: 4,
        title: 'Project 4',
        description: 'This is my another basic projects and we can see this projects in this projects when i develop i learn many things .',
        image: project1Image,
        websiteLink: 'https://example.com/project4',
        category: 'Basic',
      },
      {
        id: 5,
        title: 'Project 5',
        description: 'This is my another basic projects and we can see this projects in this projects when i develop i learn many things .',
        image: project2Image,
        websiteLink: 'https://example.com/project4',
        category: 'Basic',
      },
    {
      id: 5,
      title: 'Project 2',
      description: 'This is my Spotify clone Project I use HTML and CSS to make this beautiful page. ',
      image: project2Image,
      websiteLink: 'https://arjungehlot552.github.io/Spotify-Clone/',
      category: 'Advanced',
    },
    {
      id: 6,
      title: 'Project 3',
      description: 'This is my Image Search Web we can search any image. In this website i Use unsplash API ',
      image: project3Image,
      websiteLink: 'https://arjungehlot552.github.io/Photos-Search/',
      category: 'Pro',
    },
    // Add more projects as needed
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
    <div className='m-[20px] p-16'>
      <div className="container mx-auto mb-8  ">
        <h2 className="text-3xl font-semibold mb-4">Basic Projects</h2>
        <div className="flex space-x-4">
          {renderProjectsByCategory('Basic')}
        </div>
        {!showAllBasicProjects && (
          <button onClick={handleMoreProjectsClick} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-6">More Projects</button>
        )}
      </div>

      <div className="container mx-auto mb-8 overflow-x-auto">
        <h2 className="text-3xl font-semibold mb-4">Advanced Projects</h2>
        <div className="flex space-x-4">
          {renderProjectsByCategory('Advanced')}
        </div>
          <button onClick={()=>{alert("No More Projects")}} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-6">More Projects</button>
      </div>

      <div className="container mx-auto overflow-x-auto">
        <h2 className="text-3xl font-semibold mb-4">Pro Projects</h2>
        <div className="flex space-x-4">
          {renderProjectsByCategory('Pro')}
        </div>
          <button onClick={()=>{alert("No More Projects")}} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-6">More Projects</button>
      </div>
    </div>
  );
};

export default Projects;
