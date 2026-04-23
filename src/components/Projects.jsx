import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import PythonProjectImg from "../images/python-project.jpg";
import QaProjectImg from "../images/qa-project.jpg";
import PortfolioProjectImg from "../images/portfolio-project.png";
import JavaGuiProjectImg from "../images/java-gui-project.jpg";

const professionalProjects = [
  {
    id: 1,
    title: "Personal Developer Portfolio",
    description: "A highly interactive, malware/cyberpunk themed personal portfolio built with React and Tailwind CSS.",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    github: "https://github.com/thisisahmad24/Ahmad-s-Portfolio",
    featured: true,
    image: PortfolioProjectImg,
  },
  {
    id: 2,
    title: "QA Automation Portfolio",
    description: "A collection of robust automated QA test scripts testing various web applications using Java test runners.",
    tech: ["Java", "QA Automation", "Testing"],
    github: "https://github.com/thisisahmad24/qa-automation-portfolio",
    featured: true,
    image: QaProjectImg,
  },
  {
    id: 3,
    title: "Python Engineering Journey",
    description: "A comprehensive repository showcasing various Python engineering scripts, algorithms, and backend architectures.",
    tech: ["Python", "Algorithms", "Backend"],
    github: "https://github.com/thisisahmad24/python-engineering-journey",
    featured: true,
    image: PythonProjectImg,
  },
  {
    id: 4,
    title: "Java GUI Phonebook",
    description: "A desktop GUI application built in Java for managing and storing telephone contacts in a local database.",
    tech: ["Java", "Desktop App", "GUI"],
    github: "https://github.com/thisisahmad24/Java-GUI-Phonebook",
    featured: true,
    image: JavaGuiProjectImg,
  },
];

const Projects = () => {
  const { isDark } = useTheme();
  const [selectedTech, setSelectedTech] = useState(null);

  const allTechnologies = [
    ...new Set(professionalProjects.flatMap((p) => p.tech)),
  ].sort();

  const filteredProjects = selectedTech
    ? professionalProjects.filter((p) => p.tech.includes(selectedTech))
    : professionalProjects;

  return (
    <section id="projects" className={`w-full py-24 ${isDark ? "bg-zinc-950" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto`}
          >
            A collection of my most recent and impactful development projects built using modern web technologies.
          </motion.p>
        </div>

        {/* Technology Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedTech
                  ? "bg-red-600 text-white"
                  : isDark
                  ? "bg-zinc-900 text-gray-300 hover:bg-zinc-800"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              All Technologies
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTech === tech
                    ? "bg-red-600 text-white"
                    : isDark
                    ? "bg-zinc-900 text-gray-300 hover:bg-zinc-800"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isDark={isDark} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className={`text-2xl font-medium mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              No projects match the selected technology
            </h3>
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-6 py-3 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white transition-colors`}
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isDark }) => (
  <motion.article
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className={`group relative h-full flex flex-col ${
      isDark ? "bg-zinc-900" : "bg-white"
    } rounded-xl shadow-lg hover:shadow-xl overflow-hidden border ${
      isDark ? "border-zinc-800" : "border-gray-200"
    } transition-all`}
  >
    <div
      className={`h-48 ${isDark ? "bg-zinc-800" : "bg-gray-100"} flex items-center justify-center overflow-hidden`}
    >
      {project.image ? (
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
        />
      ) : (
        <div className={`text-4xl font-bold ${isDark ? "text-gray-600" : "text-gray-300"}`}>
          {project.id.toString().padStart(2, "0")}
        </div>
      )}
    </div>

    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-end items-start mb-3">
        {project.featured && (
          <span
            className={`px-2 py-1 text-xs font-bold rounded ${
              isDark ? "bg-rose-900/30 text-rose-400" : "bg-rose-100 text-rose-800"
            }`}
          >
            Featured
          </span>
        )}
      </div>

      <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
        {project.title}
      </h3>

      <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
        {project.description}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                isDark ? "bg-zinc-800 text-red-400" : "bg-red-100 text-red-800"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
              isDark ? "bg-zinc-800 hover:bg-zinc-700" : "bg-gray-100 hover:bg-gray-200"
            } transition-colors`}
          >
            <FiGithub className="w-5 h-5" />
            <span className="text-sm font-medium">View Code</span>
          </a>
        </div>
      </div>
    </div>
  </motion.article>
);

export default Projects;
