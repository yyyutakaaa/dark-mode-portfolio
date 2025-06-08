"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Mail, Globe } from "lucide-react";

const contactLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yyyutakaaa",
    icon: Github,
  },
  {
    name: "Email",
    url: "mailto:contact@mehdioul.dev",
    icon: Mail,
  },
  {
    name: "Website",
    url: "https://mehdioul.dev",
    icon: Globe,
  },
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-primary"
        >
          Let's Connect!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-text-secondary text-lg mb-10"
        >
          Have an interesting project or just want to chat about tech,
          networking, or development? I'm always open to new opportunities and
          collaborations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-text-secondary hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Icon size={20} />
                <span>{link.name}</span>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 p-8 bg-bg-card rounded-2xl border border-primary/20"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gradient">
            Send me a message
          </h3>
          <p className="text-text-secondary mb-6">
            Fill out the form and I'll get back to you as soon as possible!
          </p>
          <form className="space-y-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-bg-dark rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 bg-bg-dark rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full px-4 py-3 bg-bg-dark rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
