
import React, { useEffect, useState } from 'react';
import char from '../assets/images/samu.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

const Home = () => {
  const words = ["Frontend Developer", "UI Developer", "JS Programmer", "React Developer", "Open to Interpretation"];
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCurrentWord(words[i]);
      i = (i + 1) % words.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  return (
    <div className='h-full w-[90vw] mx-auto flex flex-col sm:flex-row justify-center items-center gap-10 p-6 sm:p-10'>

      {/* TEXT CONTENT LEFT */}
      <div className='w-full sm:w-2/3 flex flex-col gap-6 justify-center items-start text-left mx-4 p-6'>
        <h1 className='text-4xl text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-7xl font-extrabold leading-tight'>
          Hi, I'm Peeyush Das
        </h1>

        {/* Animated Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, type: "spring", damping: 10, stiffness: 100 }}
          key={currentWord}
          className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-900 dark:text-gray-100 font-semibold'
        >
          I am {currentWord} 🚀
        </motion.h2>

        {/* Description */}
        <p className='text-base sm:text-lg md:text-xl lg:text-3xl text-black dark:text-gray-300 leading-relaxed'>
          I specialize in creating dynamic and responsive User Interfaces, web components & applications using
          <span className="font-bold"> Html, Css, JavaScript, React.js, Next.js,</span> and <span className="font-bold">Tailwind CSS</span>.
        </p>
      </div>

      {/* IMAGE RIGHT */}
      <div className='w-full sm:w-1/3 flex justify-center'>
        <motion.img
          initial={{ opacity: 0, x: 200, scale: 0.1 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1.2 }}
          transition={{
            duration: 5,
            type: "spring",
            damping: 10,
            ease: "easeIn",
            stiffness: 100
          }}
          src={char}
          className='h-[30vh] sm:h-[40vh] lg:h-[50vh] object-contain drop-shadow-lg'
          alt="Character Illustration"
        />
      </div>

      {/* Button Section */}
      <div className='absolute bottom-10 p-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg'>
        <button onClick={() => navigate('/about')}>About Me</button>
      </div>
    </div>
  );
}

export default Home;