export interface Project {
  name: string;
  summary: string;
  tech: string[];
  github: string;
  images: string[];
  live?: string;
}

export const projects: Project[] = [
  {
    name: "Portfolio Website",
    summary: "A personal portfolio to showcase skills, projects, and experience.",
    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    github: "https://github.com/mhoinguyen2512/portfolio",
    images: ["/assets/portfolio1.png"],
    live: "https://mhoinguyen2512.dev",
  },
  {
    name: "Chat App",
    summary: "Real-time chat with authentication and group features.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/mhoinguyen2512/chat-app",
    images: ["/assets/chatapp1.png"],
    live: "https://chat.mhoinguyen2512.dev",
  },
  {
    name: "E-commerce API",
    summary: "RESTful API for e-commerce with product, order, and user management.",
    tech: ["NestJS", "PostgreSQL", "Docker", "TypeORM"],
    github: "https://github.com/mhoinguyen2512/ecommerce-api",
    images: ["/assets/ecommerce1.png"],
  },
]; 