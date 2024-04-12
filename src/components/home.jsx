import React, { useState, useEffect} from 'react';
import arjunImage from '../assets/arjun-image.webp';


const Home = () => {

  const [jobIndex, setJobIndex] = useState(0);
  const jobTitles = ["Software Engineer", "Web Developer", "Frontend Engineer", "Backend Developer"];

  useEffect(() => {
    const myInterval = setInterval(() => {
      setJobIndex(prevIndex => (prevIndex + 1) % jobTitles.length);
    }, 3000);

    return () => clearInterval(myInterval)
  }, [])


  return (
    <div className="container mx-auto px-4 mt-8 flex justify-center items-center h-screen">
      <div className="text-center m-[50px] w-[600px]">
        <h1 className="text-5xl font-bold mb-4 text-blue-700">Arjun Gehlot</h1>
        <h2 className="text-2xl font-semibold mb-2 text-gray-600">{jobTitles[jobIndex]}</h2>
        <p className="text-gray-700 mt-2 text-lg">
          Hello, I'm Arjun Gehlot, a passionate software engineer with expertise in building web applications.
          I specialize in frontend and backend development using modern technologies.
          Welcome to my personal website!
        </p>
      </div>
      <div className="ml-10">
        <img src={arjunImage} alt="Arjun Gehlot" className=" h-[450px] w-[450px] rounded-full shadow-lg hover:shadow-xl" />
      </div>
    </div>
  );
};

export default Home;
