"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PROJECTS } from "@/constants";
import { fadeIn, staggerContainer, staggerItem } from "@/components/animations/ScrollProgress";

export default function HomeContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  // Parallax for featured work section
  const { scrollYProgress: featuredProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax for CTA section
  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });

  // Different parallax speeds for elements
  const featuredY = useTransform(featuredProgress, [0, 1], [100, -50]);
  const featuredOpacity = useTransform(featuredProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const ctaY = useTransform(ctaProgress, [0, 1], [80, -40]);
  const ctaOpacity = useTransform(ctaProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
  // Staggered parallax for each project card
  const card1Y = useTransform(featuredProgress, [0, 1], [50, -30]);
  const card2Y = useTransform(featuredProgress, [0, 1], [70, -45]);
  const card3Y = useTransform(featuredProgress, [0, 1], [90, -60]);
  
  // Parallax for heading and description
  const headingY = useTransform(featuredProgress, [0, 1], [30, -20]);
  const descriptionY = useTransform(featuredProgress, [0, 1], [40, -25]);

  return (
    <div className="relative bg-background">
      {/* Featured Work Section */}
      <section ref={sectionRef} className="max-w-7xl mx-auto px-6 pt-24 pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          style={{
            y: featuredY,
            opacity: featuredOpacity,
          }}
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ y: headingY }}
          >
            Featured Work
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-subheading mb-12 max-w-2xl"
            style={{ y: descriptionY }}
          >
            A selection of recent projects showcasing my expertise in modern web development
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project, index) => {
              // Get the appropriate parallax transform for each card
              const cardParallax = index === 0 ? card1Y : index === 1 ? card2Y : card3Y;
              
              return (
                <motion.div 
                  key={project.id} 
                  variants={staggerItem}
                  style={{ y: cardParallax }}
                  className="group"
                >
                  <Link href={`/projects/${project.id}`} className="block">
                    {/* Project Image - Larger, no card wrapper */}
                    <div className="relative overflow-hidden bg-black rounded-lg mb-4 aspect-[16/10]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Project Info - Outside the image box */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold group-hover:text-red-800 dark:group-hover:text-red-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-subheading leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full border border-red-800/30 dark:border-red-700/30 text-red-800 dark:text-red-300 bg-red-800/5 dark:bg-red-800/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={staggerItem} className="mt-12 text-center">
            <Link href="/projects">
              <Button size="lg" className="text-lg px-8">
                View All Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-r from-red-800 to-red-900 rounded-3xl p-12 md:p-16 text-center text-white"
          style={{
            y: ctaY,
            opacity: ctaOpacity,
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-white text-red-800 hover:bg-gray-100"
            >
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

