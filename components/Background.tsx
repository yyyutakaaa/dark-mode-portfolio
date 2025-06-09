"use client";

import { useEffect, useRef, useState } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 3 + 1;
        this.density = Math.random() * 30 + 1;
        this.color = Math.random() > 0.5 ? "139, 92, 246" : "16, 185, 129"; // primary or secondary color
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.size / 4})`;
        ctx.fill();
      }

      update() {
        // Calculate distance from mouse
        const dx = mousePosition.current.x - this.x;
        const dy = mousePosition.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          // Calculate force direction (away from mouse)
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          const forceX = Math.cos(angle) * force * this.density;
          const forceY = Math.sin(angle) * force * this.density;

          // Apply force (push particles away from mouse)
          this.x -= forceX;
          this.y -= forceY;
        } else {
          // Return to base position
          if (this.x !== this.baseX) {
            const dx = this.baseX - this.x;
            this.x += dx * 0.05;
          }
          if (this.y !== this.baseY) {
            const dy = this.baseY - this.y;
            this.y += dy * 0.05;
          }
        }
      }
    }

    // Create particle grid
    const particles: Particle[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push(new Particle(x, y));
    }

    // Create connection lines between nearby particles
    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            if (!ctx) return;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${
              0.1 * (1 - distance / 120)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Connect to mouse if close enough
        const mouseDistance = Math.sqrt(
          Math.pow(particles[i].x - mousePosition.current.x, 2) +
            Math.pow(particles[i].y - mousePosition.current.y, 2)
        );

        if (mouseDistance < 100) {
          if (!ctx) return;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mousePosition.current.x, mousePosition.current.y);
          ctx.strokeStyle = `rgba(16, 185, 129, ${
            0.3 * (1 - mouseDistance / 100)
          })`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      connectParticles();

      requestAnimationFrame(animate);
    }

    animate();

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      // Update gradient position based on mouse
      setGradientPosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Handle touch for mobile
    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mousePosition.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };

      setGradientPosition({
        x: (touch.clientX / window.innerWidth) * 100,
        y: (touch.clientY / window.innerHeight) * 100,
      });
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          zIndex: 0,
          background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
        }}
      />
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"
          style={{
            top: `${gradientPosition.y - 20}%`,
            right: `${100 - gradientPosition.x - 20}%`,
            transform: "translate(50%, -50%)",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-reverse"
          style={{
            bottom: `${100 - gradientPosition.y - 20}%`,
            left: `${gradientPosition.x - 20}%`,
            transform: "translate(-50%, 50%)",
          }}
        />
      </div>
    </>
  );
}
