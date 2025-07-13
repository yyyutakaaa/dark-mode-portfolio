'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Download } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  icon: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  featured?: boolean
  windowsDownloadUrl?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`h-full bg-bg-card rounded-xl overflow-hidden border transition-all duration-300 ${
        project.featured
          ? 'border-primary/50 shadow-lg shadow-primary/20 animate-glow'
          : 'border-primary/20 hover:border-primary/50'
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

        <div className="flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-all duration-300"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {project.windowsDownloadUrl && (
            <a
              href={project.windowsDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2 rounded-lg bg-accent text-white hover:bg-blue-600 transition-all duration-300"
              title="Download for Windows"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 88 88" 
                fill="currentColor"
              >
                <path d="m0,12.402,35.687-4.8602.0156,34.423-35.67.20313zm35.67,33.529.0277,34.453-35.67-4.9041-.002-29.78zm4.3261-39.025,47.318-6.906v41.527l-47.318.37565zm47.329,39.349-.0111,41.34-47.318-6.6784-.0663-34.739z"/>
              </svg>
              <span>Download</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}