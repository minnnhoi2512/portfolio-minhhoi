import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-white dark:bg-gray-900 py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
    <p>© 2024 Minh Hoi Nguyen. All rights reserved.</p>
    <div className="flex justify-center gap-4 mt-2">
      <a href="https://github.com/mhoinguyen2512" className="hover:text-primary dark:hover:text-yellow-300">GitHub</a>
      <a href="https://linkedin.com/in/mhoinguyen" className="hover:text-primary dark:hover:text-yellow-300">LinkedIn</a>
    </div>
  </footer>
);

export default Footer; 