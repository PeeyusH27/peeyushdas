import React, { lazy, useEffect, useState } from 'react';
import char from '../assets/images/GitPic.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

const Home = () => {
  const words = ["Frontend Developer", "UI Developer", "JS Programmer", "React Developer", "Open to Interpretation"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const navigate = useNavigate();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCurrentWord(words[i]);
      i = (i + 1) % words.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-screen w-full flex flex-col sm:flex-row justify-center items-center px-6 sm:px-12 md:px-24 lg:px-32 gap-12'>

      {/* LEFT: Text Content */}
      <motion.div
        className='w-full sm:w-2/3 flex flex-col gap-3 text-left'
        initial={{ opacity: 0, x: -200, scale: 1 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, damping: 10, stiffness: 100 }}
      >
        <h1 className='text-3xl sm:text-7xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight'>
          Hi, I'm Peeyush Das
        </h1>

        {/* Animated Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, type: "spring", damping: 10, stiffness: 100 }}
          key={currentWord}
          className='text-xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-gray-100'
        >
          I am {currentWord} 🚀
        </motion.h2>

        {/* Description */}
        <p className='text-lg sm:text-xl lg:text-2xl font-medium text-black dark:text-gray-300 leading-relaxed'>
          I specialize in creating dynamic and responsive user interfaces and web applications using
          <span className='font-bold text-red-600'> HTML</span>,
          <span className='font-bold text-green-600'> CSS</span>,
          <span className='font-bold text-yellow-500'> JavaScript</span>,
          <span className='font-bold text-sky-600'> React.js</span>,
          <span className='font-bold text-white dark:text-gray-400'> Next.js</span>, &
          <span className='font-bold text-teal-500'> Tailwind CSS</span>.
        </p>

        {/* CTA Button */}
        <motion.button
          onClick={() => navigate('/about')}
          className='mt-4 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About Me
        </motion.button>
      </motion.div>

      {/* RIGHT: Image Section */}
      <motion.div
        className='w-full sm:w-1/3 flex justify-center rounded-lg overflow-hidden'
        initial={{ opacity: 0, x: 200, scale: 1 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, damping: 10, stiffness: 100 }}
      >
        <img
          loading="lazy"
          src={char}
          className='h-full sm:h-[50vh] lg:h-full rounded-lg object-contain drop-shadow-lg'
          alt='Character Illustration'
        />
      </motion.div>
    </div>
  );
}

export default Home;
