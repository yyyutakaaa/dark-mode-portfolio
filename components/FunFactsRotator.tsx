"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const funFacts = [
  "Built 4+ hobby projects with 500+ downloads",
  "Loves gaming and automation in spare time", 
  "CCNA certification in progress",
  "Can automate almost anything with Python",
  "Builds both networks AND websites",
  "Prefers dark mode for everything",
  "Learning new tech every week",
  "Goal: Make technology solve real problems"
];

export default function FunFactsRotator() {
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 h-12 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentFact}
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: -90 }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-base text-text-secondary bg-bg-card/50 px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm"
        >
          {funFacts[currentFact]}
        </motion.div>
      </AnimatePresence>
      
      {/* Progress dots */}
      <div className="absolute bottom-0 flex gap-1">
        {funFacts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentFact(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentFact 
                ? 'bg-primary w-6' 
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
            aria-label={`Show fun fact ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
