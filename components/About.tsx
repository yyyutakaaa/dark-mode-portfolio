"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CodeWindow from "./CodeWindow";

const skills = [
  "Python",
  "C# / .NET",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "ASP.NET Core",
  "Git",
  "API Development",
  "UI/UX Design",
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">Over Mij</h2>
            <p className="text-text-secondary mb-4 text-lg">
              Ik ben een gepassioneerde developer die houdt van het creëren van
              praktische en gebruiksvriendelijke applicaties. Van Python
              automation tools tot Windows desktop apps en web applicaties - ik
              geniet van diverse technische uitdagingen.
            </p>
            <p className="text-text-secondary mb-6 text-lg">
              Mijn recente projecten variëren van het automatiseren van
              Instagram DM&apos;s tot het bouwen van remote control systemen en
              PWA&apos;s. Ik geloof in clean code, goede UX en het oplossen van
              echte problemen.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-text-primary">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="px-4 py-2 bg-bg-card border border-primary/30 rounded-full text-sm hover:bg-primary hover:border-primary hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <CodeWindow />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
