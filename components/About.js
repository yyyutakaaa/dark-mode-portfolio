import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-full overflow-hidden w-56 h-56 mb-8">
          <img
            src="/images/pfp-original.jpeg"
            alt="About Me"
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <motion.p
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I am a 19-year-old Electronics-ICT student at Odisee Ghent,
          specializing in Network Infrastructure. My passion lies in designing,
          managing, and securing networks, and I aspire to become a network
          engineer. Currently, I am deepening my knowledge in routing,
          switching, network security, and cloud infrastructure to build a
          strong foundation for my future career.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          I am driven, eager to learn, and always looking for new challenges to
          enhance my technical skills and stay ahead in the ever-evolving world
          of networking.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
