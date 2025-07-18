"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  emoji?: string;
}

interface ConfettiProps {
  trigger: boolean;
  onComplete?: () => void;
}

const colors = ['#8b5cf6', '#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#ec4899'];
const emojis = [];

export default function Confetti({ trigger, onComplete }: ConfettiProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!trigger) return;

    const pieces: ConfettiPiece[] = [];
    
    // Generate confetti pieces
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        emoji: Math.random() > 0.9 ? emojis[Math.floor(Math.random() * emojis.length)] : undefined
      });
    }

    setConfetti(pieces);

    // Clear confetti after animation
    const timer = setTimeout(() => {
      setConfetti([]);
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [trigger, onComplete]);

  if (!confetti.length) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ 
            x: piece.x, 
            y: piece.y,
            rotate: piece.rotation,
            opacity: 1
          }}
          animate={{ 
            y: window.innerHeight + 100,
            x: piece.x + (Math.random() - 0.5) * 200,
            rotate: piece.rotation + 720,
            opacity: 0
          }}
          transition={{ 
            duration: 3,
            ease: "easeOut"
          }}
          className="absolute"
          style={{
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.emoji ? 'transparent' : piece.color,
            fontSize: piece.emoji ? piece.size : undefined
          }}
        >
          {piece.emoji || ''}
        </motion.div>
      ))}
    </div>
  );
}
