import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-8">
      <div className="container mx-auto m-">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-gray-400">About Us</a>
            <a href="#" className="text-sm hover:text-gray-400">Contact Us</a>
            <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
