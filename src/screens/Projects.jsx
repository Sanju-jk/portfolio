import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../ThemeContext'; // Import the context

const Projects = () => {
    const { theme } = useContext(ThemeContext); // Get the current theme
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateDirection, setAnimateDirection] = useState('');

    const projects = [
        {
            title: 'Admin Panel | EasyToHire',
            description: 'Developed an admin panel for the EasyToHire recruitment platform using React and Bootstrap during a course at Infocampus. The panel allows admins to manage job listings, user accounts, and applications.',
            features: ['Job Listing Management', 'User Account Management'],
            technologies: [
                { name: 'React', iconClass: 'fab fa-react', color: '#61DBFB' },
                { name: 'Bootstrap', iconClass: 'fab fa-bootstrap', color: '#563d7c' }
            ],
            github: 'https://github.com/sanju-jk/admin-panel'
        },
        {
            title: 'GoFood',
            description: 'A fullstack food app built using React, Express, and MongoDB.',
            features: ['Registration/Login', 'JWT Authentication', 'Cart System', 'View Past Orders'],
            technologies: [
                { name: 'React', iconClass: 'fab fa-react', color: '#61DBFB' },
                { name: 'Node.js', iconClass: 'fab fa-node', color: '#3C873A' },
                { name: 'Express.js', iconClass: 'fas fa-server', color: '#666666' },
                { name: 'MongoDB', iconClass: 'fas fa-database', color: '#4DB33D' }
            ],
            github: 'https://github.com/sanju-jk/food-app',
            liveDemo: 'https://foodify-beta-six.vercel.app/'
        },
        {
            title: 'StreamBerry',
            description: 'A Netflix-like streaming web app built with React and TMDB API with a visually rich interface.',
            features: [
                'TMDB API Integration',
                'Dynamic Modal with Details and Trailers',
                'Search Functionality',
                'Responsive Carousel Layout'
            ],
            technologies: [
                { name: 'React', iconClass: 'fab fa-react', color: '#61DBFB' },
                { name: 'Tailwind CSS', iconClass: 'fas fa-paint-brush', color: '#38B2AC' },
                { name: 'TMDB API', iconClass: 'fas fa-film', color: '#01B4E4' }
            ],
            github: 'https://github.com/Sanju-jk/netflix-clone',
            liveDemo: 'https://netflix-clone-rouge-nu.vercel.app/'
        },
        {
            title: 'Pokemon Explorer',
            description: 'A Pokémon-themed app built using Next.js and the PokéAPI. Allows users to explore a variety of Pokémon with detailed information and dynamic routing for each Pokémon profile.',
            features: [
                'Next.js Server-side Rendering',
                'PokéAPI Integration',
                'Dynamic Routing',
                'Responsive Grid Display',
                'Clean, Interactive UI'
            ],
            technologies: [
                { name: 'Next.js', iconClass: 'fab fa-react', color: '#000000' },
                { name: 'PokéAPI', iconClass: 'fas fa-dragon', color: '#FF0000' }
            ],
            github: 'https://github.com/Sanju-jk/pokemon-explorer',
            liveDemo: 'https://pokemon-explorer-mauve.vercel.app/'
        },
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website built with React and Tailwind CSS.',
            features: ['Sidebar Navigation Menu', 'Contact Form', 'Carousel for Project Showcase', 'theming'],
            technologies: [
                { name: 'React', iconClass: 'fab fa-react', color: '#61DBFB' }
            ],
            github: 'https://github.com/sanju-jk/portfolio'
        }
    ];


    const handlePrevious = () => {
        setAnimateDirection('left');
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setAnimateDirection('right');
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        if (animateDirection) {
            const timer = setTimeout(() => setAnimateDirection(''), 300);
            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

    return (
        <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} min-h-screen`}>

            <div className={`max-w-5xl mx-auto p-8 ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'} relative`}>
                <h1 className={`text-4xl font-bold font-poppins mb-12 text-center  ${theme === 'light' ? 'text-dark' : 'text-gray-200'}`}>
                    <i className={`fa fa-diagram-project  ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`}></i> Projects
                </h1>

                <div className="relative flex justify-center items-center">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrevious}
                        className={`absolute left-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-teal-300 transition duration-300`}
                        style={{ fontSize: '3rem', zIndex: 10 }}
                    >
                        &#8249;
                    </button>

                    {/* Project Card */}
                    <div className={`w-full max-w-lg mx-auto px-4 overflow-hidden relative ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'} text-gray-300 shadow-md`}>
                        <div
                            className={`flex transition-transform duration-300  ${animateDirection === 'left' ? 'animate-fade-left' : animateDirection === 'right' ? 'animate-fade-right' : ''}`}
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-full rounded-lg ${index === currentIndex ? 'block' : 'hidden'} ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-gray-300'}`}
                                >
                                    <div className={`w-full h-40 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'} border border-gray-600 rounded-lg mx-auto`}>
                                        <h3 className={`text-3xl mt-4 font-poppins font-bold text-center  ${theme === 'light' ? 'text-dark' : 'text-light'}`}>
                                            {project.title}
                                        </h3>

                                        {/* Technology Icons */}
                                        <div className="flex justify-center mt-4 space-x-8">
                                            {project.technologies.map((tech, index) => (
                                                <i
                                                    key={index}
                                                    className={`${tech.iconClass} text-4xl`}
                                                    style={{ color: tech.color }}
                                                    title={tech.name}
                                                ></i>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={`p-4 text-center ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-gray-300'}`}>
                                        <p className={`text-lg mb-2 text-left mx-6`}>
                                            {project.description}
                                        </p>

                                        <p className={`text-md  mb-2 mx-6 text-left  ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`}>
                                            Features
                                        </p>
                                        <ul className={`list-none p-0 m-0  grid grid-cols-2 gap-2 ${theme === 'light' ? 'text-gray-900' : 'text-gray-400'}`}>
                                            {project.features.map((feature, index) => (
                                                <li key={index} className="flex items-center text-sm">
                                                    <svg
                                                        className={`w-4 h-4 mr-2 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                    </svg>

                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* GitHub Link */}
                                        <div className='flex justify-center items-center gap-5'>
                                            {project.github && (
                                                <div className="mt-10">
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={` hover:underline hover:text-teal-200 flex items-center justify-center ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`}
                                                    >
                                                        <i className="fab fa-github mr-2"></i>
                                                        GitHub
                                                    </a>
                                                </div>
                                            )}
                                            {/* Live demo Link */}
                                            {project.liveDemo && (
                                                <div className="mt-10">
                                                    <a
                                                        href={project.liveDemo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={` hover:underline hover:text-teal-200 flex items-center justify-center ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`}
                                                    >
                                                        <i className="fas fa-tv mr-2"></i>
                                                        Live Demo
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className={`absolute right-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-blue-500 transition duration-300`}
                        style={{ fontSize: '3rem', zIndex: 10 }}
                    >
                        &#8250;
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center space-x-2 mt-6">
                    {projects.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? (theme === 'light' ? 'bg-blue-600 w-6' : 'bg-blue-400 w-6')  // Active dot color
                                : (theme === 'light' ? 'bg-gray-400' : 'bg-gray-600')  // Inactive dot color
                                }`} />
                    ))}
                </div>

                <style jsx>{`
                @keyframes fade-left {
                    0% { opacity: 0; transform: translateX(50%); }
                    100% { opacity: 1; transform: translateX(0); }
                }

                @keyframes fade-right {
                    0% { opacity: 0; transform: translateX(-50%); }
                    100% { opacity: 1; transform: translateX(0); }
                }

                .animate-fade-left {
                    animation: fade-left 0.3s ease-in-out;
                }

                .animate-fade-right {
                    animation: fade-right 0.3s ease-in-out;
                }
            `}</style>
            </div>
        </div>
    );
};

export default Projects;
