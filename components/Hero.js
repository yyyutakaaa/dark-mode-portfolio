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
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <motion.h1
        className="hero-title text-5xl md:text-7xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Mehdi Oulad Khlie
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Network Engineering Student
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
