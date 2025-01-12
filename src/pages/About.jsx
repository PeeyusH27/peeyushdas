import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaLinkedin, FaInstagram, FaEnvelope
} from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiGreensock, SiExpress, SiClerk, SiShadcnui } from 'react-icons/si';

const AboutMe = () => {
  const techIcons = [
    { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML' },
    { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS' },
    { icon: <FaJs className="text-yellow-500" />, name: 'JavaScript' },
    { icon: <FaReact className="text-cyan-400" />, name: 'React' },
    { icon: <SiTailwindcss className="text-sky-500" />, name: 'TailwindCSS' },
    { icon: <SiFramer className="text-pink-500" />, name: 'Framer Motion' },
    { icon: <SiGreensock className="text-green-600" />, name: 'GSAP' },
    { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
    { icon: <SiExpress className="text-gray-700" />, name: 'Express' },
    { icon: <SiClerk className="text-blue-500" />, name: 'Clerk' },
    { icon: <SiShadcnui className="text-purple-500" />, name: 'ShadCn' },
    { icon: <FaGit className="text-orange-600" />, name: 'Git' },
    { icon: <FaGithub className="text-black" />, name: 'GitHub' },
  ];

  // Variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className='h-full w-[90vw] mx-auto flex flex-col sm:flex-row justify-center items-start gap-10 p-6 sm:p-32 text-black dark:text-white'>

      {/* Left Section */}
      <div className='w-full sm:w-1/2 flex flex-col gap-10'>

        {/* Experience Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className='dark:bg-zinc-800 bg-zinc-100/40 p-6 rounded-lg shadow-lg'>
          <motion.h2 variants={itemVariants} className='text-3xl font-bold mb-4'>Experience</motion.h2>
          <motion.p variants={itemVariants}>Cognizant (Dec 2021 - Apr 2024)</motion.p>
          <motion.p variants={itemVariants}>Freelance (Present)</motion.p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className='dark:bg-zinc-800 bg-zinc-100/40 p-6 rounded-lg shadow-lg'>
          <motion.h2 variants={itemVariants} className='text-3xl font-bold mb-4'>Education</motion.h2>
          <motion.p variants={itemVariants}>GGSIPU - B.Tech CSE (2017-2021)</motion.p>
          <motion.p variants={itemVariants}>GTBPI - Automobile Engg (2014-2017)</motion.p>
        </motion.div>

        {/* Socials Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className='dark:bg-zinc-800 bg-zinc-100/40 p-6 rounded-lg shadow-lg flex justify-evenly text-5xl font-bold'>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=peeyushdas27@gmail.com', '_blank')}>
            <FaEnvelope className="text-red-600" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => window.open('https://linkedin.com/in/peeyush-chandra-das', '_blank')}
          >
            <FaLinkedin className="text-blue-700" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => window.open('https://github.com/PeeyusH27', '_blank')}
          >
            <FaGithub className="text-black" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => window.open('https://www.instagram.com', '_blank')}
          >
            <FaInstagram className="text-pink-500" />
          </motion.div>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className='w-full sm:w-1/2 flex flex-col gap-10'>

        {/* Who Am I Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className='dark:bg-zinc-800 bg-zinc-100/40 p-6 rounded-lg shadow-lg'>
          <motion.h2 variants={itemVariants} className='text-3xl font-bold mb-4'>Who Am I?</motion.h2>
          <motion.p variants={itemVariants}>Frontend developer skilled in crafting responsive and user-friendly interfaces. Proficient in JavaScript, React.js, with a strong foundation in UI design principles. Adept at turning design concepts into seamless web applications, ensuring optimal performance and user experience.</motion.p>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className='dark:bg-gradient-to-br from-black/70 to-zinc-800 bg-zinc-100/40 p-6 rounded-lg shadow-lg'>
          <motion.h2 variants={itemVariants} className='text-3xl font-bold mb-4'>Technologies I Work With</motion.h2>
          <div className='flex flex-wrap gap-4 text-4xl'>
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
                className='flex flex-col items-center gap-2 cursor-pointer'>
                {tech.icon}
                <p className='text-sm'>{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;