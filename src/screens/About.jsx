import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext'; // Import the ThemeContext

const About = () => {
    // const { theme } = useContext(ThemeContext); // Get the current theme
    const { theme } = useContext(ThemeContext); // Get the current theme


    return (
        <div
            className={`flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-10 relative min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}
            // style={{
            //     backgroundImage: `url('https://plus.unsplash.com/premium_photo-1664640458486-1ef3c8738cf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')`,  // Set your background image URL here
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'no-repeat',
            // }}
        >

            {/* Download Resume and Contact Button */}
            <div className="absolute top-6 right-6">
                <a
                    href="https://sanju-jk.github.io/portfolio/Sanju_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 rounded-md shadow-md transition-all duration-300 ${theme === 'dark'
                        ? 'text-white border border-blue-500 hover:bg-blue-500'
                        : 'text-gray-800 border border-blue-500 hover:bg-blue-500 hover:text-white'
                        }`}
                >
                    View Resume
                </a>
                <Link
                    to="/contact"
                    className={`mx-4 px-6 py-3 rounded-md shadow-md transition-all duration-300 ${theme === 'dark'
                        ? 'text-white border border-blue-500 hover:bg-blue-500'
                        : 'text-gray-800 border border-blue-500 hover:bg-blue-500 hover:text-white'
                        }`}
                >
                    Contact Me
                </Link>
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3 text-center lg:text-left mt-12 lg:mt-0 lg:mx-14 space-y-6">
                <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">
                    Hello, I'm <span className="text-blue-500">Sanju</span>
                </h1>
                <p className={`text-xl lg:text-2xl font-light leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    A dedicated web developer specializing in creating responsive, intuitive web applications using React.JS and JavaScript.
                </p>

                <p className={`text-lg lg:text-xl leading-relaxed ${theme === 'dark' ? 'text-slate-100' : 'text-gray-700'}`}>
                    I focus on clean, user-centered interfaces and seamless user experiences. I’m also enhancing my skills in full-stack development.
                </p>

                {/* Hobbies and Interests Section */}
                <h2 className="text-2xl font-semibold mt-8">Hobbies & Interests</h2>
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Outside of coding, I enjoy exploring new tech, cooking, and traveling.
                </p>

                {/* Career Goals Section */}
                <h2 className="text-2xl font-semibold mt-8">Career Goals</h2>
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    My goal is to master full-stack development, integrating design and functionality to build complete web solutions.
                </p>
            </div>
        </div>
    );
};

export default About;
