import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typed from "typed.js";
import { FaFileDownload } from "react-icons/fa";

interface HeroProps {
  theme: "light" | "dark";
}

const Hero: React.FC<HeroProps> = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Backend Developer", "API Specialist", "Tech Enthusiast"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });
      return () => typed.destroy();
    }
  }, []);

  return (
    <motion.section
      className="min-h-[60vh] flex items-center justify-center text-center"
      style={{ opacity: heroOpacity, scale: heroScale }}
    >
      <div>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-primary dark:text-yellow-300 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Minh Hoi Nguyen
        </motion.h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
          I'm a <span ref={typedRef} className="text-primary dark:text-yellow-300 font-semibold"></span>
        </p>
        <motion.a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary dark:bg-yellow-300 text-white dark:text-gray-900 rounded-full font-medium hover:bg-primary/80 dark:hover:bg-yellow-400 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFileDownload /> Download Resume
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero; 