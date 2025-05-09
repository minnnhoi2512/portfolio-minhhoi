import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabs } from "../data/tabs";
import { scrollToSection, handleScroll } from "../utils/scrollUtils";

interface HeaderProps {
  tab: string;
  setTab: (tab: string) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

const Header: React.FC<HeaderProps> = ({ tab, setTab, theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    return handleScroll(setIsScrolled);
  }, []);

  const handleTabClick = (tabKey: string) => {
    setTab(tabKey);
    scrollToSection(tabKey);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-lg"
          : "bg-white/80 dark:bg-gray-900/80"
      } backdrop-blur-md`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          className="text-xl font-bold text-primary dark:text-yellow-300"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Minh Hoi Nguyen
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 items-center">
          {tabs.map((t) => (
            <motion.button
              key={t.key}
              className={`px-3 py-1 font-medium transition-colors duration-200 ${
                tab === t.key
                  ? "text-primary dark:text-yellow-300 border-b-2 border-primary dark:border-yellow-300"
                  : "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-yellow-300"
              }`}
              onClick={() => handleTabClick(t.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.label}
            </motion.button>
          ))}
          <motion.button
            aria-label="Toggle Theme"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 dark:bg-primary/20 text-primary dark:text-yellow-300 shadow hover:bg-primary/20 dark:hover:bg-yellow-300/20 transition-colors duration-300"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </motion.span>
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.div
            animate={isMobileMenuOpen ? "open" : "closed"}
            className="w-6 h-6 flex flex-col justify-around"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 },
              }}
              className="w-full h-0.5 bg-primary dark:bg-yellow-300"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-full h-0.5 bg-primary dark:bg-yellow-300"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 },
              }}
              className="w-full h-0.5 bg-primary dark:bg-yellow-300"
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900"
          >
            <nav className="flex flex-col p-4">
              {tabs.map((t) => (
                <motion.button
                  key={t.key}
                  className={`px-3 py-2 text-left font-medium transition-colors duration-200 ${
                    tab === t.key
                      ? "text-primary dark:text-yellow-300"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                  onClick={() => handleTabClick(t.key)}
                  whileHover={{ x: 10 }}
                >
                  {t.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 