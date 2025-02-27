import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center 
                 bg-[radial-gradient(circle,rgba(13,17,23,1) 0%,rgba(22,27,34,1) 100%)]"
    >
      <motion.h1
        className="hero-title text-5xl md:text-7xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hello, I'm Mehdi{" "}
        <span className="text-4xl md:text-5xl font-normal">Oulad Khlie</span>
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        a Network Engineering Student
      </motion.p>
      {/* Extra regeltje voor meer context */}
      <motion.p
        className="text-md md:text-lg mb-8 text-gray-400 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        I specialize in designing, securing, and optimizing modern networks.
      </motion.p>
      <motion.a
        href="#projects"
        className="px-6 py-3 border border-[#00D4FF] text-[#00D4FF] rounded-full hover:bg-[#00D4FF] hover:text-[#0D1117] transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        View my work
      </motion.a>
    </section>
  );
};

export default Hero;
