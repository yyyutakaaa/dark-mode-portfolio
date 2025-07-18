"use client";

import { useEffect } from "react";

// Simple sound effect hooks
export function useSoundEffects() {
  useEffect(() => {
    // Create audio context for web audio API
    let audioContext: AudioContext | null = null;

    const initAudio = () => {
      try {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      } catch (e) {
        console.log("Web Audio API not supported");
      }
    };

    // Play beep sound
    const playBeep = (frequency: number = 800, duration: number = 100) => {
      if (!audioContext) return;
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration / 1000);
    };

    // Add hover sound to buttons
    const addHoverSounds = () => {
      const buttons = document.querySelectorAll('button, a[href^="#"]');
      
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          playBeep(600, 50);
        });
        
        button.addEventListener('click', () => {
          playBeep(800, 100);
        });
      });
    };

    // Initialize on first user interaction
    const handleFirstInteraction = () => {
      initAudio();
      addHoverSounds();
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);
}

export default function SoundEffects() {
  useSoundEffects();
  return null;
}
