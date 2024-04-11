import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-lg">
          <p className="text-gray-700 mb-6">Feel free to reach out to me using the form below:</p>
          <form className="w-full">
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 md:pr-3">
                <label htmlFor="first-name" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input id="first-name" type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter First Name" />
              </div>
              <div className="w-full md:w-1/2 md:pl-3">
                <label htmlFor="last-name" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input id="last-name" type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter Last Name" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input id="email" type="email" className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="john.doe@example.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea id="message" className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none h-40" placeholder="Your message here..."></textarea>
            </div>
            <div className="text-center">
              <button onClick={()=>{alert("Successfully sent!")}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline mb-6" type="button">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
