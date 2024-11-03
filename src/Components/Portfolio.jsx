import React from 'react';
import HolidayImage from '../images/Holiday_cab_service_img.png';
import InternshubImage from '../images/internshub_image.png';
import MyportfolioImage from '../images/myportfolio_image.png';


const projectList = [
  {
    title: 'Holiday Cab Service',
    image: HolidayImage,
    description: 'Holiday Cab Service is a cab booking web application which helps tourists book cab with pickup-drop option and package option.',
    url: 'https://holiday-cab-service-1lzm.vercel.app/'
  },
  {
    title: 'Internshub',
    image: InternshubImage,
    description: 'Internshub is a platform where you can search and apply for internships and jobs of your field.',
    url: 'https://internshub.bsite.net/'
  },
  {
    title: 'Personal Portfolio',
    image: MyportfolioImage,
    description: 'This is my personal portfolio which I designed and developed to showcase myself.',
    url: 'https://inayat-khan-portfolio-j46v.vercel.app/'
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-10 w-screen min-h-screen p-12 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-center my-12">Portfolio</h1>


      {/* Projects List Section */}
      <div className="flex flex-wrap justify-center align-middle gap-12 overflow-hidden">
        {projectList.map((project) => (
          <div key={project.title} className="bg-white border w-[400px] border-gray-200 rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">

            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            </a>

            <div className="p-4 text-center">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200">
                {project.title}
              </a>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Portfolio;
