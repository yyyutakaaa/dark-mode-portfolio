"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Background from "../components/Background";
import CursorTrail from "../components/CursorTrail";
import FloatingActionButton from "../components/FloatingActionButton";
import SoundEffects from "../components/SoundEffects";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="relative min-h-screen bg-bg-dark">
      <Background />
      <CursorTrail />
      <SoundEffects />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <FloatingActionButton />
    </main>
  );
}
