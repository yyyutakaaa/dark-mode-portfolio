"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "InstaDM-Saver",
    description:
      "A powerful tool with both GUI and CLI versions to fetch and save Instagram Direct Messages. Built as a hobby project to explore Python GUI development and API integration. Features 2FA support, session reuse, and modern interface design.",
    icon: "📱",
    technologies: ["Python", "CustomTkinter", "Instagrapi"],
    githubUrl: "https://github.com/yyyutakaaa/InstaDM-Saver",
    windowsDownloadUrl:
      "https://github.com/yyyutakaaa/InstaDM-Saver/releases/download/v1.0.0/InstagramDMFetcher.exe",
    macDownloadUrl:
      "https://github.com/yyyutakaaa/homebrew-instagram-dm-fetcher/tree/main",
    featured: true,
  },
  {
    id: 2,
    title: "ShutItDown",
    description:
      "Windows desktop application enabling remote PC shutdown via any web-enabled device. Created to learn C# and explore web server integration in desktop apps. Features system tray integration, PIN security, and self-contained deployment.",
    icon: "🖥️",
    technologies: ["C#", ".NET 6", "ASP.NET Core", "Windows Forms"],
    githubUrl: "https://github.com/yyyutakaaa/ShutItDown",
    windowsDownloadUrl:
      "https://github.com/yyyutakaaa/ShutItDown/releases/download/v1.5/ShutdownServerApp.7z",
  },
  {
    id: 3,
    title: "FuelTracker",
    description:
      "Progressive Web App for tracking fuel consumption and costs. Built to learn PWA development and create a practical tool for personal use. Uses API to fetch fuel prices from the Belgian database and provides a user-friendly interface for logging and analyzing fuel usage and expenses.",
    icon: "⛽",
    technologies: ["JavaScript", "HTML5", "CSS3", "PWA"],
    githubUrl: "https://github.com/yyyutakaaa/FuelTracker",
    liveUrl: "https://fueltracker.mehdioul.dev",
  },
  {
    id: 4,
    title: "Finwise",
    description:
      "AI-powered personal finance web application for managing expenses, tracking cash flow, and receiving intelligent financial advice. Features include automatic monthly expense cleanup, real-time synchronization, and AI-powered financial insights using OpenAI GPT.",
    icon: "💰",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "OpenAI GPT",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    githubUrl: "https://github.com/yyyutakaaa/Finwise",
    liveUrl: "https://finwise.mehdioul.dev/dashboard",
    featured: true,
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 px-4 bg-bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          My Hobby Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-text-secondary mb-12 max-w-2xl mx-auto"
        >
          While studying Network Infrastructure, I love exploring software
          development in my free time. Here are some personal projects I've
          built to learn new technologies and solve practical problems.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
