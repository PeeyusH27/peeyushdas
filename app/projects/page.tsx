"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/constants";
import { staggerContainer, staggerItem } from "@/components/animations/ScrollProgress";

export default function ProjectsPage() {
  return (
    <div className="min-h-[100vh] pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-6">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent"
            >
              Projects
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-subheading max-w-3xl"
          >
            A showcase of my recent work, featuring web applications, tools, and
            experiments built with modern technologies.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={staggerItem} className="group">
              <Link href={`/projects/${project.id}`} className="block">
                {/* Project Image - Larger, no card wrapper */}
                <div className="relative overflow-hidden bg-black rounded-lg mb-6 aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Info - Outside the image box */}
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold group-hover:text-red-800 dark:group-hover:text-red-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-subheading leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="border-red-800/30 dark:border-red-700/30 text-red-800 dark:text-red-300 bg-red-800/5 dark:bg-red-800/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

