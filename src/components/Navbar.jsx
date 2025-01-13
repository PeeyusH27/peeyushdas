import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className='bg-black/30 w-full z-50 px-10 md:px-12 lg:px-24 py-3 flex justify-center md:justify-between items-center text-black dark:text-white backdrop-blur-md'>

            {/* Logo Section */}
            <div className='text-lg lg:text-3xl font-extrabold ml-24'><Link to='/'>Peeyush Das</Link></div>

            {/* Desktop Menu */}
            <div className='hidden md:flex list-none mr-24 font-bold items-center gap-6'>
                <nav className='flex gap-10 cursor-pointer'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/resume'>Resume</Link>
                </nav>

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className={`w-12 h-6 flex items-center bg-gray-700 rounded-full p-1 transition-all duration-300 ${
                        theme === 'dark' ? 'justify-end' : 'justify-start'
                    }`}
                >
                    <div className={`w-5 h-5 rounded-full bg-white transform transition-all duration-300 ${
                        theme === 'dark' ? 'bg-yellow-400' : 'bg-gray-200'
                    }`} />
                </button>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden flex-1 flex justify-end">
                <button onClick={toggleMenu} className="text-3xl">
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className='absolute top-16 left-0 w-full bg-white/80 dark:bg-black/90 backdrop-blur-md flex flex-col items-center md:hidden z-70 text-black dark:text-white'>
                    <nav className='list-none w-full text-center font-bold'>
                        <Link to='/' className='py-2 border-b border-gray-300 block' onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to='/about' className='py-2 border-b border-gray-300 block' onClick={() => setMenuOpen(false)}>About</Link>
                        <Link to='/projects' className='py-2 border-b border-gray-300 block' onClick={() => setMenuOpen(false)}>Projects</Link>
                        <Link to='/resume' className='py-2 block' onClick={() => setMenuOpen(false)}>Resume</Link>
                    </nav>

                    {/* Mobile Theme Toggle Button */}
                    <div className="mt-4">
                        <button
                            onClick={toggleTheme}
                            className={`w-12 h-6 flex items-center bg-gray-700 rounded-full p-1 transition-all duration-300 ${
                                theme === 'dark' ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            <div className={`w-5 h-5 rounded-full bg-white transform transition-all duration-300 ${
                                theme === 'dark' ? 'bg-yellow-400' : 'bg-gray-200'
                            }`} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;