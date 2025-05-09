import {
    FaHtml5,
    FaReact,
    FaNodeJs,
    FaPython,
    FaJava,
    FaDocker,
    FaDatabase,
    FaLinux,
    FaGitAlt,
  } from "react-icons/fa";
  import {
    SiTypescript,
    SiJavascript,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiTailwindcss,
    SiNestjs,
    SiDjango,
    SiVite,
    SiFirebase,
    SiNginx,
    SiC,
    SiSharp,
  } from "react-icons/si";
  import { ComponentType, ReactElement } from 'react';
  import React from 'react';
  
  interface IconProps {
    className?: string;
  }
  
  // Define icon mappings
  const ICONS = {
    // Languages
    javascript: { icon: SiJavascript, color: "text-yellow-400" },
    typescript: { icon: SiTypescript, color: "text-blue-500" },
    python: { icon: FaPython, color: "text-blue-400" },
    java: { icon: FaJava, color: "text-red-500" },
    c: { icon: SiC, color: "text-blue-600" },
    csharp: { icon: SiSharp, color: "text-purple-600" },
    
    // Frameworks
    express: { icon: FaNodeJs, color: "text-green-600" },
    nestjs: { icon: SiNestjs, color: "text-red-600" },
    django: { icon: SiDjango, color: "text-green-800" },
    react: { icon: FaReact, color: "text-blue-400" },
    vite: { icon: SiVite, color: "text-purple-400" },
    reactNative: { icon: FaReact, color: "text-blue-400" },
    
    // Databases
    sqlServer: { icon: FaDatabase, color: "text-blue-700" },
    mysql: { icon: SiMysql, color: "text-blue-400" },
    mongodb: { icon: SiMongodb, color: "text-green-600" },
    postgresql: { icon: SiPostgresql, color: "text-blue-700" },
    firebase: { icon: SiFirebase, color: "text-yellow-400" },
    
    // Tools
    git: { icon: FaGitAlt, color: "text-orange-500" },
    docker: { icon: FaDocker, color: "text-blue-400" },
    nginx: { icon: SiNginx, color: "text-green-600" },
    tailwind: { icon: SiTailwindcss, color: "text-blue-400" },
    linux: { icon: FaLinux, color: "text-yellow-500" },
  } as const;
  
  // Define category icons
  const CATEGORY_ICONS = {
    languages: { icon: FaHtml5, color: "text-orange-500" },
    frameworks: { icon: FaReact, color: "text-blue-400" },
    databases: { icon: FaDatabase, color: "text-green-700" },
    tools: { icon: FaGitAlt, color: "text-orange-500" },
  } as const;
  
  // Define skill levels
  const SkillLevel = {
    EXPERT: 90,
    ADVANCED: 85,
    PROFICIENT: 80,
    INTERMEDIATE: 75,
    COMPETENT: 70,
    BEGINNER: 65,
  } as const;
  
  // Define skill data
  const SKILL_DATA = {
    languages: [
      { id: "javascript", name: "JavaScript", level: SkillLevel.EXPERT },
      { id: "typescript", name: "TypeScript", level: SkillLevel.ADVANCED },
      { id: "python", name: "Python", level: SkillLevel.PROFICIENT },
      { id: "java", name: "Java", level: SkillLevel.INTERMEDIATE },
      { id: "c", name: "C", level: SkillLevel.COMPETENT },
      { id: "csharp", name: "C#", level: SkillLevel.BEGINNER },
    ],
    frameworks: [
      { id: "express", name: "Express", level: SkillLevel.EXPERT },
      { id: "nestjs", name: "NestJS", level: SkillLevel.ADVANCED },
      { id: "django", name: "Django", level: SkillLevel.PROFICIENT },
      { id: "react", name: "React", level: SkillLevel.EXPERT },
      { id: "vite", name: "Vite", level: SkillLevel.PROFICIENT },
      { id: "reactNative", name: "React Native", level: SkillLevel.COMPETENT },
    ],
    databases: [
      { id: "sqlServer", name: "SQL Server", level: SkillLevel.PROFICIENT },
      { id: "mysql", name: "MySQL", level: SkillLevel.PROFICIENT },
      { id: "mongodb", name: "MongoDB", level: SkillLevel.INTERMEDIATE },
      { id: "postgresql", name: "PostgreSQL", level: SkillLevel.INTERMEDIATE },
      { id: "firebase", name: "Firebase", level: SkillLevel.COMPETENT },
    ],
    tools: [
      { id: "git", name: "Git", level: SkillLevel.EXPERT },
      { id: "docker", name: "Docker", level: SkillLevel.PROFICIENT },
      { id: "nginx", name: "Nginx", level: SkillLevel.COMPETENT },
      { id: "tailwind", name: "Tailwind CSS", level: SkillLevel.ADVANCED },
      { id: "linux", name: "Linux", level: SkillLevel.COMPETENT },
    ],
  } as const;
  
  // Types
  export interface SkillItem {
    name: string;
    icon: JSX.Element;
    level: number;
  }
  
  export interface SkillCategory {
    category: string;
    icon: JSX.Element;
    items: SkillItem[];
  }
  
  // Helper function to create icon element
  const createIcon = (iconData: { icon: ComponentType<IconProps>; color: string }, size: string = ""): ReactElement => {
    const IconComponent = iconData.icon;
    return React.createElement(IconComponent, {
      className: `${iconData.color} ${size}`
    });
  };
  
  // Transform the data into the required format
  export const skills: SkillCategory[] = Object.entries(SKILL_DATA).map(([category, items]) => ({
    category: category.charAt(0).toUpperCase() + category.slice(1),
    icon: createIcon(CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS], "text-2xl"),
    items: items.map(({ id, name, level }) => ({
      name,
      icon: createIcon(ICONS[id as keyof typeof ICONS]),
      level,
    })),
  }));