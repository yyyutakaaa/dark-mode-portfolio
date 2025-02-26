import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-56 h-56 aspect-square rounded-full overflow-hidden mb-8 md:mb-0 md:mr-8 flex items-center justify-center">
          <img
            src="/images/pfp-original.jpeg"
            alt="About Me"
            className="object-cover min-w-full min-h-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I am a 19-year-old Electronics-ICT student at Odisee Ghent,
            specializing in Network Infrastructure. My passion lies in
            designing, managing, and securing networks, and I aspire to become a
            network engineer. Currently, I am deepening my knowledge in routing,
            switching, network security, and cloud infrastructure to build a
            strong foundation for my future career.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            I am driven, eager to learn, and always looking for new challenges
            to enhance my technical skills and stay ahead in the ever-evolving
            world of networking.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
