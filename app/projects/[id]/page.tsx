"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PROJECTS } from "@/constants";
import { fadeIn, staggerContainer, staggerItem } from "@/components/animations/ScrollProgress";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params?.id as string;
  const project = PROJECTS.find((p) => p.id === projectId);

  // Show loading state while params are being resolved
  if (!params || !projectId) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Show not found if project doesn't exist
  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/projects">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
              <Card className="overflow-hidden sticky top-24">
                <div className="aspect-video relative bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description}
              </p>
            </div>

            <Separator />

            {/* Tech Stack */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-base px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="gap-2">
                    <Github className="w-5 h-5" />
                    View Code
                  </Button>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.filter((p) => p.id !== project.id)
              .slice(0, 2)
              .map((otherProject) => (
                <Link key={otherProject.id} href={`/projects/${otherProject.id}`}>
                  <Card className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                    <div className="aspect-video relative overflow-hidden bg-black">
                      <img
                        src={otherProject.image}
                        alt={otherProject.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {otherProject.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2">
                        {otherProject.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

