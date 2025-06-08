"use client";

import { useState, useEffect } from "react";

const codeLines = [
  { text: "class", type: "keyword" },
  { text: " Developer", type: "function" },
  { text: ":", type: "plain" },
  { text: "\n    ", type: "plain" },
  { text: "def", type: "keyword" },
  { text: " __init__", type: "function" },
  { text: "(self):", type: "plain" },
  { text: "\n        self.name = ", type: "plain" },
  { text: '"Mehdi Oulad"', type: "string" },
  { text: "\n        self.role = ", type: "plain" },
  { text: '"Full-Stack Developer"', type: "string" },
  { text: "\n        self.languages = [", type: "plain" },
  { text: '"Python"', type: "string" },
  { text: ", ", type: "plain" },
  { text: '"C#"', type: "string" },
  { text: ", ", type: "plain" },
  { text: '"JavaScript"', type: "string" },
  { text: "]\n        self.current_focus = ", type: "plain" },
  { text: '"Building cool stuff"', type: "string" },
  { text: "\n        self.fun_fact = ", type: "plain" },
  { text: '"I automate everything I can"', type: "string" },
];

export default function CodeWindow() {
  const [displayedCode, setDisplayedCode] = useState<typeof codeLines>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayedCode((prev) => [...prev, codeLines[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const getColorClass = (type: string) => {
    switch (type) {
      case "keyword":
        return "text-primary";
      case "function":
        return "text-accent";
      case "string":
        return "text-secondary";
      default:
        return "text-text-secondary";
    }
  };

  return (
    <div className="bg-bg-card rounded-xl p-6 shadow-xl border border-primary/20">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <pre className="font-mono text-sm">
        <code>
          {displayedCode.map((line, index) => (
            <span key={index} className={getColorClass(line.type)}>
              {line.text}
            </span>
          ))}
          {currentIndex < codeLines.length && (
            <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
          )}
        </code>
      </pre>
    </div>
  );
}
