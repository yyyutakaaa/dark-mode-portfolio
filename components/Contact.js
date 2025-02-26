import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuleer hier een API-call of e-mailverzending
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-[#161B22]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        {submitted ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl"
          >
            Bedankt voor je bericht!
          </motion.p>
        ) : (
          <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Naam"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#0D1117] border border-gray-600 rounded focus:outline-none focus:border-[#00D4FF]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#0D1117] border border-gray-600 rounded focus:outline-none focus:border-[#00D4FF]"
              required
            />
            <textarea
              name="message"
              placeholder="Bericht"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#0D1117] border border-gray-600 rounded focus:outline-none focus:border-[#00D4FF]"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#FF007A] text-[#0D1117] rounded hover:bg-[#FF007A] transition-colors duration-300"
            >
              Verzend
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
