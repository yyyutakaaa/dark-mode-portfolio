import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-8">
          <img
            src="/images/avatar.jpg"
            alt="Over mij"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Over mij</h2>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Ik ben een creatieve webdesigner en front-end developer met passie
            voor futuristisch design en interactieve animaties.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Persoonlijk ben ik kritisch op trends en ik geloof dat eenvoud en
            consistentie in design de sleutel zijn tot een tijdloze
            gebruikerservaring.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
