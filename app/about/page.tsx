"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  WORK_EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
  SKILLS,
} from "@/constants";
import { staggerContainer, staggerItem } from "@/components/animations/ScrollProgress";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiGreensock,
  SiExpress,
  SiClerk,
  SiShadcnui,
  SiRedux,
  SiMongodb,
} from "react-icons/si";

const techIcons = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "TailwindCSS" },
  { icon: <SiFramer className="text-pink-500" />, name: "Framer Motion" },
  { icon: <SiGreensock className="text-green-500" />, name: "GSAP" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiExpress className="text-muted-foreground" />, name: "Express" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <SiClerk className="text-blue-400" />, name: "Clerk" },
  { icon: <SiShadcnui className="text-purple-400" />, name: "shadcn/ui" },
  { icon: <FaGit className="text-orange-600" />, name: "Git" },
  { icon: <FaGithub className="text-foreground" />, name: "GitHub" },
  { icon: <FaLinux className="text-muted-foreground" />, name: "Linux" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section: intro + snapshot card */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="mb-16 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start"
        >
          <motion.div variants={staggerItem} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-orange-300">
              <span className="h-1 w-1 rounded-full bg-orange-400" />
              <span>About · Developer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Blending{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                engineering
              </span>{" "}
              with cinematic{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                motion design
              </span>
              .
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              I&apos;m a frontend-focused full stack developer who loves building
              interfaces that feel as polished as high-end game and cinematic
              experiences. From micro-interactions to scroll-based storytelling,
              I care deeply about how products feel, not just how they function.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground/70">
                  Experience
                </p>
                <p className="mt-1 text-base font-semibold">3+ years</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground/70">
                  Focus
                </p>
                <p className="mt-1 text-base font-semibold">
                  Frontend · Motion · UX
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground/70">
                  Location
                </p>
                <p className="mt-1 text-base font-semibold">Remote-friendly</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Card className="relative overflow-hidden border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-background to-background/80 backdrop-blur-xl">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
              <div className="relative p-6 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-orange-300/80 mb-2">
                    Snapshot
                  </p>
                  <p className="text-sm text-muted-foreground">
                    I enjoy working on highly interactive frontends, design
                    systems, and performance-critical experiences. My ideal
                    projects live at the intersection of{" "}
                    <span className="text-orange-300">design, motion</span> and{" "}
                    <span className="text-orange-300">engineering</span>.
                  </p>
                </div>
                <Separator className="bg-orange-500/20" />
                <div className="grid grid-cols-2 gap-4 text-sm text-foreground">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground/70">
                      What I&apos;m into
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>• Framer Motion & GSAP</li>
                      <li>• Design systems & UI kits</li>
                      <li>• Story-driven interfaces</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground/70">
                      Recent themes
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>• Game-inspired portfolios</li>
                      <li>• SaaS dashboards</li>
                      <li>• Real-time web apps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.section>

        <Separator className="my-12 bg-orange-500/20" />

        {/* Experience & Education split */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 grid gap-10 lg:grid-cols-2"
        >
          {/* Work Experience */}
          <div>
            <motion.h2
              variants={staggerItem}
              className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-2"
            >
              <span className="h-8 w-1 rounded-full bg-gradient-to-b from-orange-500 to-yellow-400" />
              <span>Experience</span>
            </motion.h2>
            <div className="space-y-4">
              {WORK_EXPERIENCE.map((job) => (
                <motion.div key={job.id} variants={staggerItem}>
                  <Card className="relative overflow-hidden border-border/60 bg-background/80 hover:border-orange-500/60 transition-colors">
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-orange-500 to-yellow-400" />
                    <div className="p-5 pl-6 md:pl-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold">
                            {job.role}
                          </h3>
                          <p className="text-sm text-orange-300">
                            {job.company}
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className="mt-1 md:mt-0 text-xs md:text-sm bg-orange-500/10 border-orange-400/40 text-orange-200"
                        >
                          {job.period}
                        </Badge>
                      </div>
                      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
                        {Array.isArray(job.bullets)
                          ? job.bullets.map((point: string, idx: number) => (
                              <li key={idx}>{point}</li>
                            ))
                          : null}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-10">
            <div>
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-2"
              >
                <span className="h-8 w-1 rounded-full bg-gradient-to-b from-orange-500 to-yellow-400" />
                <span>Education</span>
              </motion.h2>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <motion.div key={edu.id} variants={staggerItem}>
                    <Card className="p-5 bg-background/80 border-border/60 hover:border-orange-500/60 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-orange-300">
                            {edu.institution}
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className="mt-1 md:mt-0 text-xs md:text-sm bg-orange-500/10 border-orange-400/40 text-orange-200"
                        >
                          {edu.period}
                        </Badge>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-2"
              >
                <span className="h-8 w-1 rounded-full bg-gradient-to-b from-orange-500 to-yellow-400" />
                <span>Certifications</span>
              </motion.h2>
              <motion.div
                variants={staggerItem}
                className="flex flex-wrap gap-3"
              >
                {CERTIFICATIONS.map((cert) => (
                  <Badge
                    key={cert}
                    variant="outline"
                    className="text-xs md:text-sm px-3 py-1 rounded-full border-orange-400/40 text-orange-100 bg-orange-500/5"
                  >
                    {cert}
                  </Badge>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        <Separator className="my-12 bg-orange-500/20" />

        {/* Tech stack icons */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2
            variants={staggerItem}
            className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-2"
          >
            <span className="h-8 w-1 rounded-full bg-gradient-to-b from-orange-500 to-yellow-400" />
            <span>Tech Stack</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-sm md:text-base text-muted-foreground mb-6 max-w-2xl"
          >
            Tools and technologies I work with regularly to design, build, and
            ship production-ready experiences.
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6"
          >
            {techIcons.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-background/60 px-3 py-4 shadow-sm shadow-black/40"
              >
                <div className="text-2xl md:text-3xl">{tech.icon}</div>
                <span className="text-xs md:text-sm text-foreground">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills with progress bars */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={staggerItem}
            className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-2"
          >
            <span className="h-8 w-1 rounded-full bg-gradient-to-b from-orange-500 to-yellow-400" />
            <span>Core Strengths</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skill) => (
              <motion.div key={skill.name} variants={staggerItem}>
                <div className="mb-2 flex justify-between items-center">
                  <span className="font-semibold text-sm md:text-base">
                    {skill.name}
                  </span>
                  <span className="text-xs text-muted-foreground/70">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2.5 bg-secondary/60 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

