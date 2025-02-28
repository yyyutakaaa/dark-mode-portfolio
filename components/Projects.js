import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [];

  return (
    <section id="projects" className="py-20 bg-[#161B22]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Projects
        </h2>
        {projects.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/Network-Infrastructure-Project">
              <motion.div
                className="p-6 bg-white bg-opacity-5 backdrop-blur-md rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-2 text-[#00D4FF]">
                  Network Infrastructure Project
                </h3>
                <img
                  src="/images/network-project.webp"
                  alt="Project preview"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-gray-300">
                  Click here to view the detailed project description and learn
                  more about the network configuration and deployment.
                </p>
              </motion.div>
            </Link>
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
};
return (
  <section id="projects" className="py-20 bg-[#161B22]">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">
        Projects
      </h2>
      {projects.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/Fuel-WebApp">
            <motion.div
              className="p-6 bg-white bg-opacity-5 backdrop-blur-md rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-[#00D4FF]">
                Brandstof WebApp
              </h3>
              <img
                src="/images/fuel-app.webp"
                alt="Project preview"
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <p className="text-sm text-gray-300">
                Klik hier om de gedetailleerde projectbeschrijving te bekijken en
                meer te weten te komen over de webapplicatie voor brandstofbeheer.
              </p>
            </motion.div>
          </Link>
        </div>
      ) : (
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
      )}
    </div>
  </section>
);

export default Projects;
