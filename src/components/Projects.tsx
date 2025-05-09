import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import GitHubCommitChart from "./GitHubCommitChart";

const Projects: React.FC = () => (
  <motion.div
    key="projects"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="space-y-6"
  >
    <h2 className="text-3xl font-bold text-primary dark:text-yellow-300">Projects</h2>
    
    <div className="mb-8">
      <GitHubCommitChart />
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((proj, i) => (
        <motion.div
          key={proj.name}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={proj.images[0]} alt={proj.name} className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold">{proj.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{proj.summary}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {proj.tech.map((tech) => (
              <span
                key={tech}
                className="bg-primary/10 dark:bg-yellow-300/10 text-primary dark:text-yellow-300 px-2 py-1 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-yellow-300 hover:underline font-medium"
            >
              GitHub ↗
            </a>
            {proj.live && (
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-yellow-300 hover:underline font-medium"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Projects; 