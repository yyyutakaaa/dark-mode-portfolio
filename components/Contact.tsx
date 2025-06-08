"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Mail, Globe } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-primary"
        >
          Let's Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-text-secondary text-lg mb-10"
        >
          Have a project idea or just want to say hi? Send me a message below!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <a
            href="https://github.com/yyyutakaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-text-secondary hover:text-primary hover:border-primary transition-all duration-300"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="mailto:contact@mehdioul.dev"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-text-secondary hover:text-primary hover:border-primary transition-all duration-300"
          >
            <Mail size={20} /> Email
          </a>
          <a
            href="https://mehdioul.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-text-secondary hover:text-primary hover:border-primary transition-all duration-300"
          >
            <Globe size={20} /> Website
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 p-8 bg-bg-card rounded-2xl border border-primary/20"
        >
          <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>

          {status === "sent" && (
            <p className="text-green-400 mb-4">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 mb-4">
              Oops! Something went wrong. Try again later.
            </p>
          )}

          <form className="space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
    w-full px-4 py-3
    bg-[var(--bg-dark)] text-white placeholder:text-text-secondary
    rounded-lg border border-primary/20
    focus:border-primary outline-none transition-colors
  "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[var(--bg-dark)] text-white placeholder:text-text-secondary rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[var(--bg-dark)] text-white placeholder:text-text-secondary rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
