import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

const Skills: React.FC = () => (
  <motion.div
    key="skills"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="space-y-6"
  >
    <h2 className="text-3xl font-bold text-primary dark:text-yellow-300">Skills</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((group, i) => (
        <motion.div
          key={group.category}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            {group.icon}
            <h3 className="text-xl font-semibold">{group.category}</h3>
          </div>
          <ul className="space-y-3">
            {group.items.map((item) => (
              <li key={item.name} className="flex items-center gap-3">
                <span className="w-6">{item.icon}</span>
                <span className="w-28">{item.name}</span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded h-2 overflow-hidden">
                  <motion.div
                    className="bg-primary dark:bg-yellow-300 h-2 rounded"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 0.7 }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Skills; 