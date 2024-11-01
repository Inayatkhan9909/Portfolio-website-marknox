import React from 'react';
import image from '../images/developer_desktop.jpg';
import { Link } from 'react-scroll';
import downarrowsvg from '../images/circled-down-chevron-svgrepo-com.svg';
import profileimage from '../images/Zma_photo_crip.jpg';

const ImageAltText = 'Adult female in office';
const ArrowsvgText = 'Move down Arrow';
const ProfileimageText = 'Profile Picture';

const Home = ({ name, title }) => {
    return (
        <section id="home" className="relative flex flex-col md:flex-row items-center justify-center h-screen overflow-hidden bg-gray-100">
            
            {/*  Profile Details */}
            <div className="flex flex-col justify-center items-center text-center  md:text-left md:w-1/2 p-8 md:pl-16 m-auto ">
                <img src={profileimage} alt={ProfileimageText} className="w-1/2  rounded-full mb-6 md:mb-8 mt-10" />
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-800">
                    {name}
                </h1>
                <h2 className="text-xl md:text-3xl text-gray-600 mt-4">
                    {title}
                </h2>

                <div className="mt-8 animate-bounce">
                    <Link to="about" smooth={true} duration={500}>
                        <img src={downarrowsvg} alt={ArrowsvgText} className=" cursor-pointer" />
                    </Link>
                </div>
            </div>

            {/* Right Side Image  */}
            <div className="md:w-1/2 w-full h-full relative hidden md:block">
                <img src={image} alt={ImageAltText} className="object-cover h-full w-full md:rounded-l-3xl shadow-lg" />
            </div>
        </section>
    );
};

Home.defaultProps = {
    name: 'Your Name',
    title: 'Your Title'
};

export default Home;
