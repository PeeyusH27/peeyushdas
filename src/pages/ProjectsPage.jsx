import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectsData from './projects';
import { delay, motion } from 'framer-motion';

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, filter: 'blur(5px)' },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
};

  return (
    <motion.div
      className="w-[94vw] mx-auto p-16 md:p-10 text-black dark:text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 initial={{y: -30, opacity:0}} animate={{opacity:1, y:0}} transition={{duration:0.8, ease:"easeInOut", type:"spring", damping:10, stiffness:100}} className="text-4xl font-bold mb-10 text-center">My Projects</motion.h1>
      <motion.div 
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="relative group bg-zinc-800 rounded-lg overflow-hidden shadow-lg"
          >
            {/* Thumbnail Section */}
            <div className="w-full max-h-fit sm:h-72 md:h-80 lg:h-96 relative">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full md:max-h-fit object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Project Name and Hovered Description */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <div className="text-center text-white px-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-sm sm:text-lg mb-4">{project.description}</p>
                <div className="flex gap-4 justify-center">
                  <a
                    href={project.links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg flex justify-center items-center gap-2 text-black bg-white/70 py-1 px-2 rounded-lg"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg flex justify-center items-center gap-2 text-black bg-white/70 py-1 px-2 rounded-lg"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project Title (visible on all screens) */}
            <div className="hidden sm:absolute bottom-4 left-4 text-white bg-black/40 min-w-fit p-2">
              <h3 className="text-3xl font-semibold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
