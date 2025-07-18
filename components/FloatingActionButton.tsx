"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Coffee, Code, Gamepad2, Wifi, X } from "lucide-react";

const easterEggs = [
  { text: "// TODO: Take over the world with code", color: "text-primary" },
  { text: "Powered by caffeine and curiosity", color: "text-amber-400" },
  { text: "Level 20 Network Engineer", color: "text-green-400" },
  { text: "Network packets are my love language", color: "text-blue-400" },
  { text: "Automation wizard at your service", color: "text-yellow-400" },
  { text: "Building the future, one script at a time", color: "text-purple-400" },
  { text: "I debug networks AND code", color: "text-orange-400" },
  { text: "Making technology work for humans", color: "text-pink-400" },
];

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentEgg, setCurrentEgg] = useState(0);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setCurrentEgg(Math.floor(Math.random() * easterEggs.length));
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        aria-label="Fun surprise button"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} className="text-white" /> : <Zap size={24} className="text-white" />}
        </motion.div>
      </motion.button>

      {/* Easter Egg Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="fixed bottom-24 right-6 bg-bg-card border border-primary/30 rounded-lg p-4 shadow-xl backdrop-blur-sm max-w-xs z-50"
          >
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`w-3 h-3 rounded-full ${easterEggs[currentEgg].color.replace('text-', 'bg-')}`}
              />
              <p className="text-sm text-text-primary font-medium">
                {easterEggs[currentEgg].text}
              </p>
            </div>
            
            <motion.button
              className="mt-3 text-xs text-primary hover:text-secondary transition-colors"
              onClick={() => setCurrentEgg((prev) => (prev + 1) % easterEggs.length)}
              whileHover={{ scale: 1.05 }}
            >
              Click for another fun fact! 🎲
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
