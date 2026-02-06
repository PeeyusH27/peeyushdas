import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaLinux
} from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiGreensock, SiExpress, SiClerk, SiShadcnui, SiRedux, SiMongodb } from 'react-icons/si';

const AboutMe = () => {
  const techIcons = [
    { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML' },
    { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS' },
    { icon: <FaJs className="text-yellow-500" />, name: 'JavaScript' },
    { icon: <FaReact className="text-cyan-400" />, name: 'React' },
    { icon: <SiRedux className="text-purple-600" />, name: 'Redux' },
    { icon: <SiTailwindcss className="text-sky-500" />, name: 'TailwindCSS' },
    { icon: <SiFramer className="text-pink-500" />, name: 'Framer Motion' },
    { icon: <SiGreensock className="text-green-600" />, name: 'GSAP' },
    { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
    { icon: <SiExpress className="text-gray-700" />, name: 'Express' },
    { icon: <SiMongodb className="text-green-700" />, name: 'MongoDB' },
    { icon: <SiClerk className="text-blue-500" />, name: 'Clerk' },
    { icon: <SiShadcnui className="text-purple-500" />, name: 'ShadCn' },
    { icon: <FaGit className="text-orange-600" />, name: 'Git' },
    { icon: <FaGithub className="text-black" />, name: 'GitHub' },
    { icon: <FaLinux className="text-gray-500" />, name: 'Linux' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className='h-full w-full max-w-6xl mb-16 mx-auto px-6 sm:px-12 py-2 grid grid-cols-1 md:grid-cols-2 gap-10 text-black dark:text-white'>
      
      <div className='flex flex-col gap-6'>
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className='dark:bg-zinc-800 bg-zinc-100/40 p-6 rounded-lg shadow-lg'>
          <motion.h2 variants={itemVariants} className='text-3xl font-bold mb-4'>Experience</motion.h2>
          <motion.p variants={itemVariants}>Cognizant (Dec 2021 - Apr 2024)</motion.p>
          <motion.p variants={itemVariants}>Freelance (Present)</motion.p>
        </motion.div>
        
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className='dark:bg-zinc-800 bg-zinc-100/40 p-6 rounded-lg shadow-lg'>
          <motion.h2 variants={itemVariants} className='text-3xl font-bold mb-4'>Education</motion.h2>
          <motion.p variants={itemVariants}>GGSIPU - B.Tech CSE (2017-2021)</motion.p>
          <motion.p variants={itemVariants}>GTBPI - Automobile Engg (2014-2017)</motion.p>
        </motion.div>
      </div>
      
      <div className='flex flex-col gap-6'>
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className='dark:bg-zinc-800 bg-zinc-100/40 p-6 rounded-lg shadow-lg'>
          <motion.h2 variants={itemVariants} className='text-3xl font-bold mb-4'>Who Am I?</motion.h2>
          <motion.p variants={itemVariants}>Frontend developer skilled in crafting responsive and user-friendly interfaces. Proficient in JavaScript, React.js, with a strong foundation in UI design principles.</motion.p>
        </motion.div>
        
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className='dark:bg-zinc-800 bg-zinc-100/40 p-6 rounded-lg shadow-lg'>
          <motion.h2 variants={itemVariants} className='text-3xl font-bold mb-4'>Technologies I Work With</motion.h2>
          <div className='grid grid-cols-4 sm:grid-cols-6 gap-4 text-4xl'>
            {techIcons.map((tech, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.2 }} className='flex flex-col items-center gap-2 cursor-pointer'>
                {tech.icon}
                <p className='text-sm'>{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial="hidden" animate="visible" variants={containerVariants} className='md:col-span-2 dark:bg-zinc-800 bg-zinc-100/40 p-6 rounded-lg shadow-lg flex justify-evenly text-4xl'>
        <motion.a href="mailto:peeyushdas27@gmail.com" target="_blank" rel="noopener noreferrer" variants={itemVariants} whileHover={{ scale: 1.2 }}>
          <FaEnvelope className="text-red-600" />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/peeyush-chandra-das" target="_blank" rel="noopener noreferrer" variants={itemVariants} whileHover={{ scale: 1.2 }}>
          <FaLinkedin className="text-blue-700" />
        </motion.a>
        <motion.a href="https://github.com/PeeyusH27" target="_blank" rel="noopener noreferrer" variants={itemVariants} whileHover={{ scale: 1.2 }}>
          <FaGithub className="text-black" />
        </motion.a>
        <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" variants={itemVariants} whileHover={{ scale: 1.2 }}>
          <FaInstagram className="text-pink-500" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default AboutMe;
