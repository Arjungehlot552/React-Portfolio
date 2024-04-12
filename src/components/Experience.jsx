import React from 'react';
import sihImage from '../assets/SIH-image.jpg'; // Import your image here

const Experience = () => {
  return (
    <>
      <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className="container mx-auto px-4 mt-8">
        <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
        <div className="mt-6 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 md:pr-8 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-2">Smart India Hackathon 2023 (SIH 2k23)</h3>
              <p className="text-gray-700 mb-2">Full Stack Developer</p>
              <p className="text-gray-700 mb-2">Duration: March 2023 - May 2023</p>
              <p className="text-gray-700 mb-2">
                As a part of the Smart India Hackathon 2023, I worked as a full-stack developer on a project aimed to Create Online Education Platform For Students and Colleges for upload there projects.
                My responsibilities included:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Developing frontend components using React.js</li>
                <li>Designing and implementing backend APIs using Node.js and Express</li>
                <li>Database design and implementation using MongoDB</li>
                <li>Integration of third-party services and APIs</li>
                <li>Collaborating with team members to ensure project milestones were met</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This experience provided me with valuable insights into full-stack development, teamwork, and problem-solving in a time-constrained environment.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <div className="w-full h-auto rounded-lg overflow-hidden shadow-md hover:shadow-xl">
              <img src={sihImage} alt="Smart India Hackathon" className="w-full h-full transform transition-transform hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="mt-6 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 md:pr-8 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-2">Smart India Hackathon 2023 (SIH 2k23)</h3>
              <p className="text-gray-700 mb-2">Full Stack Developer</p>
              <p className="text-gray-700 mb-2">Duration: March 2023 - May 2023</p>
              <p className="text-gray-700 mb-2">
                As a part of the Smart India Hackathon 2023, I worked as a full-stack developer on a project aimed to Create Online Education Platform For Students and Colleges for upload there projects.
                My responsibilities included:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Developing frontend components using React.js</li>
                <li>Designing and implementing backend APIs using Node.js and Express</li>
                <li>Database design and implementation using MongoDB</li>
                <li>Integration of third-party services and APIs</li>
                <li>Collaborating with team members to ensure project milestones were met</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This experience provided me with valuable insights into full-stack development, teamwork, and problem-solving in a time-constrained environment.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <div className="w-full h-auto rounded-lg overflow-hidden shadow-md hover:shadow-xl">
              <img src={sihImage} alt="Smart India Hackathon" className="w-full h-full transform transition-transform hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
