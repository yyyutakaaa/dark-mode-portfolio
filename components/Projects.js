import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Network Infrastructure Project",
      image: "/images/network-project.webp",
      description:
        "Click here to view the detailed project description and learn more about the network configuration and deployment.",
      href: "/Network-Infrastructure-Project",
    },
    {
      id: 2,
      title: "Fuel WebApp",
      image: "/images/fuel-app.webp",
      description:
        "Klik hier om de gedetailleerde projectbeschrijving te bekijken en meer te weten te komen over de webapplicatie voor brandstofbeheer.",
      href: "/Fuel-WebApp",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#161B22]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={project.href}>
              <motion.div
                className="p-6 bg-white bg-opacity-5 backdrop-blur-md rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-2 text-[#00D4FF]">
                  {project.title}
                </h3>
                <img
                  src={project.image}
                  alt="Project preview"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-gray-300">{project.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
