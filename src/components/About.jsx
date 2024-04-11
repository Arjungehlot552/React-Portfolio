import React from 'react';
import aboutImage from '../assets/about-image.webp';

const About = () => {
  return (
    <div className="aboutme m-[30px] p-[30px]">
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-3xl font-semibold text-center mb-8">About Me</h2>

      <div className="flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="md:w-1/2">
          <img src={aboutImage} alt="Arjun Gehlot" className="h-[400px] w-[500px] rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-gray-700 mt-4 md:mt-0 text-lg leading-relaxed">
            Hello, I'm Arjun Gehlot, a passionate software engineer with expertise in building web applications.
            I specialize in frontend and backend development using modern technologies.
            Welcome to my personal website!
          </p>
        </div>
      </div>

      <div className="text-gray-700 text-lg leading-relaxed">
        <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus erat a leo convallis, id volutpat nisl ultrices.
          Nulla commodo, velit at dictum euismod, ipsum lorem efficitur magna, vel bibendum ex urna at libero.
          Integer sed ligula consectetur, congue magna ac, vehicula est. Duis at ante gravida, mollis lacus quis, sagittis urna.
        </p>
        <p className="mb-8">
          Nam auctor libero vitae ultricies laoreet. Fusce vitae felis nec purus mollis malesuada. 
          Integer vitae nisl volutpat, tempor nisl nec, consectetur eros. Curabitur auctor turpis eget sapien eleifend, id volutpat magna feugiat.
        </p>
        <p>
          Proin eu sapien eu neque tincidunt placerat. Ut congue arcu non nunc elementum malesuada. 
          Proin vel ex eget sapien accumsan interdum. Mauris sit amet felis in arcu eleifend tristique id vel tellus.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
