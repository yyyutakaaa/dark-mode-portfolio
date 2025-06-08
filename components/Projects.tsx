"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "InstaDM-Saver",
    description:
      "Een krachtige tool met zowel GUI als CLI versies om Instagram Direct Messages te fetchen en op te slaan. Ondersteunt 2FA, sessie hergebruik, en biedt een moderne interface voor het selecteren en exporteren van gesprekken.",
    icon: "📱",
    technologies: ["Python", "CustomTkinter", "Instagrapi"],
    githubUrl: "https://github.com/yyyutakaaa/InstaDM-Saver",
    featured: true,
  },
  {
    id: 2,
    title: "ShutItDown",
    description:
      "Windows desktop applicatie waarmee je je PC op afstand kunt afsluiten via elk web-enabled apparaat. Features: system tray integratie, PIN beveiliging, moderne UI met animaties, en self-contained executable.",
    icon: "🖥️",
    technologies: ["C#", ".NET 6", "ASP.NET Core", "Windows Forms"],
    githubUrl: "https://github.com/yyyutakaaa/ShutItDown",
    liveUrl: "https://mehdioul.dev/",
  },
  {
    id: 3,
    title: "FuelTracker",
    description:
      "Progressive Web App voor het bijhouden van brandstofverbruik en -kosten. Werkt offline, installeerbaar op alle devices, met een clean en responsive interface voor het tracken van tankbeurten.",
    icon: "⛽",
    technologies: ["JavaScript", "HTML5", "CSS3", "PWA"],
    githubUrl: "https://github.com/yyyutakaaa/FuelTracker",
    liveUrl: "https://fueltracker.mehdioul.dev",
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
          Mijn Projecten
        </motion.h2>

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
