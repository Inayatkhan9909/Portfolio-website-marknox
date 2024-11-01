import React from 'react';
import bg_image from '../images/Purple-and-blue-gradient-background-diamond-abstract-vector.jpg';

const bg_imageText = 'Purple and blue gradient background diamond abstract vector';
const description = 'I am a passionate Full Stack Developer . I have a strong foundation in both front-end and back-end technologies, and I am committed to delivering high-quality, responsive, and user-friendly solutions.';

const skillsList = [
  'JavaScript',
  'ReactJS',
  'NextJS',
  'NodeJS',
  'MongoDB',
  'SQL Server',
  '.NET Core'
];

const DetailorQuote = 'I am a passionate Full Stack Developer. I am committed to delivering high-quality, responsive, and user-friendly solutions. My enthusiasm for learning and adapting to new technologies drives me to continuously improve my skills and contribute effectively to team projects.';

const About = () => {
  return (
    <section id="about" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img src={bg_image} alt={bg_imageText} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto bg-white bg-opacity-90 text-center p-6 md:p-10 lg:p-16 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">About Myself</h1>
        <p className=" sm:text-lg text-gray-700 mb-6">{description}</p>

        {/* Skills List */}
        <ul className="text-left grid grid-cols-2 gap-4 text-sm sm:text-base md:text-lg w-2/3 text-gray-800 mx-auto mb-6">
          {skillsList.map((skill) => (
            <li key={skill} className=" before:text-indigo-500 before:mr-2">{skill}</li>
          ))}
        </ul>

        {/* Divider and Quote */}
        <hr className="my-4 h-2 border-gray-500 w-5/6 mx-auto" />
        <p className="text-sm sm:text-base md:text-lg text-gray-700 px-4 md:px-8">{DetailorQuote}</p>
        <hr className="my-4 h-2 border-gray-500 w-5/6 mx-auto" />
      </div>
    </section>
  );
}

export default About;
