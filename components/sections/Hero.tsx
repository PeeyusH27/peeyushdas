"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE_CONFIG, WORK_EXPERIENCE } from "@/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2, Github, Linkedin, Mail, Code, Users, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function Hero() {
  const currentJob = WORK_EXPERIENCE[0]; // Most recent job
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Different parallax speeds for depth effect
  const profileY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[75vh] flex flex-col overflow-hidden mb-4"
    >
      {/* Theme Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-800/20 via-red-900/15 to-red-950/10 dark:from-red-800/30 dark:via-red-900/20 dark:to-red-950/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(153,27,27,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(127,29,29,0.1),transparent_50%)]" />
      
      {/* Navbar as part of header */}
      <div className="relative z-50 w-full">
        <Navigation />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="w-[70vw] max-w-7xl mx-auto px-6">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Profile / avatar */}
            <motion.div
              className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-3 border-red-700/60 dark:border-red-800/60 shadow-[0_20px_60px_rgba(153,27,27,0.3)] dark:shadow-[0_20px_60px_rgba(153,27,27,0.4)] flex-shrink-0 order-2 lg:order-1"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ 
                y: profileY,
                opacity: opacity,
              }}
            >
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/profile.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-transparent to-transparent dark:from-red-950/30" />
            </motion.div>

            {/* Text Content */}
            <motion.div 
              className="text-foreground flex-1 max-w-2xl lg:max-w-3xl space-y-4 lg:space-y-5 text-center lg:text-left order-1 lg:order-2"
              style={{ 
                y: textY,
                opacity: opacity,
              }}
            >
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight bg-gradient-to-r from-red-800 via-red-700 to-red-900 dark:from-red-700 dark:via-red-600 dark:to-red-800 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-morganite-black), sans-serif' }}>
                  {SITE_CONFIG.name}
                </h1>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-red-800 dark:text-red-700 mt-2">
                  {SITE_CONFIG.role}
                </h2>

                {/* Current Position */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm md:text-base text-red-900 dark:text-red-300 mt-3">
                  <Building2 className="w-4 h-4 text-red-800 dark:text-red-700" />
                  <span className="font-medium text-red-900 dark:text-red-200">{currentJob.company}</span>
                  <span>·</span>
                  <span>{currentJob.role}</span>
                  <span className="mx-1">·</span>
                  <MapPin className="w-4 h-4 text-red-800 dark:text-red-700" />
                  <span>Gurugram, India</span>
                </div>

                <p className="text-base md:text-lg text-red-950/80 dark:text-red-100/90 leading-relaxed mt-4">
                  I&apos;m a {SITE_CONFIG.role} with <span className="font-bold text-red-900 dark:text-red-200">3+ years</span> of experience building scalable
                  enterprise applications. I specialize in frontend development using <span className="font-bold text-red-900 dark:text-red-200">Next.js</span>,
                  <span className="font-bold text-red-900 dark:text-red-200"> TypeScript</span>, and <span className="font-bold text-red-900 dark:text-red-200">React</span>.</p>
              </motion.div>

              {/* Key Achievements - Compact */}
              <motion.div
                className="grid grid-cols-3 gap-3 mt-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-white/80 dark:bg-red-950/40 backdrop-blur-sm border border-red-200/50 dark:border-red-800/50 hover:border-red-700 dark:hover:border-red-800 transition-colors">
                  <div className="p-1.5 rounded-md bg-red-800/20 dark:bg-red-800/30">
                    <Code className="w-4 h-4 text-red-800 dark:text-red-700" />
                  </div>
                  <p className="font-semibold text-red-950 dark:text-red-100 text-sm">3 Products</p>
                  <p className="text-xs text-red-900 dark:text-red-300">Enterprise</p>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-white/80 dark:bg-red-950/40 backdrop-blur-sm border border-red-200/50 dark:border-red-800/50 hover:border-red-700 dark:hover:border-red-800 transition-colors">
                  <div className="p-1.5 rounded-md bg-red-800/20 dark:bg-red-800/30">
                    <Users className="w-4 h-4 text-red-800 dark:text-red-700" />
                  </div>
                  <p className="font-semibold text-red-950 dark:text-red-100 text-sm">2000+</p>
                  <p className="text-xs text-red-900 dark:text-red-300">Users</p>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-white/80 dark:bg-red-950/40 backdrop-blur-sm border border-red-200/50 dark:border-red-800/50 hover:border-red-700 dark:hover:border-red-800 transition-colors">
                  <div className="p-1.5 rounded-md bg-red-800/20 dark:bg-red-800/30">
                    <Zap className="w-4 h-4 text-red-800 dark:text-red-700" />
                  </div>
                  <p className="font-semibold text-red-950 dark:text-red-100 text-sm">30%</p>
                  <p className="text-xs text-red-900 dark:text-red-300">Faster</p>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              >
                <Button
                  size="lg"
                  className="bg-red-800 dark:bg-red-800 hover:bg-red-900 dark:hover:bg-red-900 text-white dark:text-red-50 px-6 py-5 rounded-full font-semibold shadow-lg shadow-red-800/30 text-sm md:text-base"
                  asChild
                >
                  <a href="#projects">View Projects</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-700/60 dark:border-red-800/60 text-red-900 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-900/50 rounded-full px-6 py-5 text-sm md:text-base backdrop-blur-sm bg-white/60 dark:bg-red-950/40"
                  asChild
                >
                  <a href="/contact">Get In Touch</a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-3 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/80 dark:bg-red-950/40 backdrop-blur-sm border border-red-200/50 dark:border-red-800/50 hover:border-red-700 dark:hover:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/50 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 text-red-900 dark:text-red-300" />
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/80 dark:bg-red-950/40 backdrop-blur-sm border border-red-200/50 dark:border-red-800/50 hover:border-red-700 dark:hover:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-red-900 dark:text-red-300" />
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="p-2.5 rounded-full bg-white/80 dark:bg-red-950/40 backdrop-blur-sm border border-red-200/50 dark:border-red-800/50 hover:border-red-700 dark:hover:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/50 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-red-900 dark:text-red-300" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
