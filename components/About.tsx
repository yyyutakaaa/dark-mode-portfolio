"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CodeWindow from "./CodeWindow";

const technicalSkills = [
  "Python",
  "C# / .NET",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML/CSS",
  "SQL",
  "Git",
];

const networkSkills = [
  "Cisco CCNA",
  "IPv4/IPv6",
  "Subnetting",
  "VLAN",
  "Routing",
  "DHCP",
  "DNS",
  "Active Directory",
  "Network Security",
];

const courses = {
  specialization: [
    {
      name: "Network Infrastructure",
      topics: [
        "OSI Model",
        "Network Protocols",
        "Switching",
        "WLAN",
        "Security",
      ],
    },
    {
      name: "Windows Server",
      topics: [
        "Active Directory",
        "Group Policy",
        "PowerShell",
        "Hyper-V",
        "IIS",
      ],
    },
  ],
  core: [
    "Electronic Networks",
    "Programming Fundamentals",
    "Web Introduction",
    "Infrastructure Fundamentals",
    "OO Programming",
    "Database Programming",
    "Hackathon",
  ],
};

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
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">About Me</h2>
            <p className="text-text-secondary mb-4 text-lg">
              I'm an Electronics-ICT student at Odisee Ghent, specializing in
              Network Infrastructure. My academic journey combines deep
              technical knowledge in networking and infrastructure with a
              passion for software development and creative problem-solving.
            </p>
            <p className="text-text-secondary mb-6 text-lg">
              While my studies focus on network engineering and system
              administration, I pursue front-end development and programming as
              a hobby. I love building practical applications that solve real
              problems, from automation tools to web applications.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-text-primary">
              Current Studies
            </h3>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-lg font-medium text-primary mb-2">
                  Specialization Courses
                </h4>
                <div className="space-y-2">
                  {courses.specialization.map((course, index) => (
                    <div
                      key={index}
                      className="bg-bg-card p-3 rounded-lg border border-primary/20"
                    >
                      <p className="font-medium text-text-primary">
                        {course.name}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {course.topics.join(" • ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-text-primary">
              Technical Skills
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-text-secondary mb-2">
                  Programming & Development
                </p>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="px-3 py-1 bg-bg-card border border-primary/30 rounded-full text-sm hover:bg-primary hover:border-primary hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-2">
                  Networking & Infrastructure
                </p>
                <div className="flex flex-wrap gap-2">
                  {networkSkills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.05 + 0.5, duration: 0.3 }}
                      className="px-3 py-1 bg-bg-card border border-secondary/30 rounded-full text-sm hover:bg-secondary hover:border-secondary hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <CodeWindow />
            <div className="mt-6 bg-bg-card rounded-xl p-6 border border-primary/20">
              <h4 className="text-lg font-semibold mb-3 text-primary">
                Core Curriculum
              </h4>
              <div className="space-y-2">
                {courses.core.map((course, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    <span className="text-text-secondary text-sm">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
