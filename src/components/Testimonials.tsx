import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

const Testimonials: React.FC = () => (
  <motion.div
    key="testimonials"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="space-y-6"
  >
    <h2 className="text-3xl font-bold text-primary dark:text-yellow-300">Testimonials</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {testimonials.map((testimonial, i) => (
        <motion.div
          key={testimonial.name}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-start gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{testimonial.quote}</p>
            <p className="text-gray-500 dark:text-gray-400 mt-2">{testimonial.company}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Testimonials; 