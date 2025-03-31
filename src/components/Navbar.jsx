import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[60vw] md:w-[60vw] lg:w-[50vw] rounded-xl bg-black/50 backdrop-blur-lg z-50 px-4 py-4 md:px-12 lg:px-24 flex justify-center items-center text-white dark:text-black dark:bg-white/60 border-t-2 border-gray-600">
            <nav className="flex gap-3 md:gap-8 font-semibold justify-center items-center">
                <Link to="/" className="text-xs md:text-lg font-semibold">Home</Link>
                <Link to="/about" className="text-xs md:text-lg font-semibold">About</Link>
                <Link to="/projects" className="text-xs md:text-lg font-semibold">Projects</Link>
                <Link to="/resume" className="text-xs md:text-lg font-semibold">Resume</Link>
                <button
                    onClick={toggleTheme}
                    className={`flex w-6 md:w-12 h-2 md:h-6 items-center bg-gray-700 rounded-full p-1 transition-all duration-300 ${theme === 'dark' ? 'justify-end' : 'justify-start'}`}
                >
                    <div className={`w-2 md:w-5 h-2 md:h-5 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-yellow-400' : 'bg-gray-200'}`} />
                </button>
            </nav>

            {/* Theme Toggle Button */}
        </div>
    );
};

export default Navbar;
