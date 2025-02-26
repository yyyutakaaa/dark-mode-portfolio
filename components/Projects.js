import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Beschrijving van project 1",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Beschrijving van project 2",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Beschrijving van project 3",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#161B22]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projecten</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white bg-opacity-5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 text-[#00D4FF]">
                  {project.title}
                </h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
