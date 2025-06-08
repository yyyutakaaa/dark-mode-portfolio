"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`h-full bg-bg-card rounded-xl overflow-hidden border transition-all duration-300 ${
        project.featured
          ? "border-primary/50 shadow-lg shadow-primary/20"
          : "border-primary/20 hover:border-primary/50"
      }`}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{project.icon}</div>
          {project.featured && (
            <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-2 text-text-primary">
          {project.title}
        </h3>

        <p className="text-text-secondary mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-all duration-300"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
