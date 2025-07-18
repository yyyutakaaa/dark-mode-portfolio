"use client";

import { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
  id: number;
}

export default function CursorTrail() {
  const [cursorTrail, setCursorTrail] = useState<CursorPosition[]>([]);

  useEffect(() => {
    let mouseTrailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: mouseTrailId++
      };

      setCursorTrail(prev => {
        const newTrail_array = [...prev, newTrail];
        // Keep only last 15 trail points
        return newTrail_array.slice(-15);
      });
    };

    // Clear trail when mouse leaves window
    const handleMouseLeave = () => {
      setCursorTrail([]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {cursorTrail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            background: `radial-gradient(circle, rgba(139, 92, 246, ${0.8 - index * 0.05}) 0%, transparent 70%)`,
            animation: `fade-out 1s ease-out forwards`,
            animationDelay: `${index * 0.05}s`
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes fade-out {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.3);
          }
        }
      `}</style>
    </div>
  );
}
