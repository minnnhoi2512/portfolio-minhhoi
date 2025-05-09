import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";

const Experience: React.FC = () => (
  <motion.div
    key="experience"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="space-y-6"
  >
    <h2 className="text-3xl font-bold text-primary dark:text-yellow-300">Experience</h2>
    <div className="space-y-6">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.company}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{exp.time}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Experience; 