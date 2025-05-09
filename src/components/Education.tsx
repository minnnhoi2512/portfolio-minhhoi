import React from "react";
import { motion } from "framer-motion";

const Education: React.FC = () => (
  <motion.div
    key="education"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="space-y-6"
  >
    <h2 className="text-3xl font-bold text-primary dark:text-yellow-300">Education</h2>
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold">FPT University</h3>
      <p className="text-gray-600 dark:text-gray-300">Bachelor's Degree in Computer Science (2020-2024)</p>
      <p className="text-gray-500 dark:text-gray-400 mt-2">GPA: 3.8/4.0, Specialized in Software Engineering</p>
    </motion.div>
  </motion.div>
);

export default Education; 