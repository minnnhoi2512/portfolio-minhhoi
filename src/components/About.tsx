import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const About: React.FC = () => (
  <motion.div
    key="about"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="space-y-6"
  >
    <h2 className="text-3xl font-bold text-primary dark:text-yellow-300">About Me</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Passionate backend developer with expertise in building scalable APIs and cloud-native applications. I thrive in dynamic teams and love tackling complex challenges with modern technologies.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-lg">
            <FaPhone className="text-primary dark:text-yellow-300" /> 0935998212
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-primary dark:text-yellow-300" /> mhoinguyen2512@gmail.com
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaMapMarkerAlt className="text-primary dark:text-yellow-300" /> Thu Duc, Ho Chi Minh
          </div>
        </div>
      </div>
      <motion.img
        src="/assets/profile.jpg"
        alt="Minh Hoi Nguyen"
        className="rounded-lg shadow-lg max-w-full h-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
    </div>
  </motion.div>
);

export default About; 