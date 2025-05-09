import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" });

  const validateForm = () => {
    const errors = { name: "", email: "", message: "" };
    let isValid = true;
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      errors.email = "Valid email is required";
      isValid = false;
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-primary dark:text-yellow-300">Contact</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary dark:focus:ring-yellow-300 focus:border-primary dark:focus:border-yellow-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary dark:focus:ring-yellow-300 focus:border-primary dark:focus:border-yellow-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary dark:focus:ring-yellow-300 focus:border-primary dark:focus:border-yellow-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-primary dark:bg-yellow-300 text-white dark:text-gray-900 rounded-full font-medium hover:bg-primary/80 dark:hover:bg-yellow-400 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact; 