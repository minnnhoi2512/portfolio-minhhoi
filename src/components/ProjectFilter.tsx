import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
}

interface ProjectFilterProps {
  projects: Project[];
  onFilterChange: (filteredProjects: Project[]) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ projects, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get unique categories and tags
  const categories = useMemo(() => {
    const uniqueCategories = new Set(projects.map((p) => p.category));
    return ["all", ...Array.from(uniqueCategories)];
  }, [projects]);

  const tags = useMemo(() => {
    const uniqueTags = new Set(projects.flatMap((p) => p.tags));
    return Array.from(uniqueTags);
  }, [projects]);

  // Filter projects based on search query, category, and tags
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
      
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.every((tag) => project.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [projects, searchQuery, selectedCategory, selectedTags]);

  // Update parent component with filtered projects
  React.useEffect(() => {
    onFilterChange(filteredProjects);
  }, [filteredProjects, onFilterChange]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary dark:focus:ring-yellow-300 outline-none transition-all"
        />
        <motion.div
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          animate={{ scale: searchQuery ? 1.1 : 1 }}
        >
          🔍
        </motion.div>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-primary text-white dark:bg-yellow-300 dark:text-gray-900"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Tags Filter */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedTags.includes(tag)
                ? "bg-primary/20 text-primary dark:bg-yellow-300/20 dark:text-yellow-300"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            #{tag}
          </motion.button>
        ))}
      </div>

      {/* Results Count */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filteredProjects.length}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          Showing {filteredProjects.length} of {projects.length} projects
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectFilter; 