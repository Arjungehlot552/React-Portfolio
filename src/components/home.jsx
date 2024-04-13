import React, { useState, useEffect } from 'react';
import arjunImage from '../assets/arjun-image.webp';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Achievement from './Experience';

const Home = () => {
  const [darkMode, setDarkMode] = useState(true); // Setting dark mode as default

  const [jobIndex, setJobIndex] = useState(0);
  const jobTitles = ["Software Engineer", "Web Developer", "Frontend Engineer", "Backend Developer"];

  useEffect(() => {
    const myInterval = setInterval(() => {
      setJobIndex(prevIndex => (prevIndex + 1) % jobTitles.length);
    }, 3000);

    return () => clearInterval(myInterval);
  }, [jobTitles.length]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div  className={`container mx-auto px-4  flex justify-center items-center h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000"  className="text-center m-[50px] w-[600px]">
          <h1 className="text-5xl font-bold mb-4 text-blue-700">Arjun Gehlot</h1>
          <h2 className="text-2xl font-semibold mb-2 text-gray-600">{jobTitles[jobIndex]}</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 text-lg`}>
            Hello, I'm Arjun Gehlot, a passionate software engineer with expertise in building web applications.
            I specialize in frontend and backend development using modern technologies.
            Welcome to my personal website!
          </p>
          <div className="justify-center items-center mt-4 flex text-4xl gap-7">
            <AiFillInstagram />
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillTwitterCircle />
          </div>
          <button
            className={`p-2 rounded-full mt-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} hover:bg-gray-300 focus:outline-none`}
            onClick={toggleDarkMode}
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-yellow-500" />
          </button>
        </div>
        <div className="ml-10">
          <img src={arjunImage} alt="Arjun Gehlot" className="h-[450px] w-[450px] rounded-full shadow-lg hover:shadow-xl" />
        </div>
      </div>
      <About />
      <Skills />
      <Work />
      <Achievement/>
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
