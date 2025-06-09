import { motion } from "framer-motion";
import { ExternalLink, Github, Download, Apple } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  githubUrl: string;
  windowsDownloadUrl?: string;
  macDownloadUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-bg-card border border-accent/20 rounded-xl p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{project.icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-primary">
            {project.title}
          </h3>
          {project.featured && (
            <span className="inline-block bg-accent/20 text-accent text-xs px-2 py-1 rounded-full mt-1">
              Featured
            </span>
          )}
        </div>
      </div>

      <p className="text-text-secondary mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent/20 hover:bg-accent/30 text-accent px-3 py-2 rounded-lg transition-colors text-sm"
        >
          <Github size={16} />
          Code
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary px-3 py-2 rounded-lg transition-colors text-sm"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}

        {project.windowsDownloadUrl && (
          <a
            href={project.windowsDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-3 py-2 rounded-lg transition-colors text-sm"
          >
            <Download size={16} />
            Windows
          </a>
        )}

        {project.macDownloadUrl && (
          <a
            href={project.macDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 px-3 py-2 rounded-lg transition-colors text-sm"
          >
            <Apple size={16} />
            macOS
          </a>
        )}
      </div>
    </motion.div>
  );
}
