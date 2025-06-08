"use client";

import { useState, useEffect } from "react";

const codeLines = [
  { text: "class", type: "keyword" },
  { text: " Student", type: "function" },
  { text: ":", type: "plain" },
  { text: "\n    ", type: "plain" },
  { text: "def", type: "keyword" },
  { text: " __init__", type: "function" },
  { text: "(self):", type: "plain" },
  { text: "\n        self.name = ", type: "plain" },
  { text: '"Mehdi Oulad"', type: "string" },
  { text: "\n        self.school = ", type: "plain" },
  { text: '"Odisee Ghent"', type: "string" },
  { text: "\n        self.major = ", type: "plain" },
  { text: '"Electronics-ICT"', type: "string" },
  { text: "\n        self.specialization = ", type: "plain" },
  { text: '"Network Infrastructure"', type: "string" },
  { text: "\n        self.hobbies = [", type: "plain" },
  { text: '"Front-end Dev"', type: "string" },
  { text: ", ", type: "plain" },
  { text: '"Automation"', type: "string" },
  { text: ", ", type: "plain" },
  { text: '"Building Apps"', type: "string" },
  { text: "]\n        self.motto = ", type: "plain" },
  { text: '"Learning by doing"', type: "string" },
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
