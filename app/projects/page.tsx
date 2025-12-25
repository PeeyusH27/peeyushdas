"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/constants";
import { staggerContainer, staggerItem } from "@/components/animations/ScrollProgress";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Projects
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <Link href={`/projects/${project.id}`}>
                <Card className="group h-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                  {/* Project Image */}
                  <div className="aspect-video relative overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

