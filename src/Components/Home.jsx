import React from 'react';
import image from '../images/home_page_image.jpg';
import downarrowsvg from '../images/circled-down-chevron-svgrepo-com.svg';
import { Link } from 'react-scroll';

const ImageAltText = 'Adult female in office';
const ArrowsvgText = 'Move down Arrow';

const Home = ({ name, title }) => {
    return (
        <section id='home' className='relative max-w-screen h-screen overflow-hidden'>
            <img src={image} alt={ImageAltText} className='w-full h-screen object-cover' />
            <div className='absolute top-20 left-1/2 transform -translate-x-1/2 sm:w-3/12 w-10/12 text-center'>
                <h1 className='xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold text-white'>{name}</h1>
                <h2 className='lg:text-3xl md:text-2xl text-xl mt-2 text-white'>{title}</h2>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <Link to="about" smooth={true} duration={500}>
                    <img src={downarrowsvg} alt={ArrowsvgText} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 cursor-pointer" />
                </Link>
            </div>
        </section>
    );
};

Home.defaultProps = {
    name: '',
    title: ''
};

export default Home;
