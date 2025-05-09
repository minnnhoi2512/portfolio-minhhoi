export interface Experience {
  company: string;
  time: string;
  role: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: "FPT Software",
    time: "06/2023 - 12/2023",
    role: "Backend Developer Intern",
    description: "Developed REST APIs using NestJS and PostgreSQL, optimized database queries, and implemented CI/CD pipelines with Docker.",
  },
  {
    company: "Zalo",
    time: "01/2024 - Present",
    role: "Backend Developer",
    description: "Built scalable microservices with Node.js, integrated Zalo SDK for notifications, and maintained high-performance APIs.",
  },
]; 