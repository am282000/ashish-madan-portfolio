"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Moon,
  Sun,
  Download,
} from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import AnimatedCharacter from "./AnimatedCharacter";
import Image from "next/image";

type ThemeProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

type SectionProps = {
  isDark: boolean;
};

type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  highlights: string[];
};

type ProjectItem = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  highlights?: string[];
  metrics?: Record<string, string | undefined>;
};

type SkillItem = {
  name: string;
  proficiency: number;
  icon: string;
};

type SkillGroup = {
  category: string;
  items: SkillItem[];
};

type AwardItem = {
  title: string;
  company: string;
  year: number;
  description: string;
};

type PortfolioData = {
  personal: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    bio: string;
    imageUrl: string;
    resumeDownloadName: string;
  };
  social: SocialLink[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  awards: AwardItem[];
};

const portfolio = portfolioData as PortfolioData;

// ==================== NAVIGATION COMPONENT ====================
const Navigation = ({ isDark, setIsDark }: ThemeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md ${
        isDark
          ? "bg-slate-900/80 border-slate-700"
          : "bg-white/80 border-gray-200"
      } border-b`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            AM
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-cyan-500 ${
                  isDark ? "text-slate-300" : "text-gray-700"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? "bg-slate-800 hover:bg-slate-700"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? (
              <Sun size={20} className="text-amber-400" />
            ) : (
              <Moon size={20} className="text-slate-600" />
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden pb-4 space-y-2 ${isDark ? "bg-slate-800" : "bg-gray-50"}`}
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block px-4 py-2 rounded-lg transition-colors hover:text-cyan-500 ${
                    isDark ? "hover:bg-slate-700" : "hover:bg-gray-200"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// ==================== CURSOR FOLLOWER ====================
const CursorFollower = ({ isDark }: SectionProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <motion.div
        className={`fixed w-8 h-8 rounded-full pointer-events-none border-2 ${
          isDark ? "border-cyan-500" : "border-cyan-400"
        }`}
        animate={{ x: position.x - 16, y: position.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <motion.div
        className={`fixed w-2 h-2 rounded-full pointer-events-none ${
          isDark ? "bg-purple-500" : "bg-purple-400"
        }`}
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
        style={{ opacity: isVisible ? 0.5 : 0 }}
      />
    </>
  );
};

// ==================== HERO SECTION ====================
const HeroSection = ({ isDark }: SectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-16 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
      }`}
    >
      {/* Animated Background */}
      <motion.div
        className={`absolute inset-0 ${isDark ? "opacity-30" : "opacity-20"}`}
        animate={{
          background: isDark
            ? `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, #06b6d4 0%, transparent 50%)`
            : `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, #06b6d4 0%, transparent 50%)`,
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: "none" }}
      />

      {/* Animated Circles */}
      <motion.div
        className={`absolute w-96 h-96 rounded-full pointer-events-none ${
          isDark ? "bg-purple-600/20" : "bg-purple-600/10"
        } blur-3xl`}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className={`absolute w-80 h-80 rounded-full pointer-events-none ${
          isDark ? "bg-cyan-600/20" : "bg-cyan-600/10"
        } blur-3xl`}
        animate={{
          x: [0, -50, 50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        style={{ bottom: "10%", right: "10%" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          {/* Left Side - 60% */}
          <div className="w-full lg:w-3/5 flex justify-center">
            <div className="max-w-2xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400 bg-clip-text text-transparent"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {portfolio.personal.name}
                </motion.h1>

                <motion.p
                  className={`text-2xl md:text-3xl mb-4 font-light ${
                    isDark ? "text-slate-300" : "text-gray-700"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {portfolio.personal.title}
                </motion.p>

                <motion.p
                  className={`text-lg mb-8 max-w-2xl ${
                    isDark ? "text-slate-400" : "text-gray-600"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {portfolio.personal.tagline}
                </motion.p>
              </motion.div>
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.a
                  href="#projects"
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    isDark
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/50"
                      : "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>

                <motion.a
                  href="#contact"
                  className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all ${
                    isDark
                      ? "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                      : "border-cyan-500 text-cyan-600 hover:bg-cyan-500/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  download={portfolio.personal.resumeDownloadName}
                  className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all flex items-center gap-2 ${
                    isDark
                      ? "border-amber-500 text-amber-400 hover:bg-amber-500/10"
                      : "border-amber-500 text-amber-600 hover:bg-amber-500/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </motion.div>
              {/* Social Links */}
              <motion.div
                className="flex gap-6 justify-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {portfolio.social.map((social: SocialLink) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-colors ${
                      isDark
                        ? "hover:bg-slate-800 text-slate-400"
                        : "hover:bg-gray-200 text-gray-600"
                    }`}
                    whileHover={{ scale: 1.2, color: "#06b6d4" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon === "github" && <Github size={24} />}
                    {social.icon === "linkedin" && <Linkedin size={24} />}
                    {social.icon === "mail" && <Mail size={24} />}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Side - 40% */}
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <motion.div className="h-[450px] flex items-center justify-center">
              <AnimatedCharacter isDark={isDark} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          className={`text-center ${isDark ? "text-slate-400" : "text-gray-600"}`}
        >
          <p className="text-sm mb-2">Scroll to explore</p>
          <div
            className={`w-6 h-10 border-2 rounded-full flex justify-center p-2 ${
              isDark ? "border-slate-400" : "border-gray-600"
            }`}
          >
            <motion.div
              className={`w-1 h-2 rounded-full ${isDark ? "bg-cyan-500" : "bg-cyan-500"}`}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// ==================== SCROLL REVEAL COMPONENT ====================
const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

// ==================== EXPERIENCE SECTION ====================
const ExperienceSection = ({ isDark }: SectionProps) => {
  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-slate-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Experience
          </h2>

          <div className="space-y-8">
            {portfolio.experience.map((job: ExperienceItem, index: number) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`p-6 rounded-xl border ${
                  isDark
                    ? "border-slate-700 bg-slate-800/50 hover:bg-slate-800"
                    : "border-gray-200 bg-white hover:bg-gray-50"
                } transition-colors`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3
                      className={`text-2xl font-bold ${isDark ? "text-cyan-400" : "text-cyan-600"}`}
                    >
                      {job.title}
                    </h3>
                    <p
                      className={`text-lg ${isDark ? "text-slate-300" : "text-gray-700"}`}
                    >
                      {job.company}
                    </p>
                  </div>
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      isDark
                        ? "bg-purple-500/20 text-purple-300"
                        : "bg-purple-500/10 text-purple-700"
                    }`}
                  >
                    {job.duration}
                  </span>
                </div>
                <p
                  className={`mb-4 ${isDark ? "text-slate-400" : "text-gray-600"}`}
                >
                  {job.description}
                </p>
                <ul
                  className={`space-y-2 ${isDark ? "text-slate-400" : "text-gray-700"}`}
                >
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-cyan-500 font-bold">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// ==================== PROJECTS SECTION ====================
const ProjectCard = ({
  project,
  isDark,
}: {
  project: ProjectItem;
  isDark: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`group rounded-xl overflow-hidden border ${
        isDark
          ? "border-slate-700 bg-slate-800/30 hover:border-cyan-500"
          : "border-gray-200 bg-white hover:border-cyan-500"
      } transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className={`text-xl font-bold mb-2 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}
        >
          {project.title}
        </h3>
        <p className={`mb-4 ${isDark ? "text-slate-400" : "text-gray-600"}`}>
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex gap-4 mb-4 flex-wrap">
            {Object.entries(project.metrics ?? {}).map(([key, value]) => (
              <div
                key={key}
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  isDark
                    ? "bg-amber-500/20 text-amber-300"
                    : "bg-amber-500/10 text-amber-700"
                }`}
              >
                {String(value)}
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className={`text-xs px-2 py-1 rounded-full ${
                isDark
                  ? "bg-slate-700 text-slate-300"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
            isDark
              ? "text-cyan-400 hover:text-cyan-300"
              : "text-cyan-600 hover:text-cyan-500"
          }`}
          whileHover={{ gap: 8 }}
        >
          Learn More
          <ExternalLink size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

const ProjectsSection = ({ isDark }: SectionProps) => {
  return (
    <section
      id="projects"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-slate-800" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.projects.map((project: ProjectItem) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} isDark={isDark} />
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// ==================== SKILLS SECTION ====================
const SkillCard = ({
  skill,
  category,
  isDark,
}: {
  skill: SkillItem;
  category: string;
  isDark: boolean;
}) => {
  const categoryColors: Record<string, string> = {
    Frontend: "from-cyan-500 to-blue-600",
    Backend: "from-green-500 to-emerald-600",
    "Tools & Architecture": "from-purple-500 to-pink-600",
    "DevOps & Infrastructure": "from-orange-500 to-red-600",
    "Testing & Quality": "from-yellow-500 to-amber-600",
    "Architecture & Design": "from-indigo-500 to-purple-600",
    "Advanced & Specialized": "from-rose-500 to-pink-600",
  };

  return (
    <motion.div
      className={`p-4 rounded-lg border transition-all ${
        isDark
          ? "border-slate-700 bg-slate-800/50 hover:border-cyan-500"
          : "border-gray-200 bg-gray-50 hover:border-cyan-500"
      }`}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{skill.icon}</span>
          <h4
            className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {skill.name}
          </h4>
        </div>
        <span
          className={`text-sm font-bold ${isDark ? "text-cyan-400" : "text-cyan-600"}`}
        >
          {skill.proficiency}%
        </span>
      </div>
      <div
        className={`h-2 rounded-full overflow-hidden ${isDark ? "bg-slate-700" : "bg-gray-300"}`}
      >
        <motion.div
          className={`h-full bg-gradient-to-r ${categoryColors[category]}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = ({ isDark }: SectionProps) => {
  return (
    <section
      id="skills"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-slate-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Skills & Expertise
          </h2>

          <div className="space-y-8">
            {portfolio.skills.map((skillGroup: SkillGroup) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    isDark ? "text-cyan-400" : "text-cyan-600"
                  }`}
                >
                  {skillGroup.category}
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {skillGroup.items.map((skill: SkillItem) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      category={skillGroup.category}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// ==================== AWARDS SECTION ====================
const AwardCard = ({
  award,
  isDark,
}: {
  award: AwardItem;
  isDark: boolean;
}) => {
  return (
    <motion.div
      className={`group p-6 rounded-xl border transition-all ${
        isDark
          ? "border-slate-700 bg-slate-800/50 hover:border-purple-500 hover:bg-slate-800"
          : "border-gray-200 bg-white hover:border-purple-500 hover:bg-gray-50"
      }`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Award Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3
            className={`text-xl font-bold ${isDark ? "text-purple-400" : "text-purple-600"}`}
          >
            {award.title}
          </h3>
          <p
            className={`text-sm font-medium ${isDark ? "text-slate-400" : "text-gray-600"}`}
          >
            {award.company}
          </p>
        </div>
        <motion.div
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            isDark
              ? "bg-purple-500/20 text-purple-300"
              : "bg-purple-500/10 text-purple-700"
          }`}
          whileHover={{ scale: 1.1 }}
        >
          {award.year}
        </motion.div>
      </div>

      {/* Award Description */}
      <p className={`${isDark ? "text-slate-400" : "text-gray-600"}`}>
        {award.description}
      </p>

      {/* Accent Line */}
      <motion.div
        className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};

const AwardsSection = ({ isDark }: SectionProps) => {
  return (
    <section
      id="awards"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-slate-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Recognition & Awards
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.awards.map((award: AwardItem, index: number) => (
              <motion.div
                key={`${award.title}-${award.year}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AwardCard award={award} isDark={isDark} />
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const ContactSection = ({ isDark }: SectionProps) => {
  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-slate-800" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Work Together
          </h2>

          <p
            className={`text-lg mb-8 ${
              isDark ? "text-slate-400" : "text-gray-600"
            }`}
          >
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              className={`px-8 py-4 rounded-lg font-semibold transition-all text-lg ${
                isDark
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/50"
                  : "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center gap-2">
                <Mail size={20} />
                Send Email
              </div>
            </motion.a>

            <motion.a
              href={
                portfolio.social.find((s: SocialLink) => s.name === "LinkedIn")
                  ?.url ?? "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all text-lg ${
                isDark
                  ? "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                  : "border-cyan-500 text-cyan-600 hover:bg-cyan-500/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </div>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Ashish_Madan_Resume.pdf"
              className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all text-lg ${
                isDark
                  ? "border-amber-500 text-amber-400 hover:bg-amber-500/10"
                  : "border-amber-500 text-amber-600 hover:bg-amber-500/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center gap-2">
                <Download size={20} />
                Download Resume
              </div>
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className={`mt-12 p-8 rounded-xl border ${
              isDark
                ? "border-slate-700 bg-slate-800/50"
                : "border-gray-200 bg-gray-50"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Contact Information
            </h3>
            <div
              className={`space-y-2 text-left ${isDark ? "text-slate-400" : "text-gray-600"}`}
            >
              <p>📧 Email: {portfolio.personal.email}</p>
              <p>📱 Phone: {portfolio.personal.phone}</p>
              <p>📍 Location: {portfolio.personal.location}</p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// ==================== FOOTER ====================
const Footer = ({ isDark }: SectionProps) => {
  return (
    <footer
      className={`${isDark ? "bg-slate-950 border-slate-900" : "bg-gray-100 border-gray-200"} border-t py-8`}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.p
          className={`text-sm ${isDark ? "text-slate-500" : "text-gray-600"}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          © {new Date().getFullYear()} Ashish Madan. Built with React, Next.js &
          ❤️
        </motion.p>
      </div>
    </footer>
  );
};

// ==================== MAIN APP ====================
export default function PortfolioApp() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={isDark ? "dark" : "light"}>
      <div
        className={
          isDark ? "bg-slate-950 text-white" : "bg-white text-gray-900"
        }
      >
        <CursorFollower isDark={isDark} />
        <Navigation isDark={isDark} setIsDark={setIsDark} />
        <HeroSection isDark={isDark} />
        <ExperienceSection isDark={isDark} />
        <ProjectsSection isDark={isDark} />
        <SkillsSection isDark={isDark} />
        <AwardsSection isDark={isDark} />
        <ContactSection isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}
