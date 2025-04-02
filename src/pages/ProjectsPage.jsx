import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectsData from './projects';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="w-full mx-auto p-4 mb-14 text-black dark:text-white "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', type: 'spring', damping: 10, stiffness: 100 }}
        className="text-4xl font-bold my-4 text-center"
      >
        My Projects
      </motion.h1>
      <motion.div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 " variants={containerVariants}>
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="dark:bg-zinc-800/40 backdrop-blur-2xl dark:text-white text-black rounded-lg overflow-hidden shadow-lg flex flex-col items-center p-4"
          >
            {/* Thumbnail Section */}
            <div className="max-w-fit h-40 rounded-lg overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Project Title */}
            <h3 className="text-2xl font-semibold mt-2 line-clamp-1 text-center dark:text-white text-black">{project.title}</h3>

            {/* Project Description */}
            <p className="text-xs line-clamp-2 dark:text-gray-200 text-black/90 text-center mt-2 w-2/3">{project.description}</p>

            {/* Links */}
            <div className="flex gap-4 justify-center mt-4">
              <a
                href={project.links.web}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black bg-white/80 py-1 px-3 rounded-lg hover:bg-white"
              >
                <FaExternalLinkAlt /> Live
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black bg-white/80 py-1 px-3 rounded-lg hover:bg-white"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
