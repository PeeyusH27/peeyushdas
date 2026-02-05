"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE_CONFIG, WORK_EXPERIENCE } from "@/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2, Github, Linkedin, Mail, Code, Users, Zap } from "lucide-react";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-28"
    >

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
          {/* Profile / avatar */}
          <motion.div
            className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-orange-500/40 shadow-[0_20px_60px_rgba(255,140,0,0.2)] flex-shrink-0"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="text-foreground max-w-3xl lg:max-w-4xl space-y-8 text-center lg:text-left"
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
              <h1 className="text-6xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                {SITE_CONFIG.name}
              </h1>

              <h2 className="text-3xl md:text-3xl lg:text-3xl font-semibold text-orange-500">
                {SITE_CONFIG.role}
              </h2>

              {/* Current Position */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-base md:text-lg text-muted-foreground">
                <Building2 className="w-5 h-5 text-orange-500" />
                <span className="font-medium text-foreground">{currentJob.company}</span>
                <span>· {currentJob.role}</span>
                <span className="mx-1">·</span>
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>Gurugram, India</span>
              </div>

              <p className="text-lg md:text-xl lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto lg:mx-0">
                I&apos;m a {SITE_CONFIG.role} with <span className="font-bold">3+ years</span> of experience building scalable
                enterprise applications. I specialize in frontend development using <span className="font-bold">Next.js</span>,
                <span className="font-bold"> TypeScript</span>, and <span className="font-bold">React</span>, with a focus on performance optimization, reusable
                component architecture, and creating exceptional user experiences.</p>

              {/* Key Achievements */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-center gap-3 text-base p-4 rounded-xl bg-card border border-border/50 hover:border-orange-500/30 transition-colors">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <Code className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">3 Products</p>
                    <p className="text-sm text-muted-foreground">Enterprise Apps</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-base p-4 rounded-xl bg-card border border-border/50 hover:border-orange-500/30 transition-colors">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <Users className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">2000+ Users</p>
                    <p className="text-sm text-muted-foreground">Active Platform</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-base p-4 rounded-xl bg-card border border-border/50 hover:border-orange-500/30 transition-colors">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <Zap className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">30% Faster</p>
                    <p className="text-sm text-muted-foreground">API Performance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Tech Stack:</span>
              {["Next.js", "TypeScript", "React", "RTK Query", "Node.js"].map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-orange-500/30 text-foreground bg-orange-500/5 hover:bg-orange-500/10 transition-colors text-sm px-4 py-1.5"
                >
                  {tech}
                </Badge>
              ))}
            </motion.div>

            {/* Badges + CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <Badge className="bg-orange-500/90 text-black text-sm px-4 py-1.5 rounded-full font-medium">
                  Open to full‑time roles
                </Badge>
                <Badge
                  variant="outline"
                  className="border-orange-500/50 text-foreground bg-orange-500/5 text-sm rounded-full px-4 py-1.5"
                >
                  Available for freelance
                </Badge>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-6 rounded-full font-semibold shadow-lg shadow-orange-500/20 text-base"
                asChild
              >
                <a href="#projects">View featured projects</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500/50 text-foreground hover:bg-orange-500/10 rounded-full px-8 py-6 text-base"
                asChild
              >
                <a href="/contact">Let&apos;s build something</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border/50 hover:border-orange-500/50 hover:bg-orange-500/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border/50 hover:border-orange-500/50 hover:bg-orange-500/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="p-3 rounded-full bg-card border border-border/50 hover:border-orange-500/50 hover:bg-orange-500/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 text-base max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            >
              <div className="p-4 rounded-xl bg-card border border-border/50">
                <p className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                  Experience
                </p>
                <p className="font-semibold text-foreground text-lg">3+ years</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border/50">
                <p className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                  Focus
                </p>
                <p className="font-semibold text-foreground text-lg">Frontend · Full Stack</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border/50 sm:col-span-1 col-span-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                  Stack
                </p>
                <p className="font-semibold text-foreground text-lg">Next.js · TS · React</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

