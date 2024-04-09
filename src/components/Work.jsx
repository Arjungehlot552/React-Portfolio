import React from 'react';
import company1Image from '../assets/company1-logo.jpg';
import company2Image from '../assets/company2-logo.webp';

const Work = () => {
  return (
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-3xl font-semibold text-center">Work Experience</h2>
      <div className="flex mt-8">
        <div className="w-1/3 pr-8">
          <img src={company1Image} alt="Company 1 Logo" className="h-auto w-full" />
        </div>
     
        <div className="w-2/3">
          <h3 className="text-xl font-semibold mb-2">Company 1</h3>
          <p className="text-gray-700 mb-2">Software Intern</p>
          <p className="text-gray-700 mb-2">Duration: June 2022 - August 2022</p>
          <p className="text-gray-700 mb-4">
            Description of your role and responsibilities at Company 1 goes here.
          </p>
        </div>
      </div>

      
      <div className="flex mt-8">
       
        <div className="w-2/3 pr-8">
          <h3 className="text-xl font-semibold mb-2">Company 2</h3>
          <p className="text-gray-700 mb-2">Software Intern</p>
          <p className="text-gray-700 mb-2">Duration: September 2022 - November 2022</p>
          <p className="text-gray-700 mb-4">
            Description of your role and responsibilities at Company 2 goes here.
          </p>
        </div>

        <div className="w-1/3">
          <img src={company2Image} alt="Company 2 Logo" className="h-auto w-full" />
        </div>
      </div>
    </div>
  );
};

export default Work;
