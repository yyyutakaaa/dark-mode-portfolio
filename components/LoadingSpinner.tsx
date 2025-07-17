"use client";

import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export default function LoadingSpinner({ 
  size = "md", 
  text,
  className = "" 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-primary/30 border-t-primary rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-text-secondary ${textSizeClasses[size]}`}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

// Skeleton component for loading placeholders
interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className = "", width = "100%", height = "1rem" }: SkeletonProps) {
  return (
    <motion.div
      className={`bg-bg-card-hover rounded animate-pulse ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

// Project Card Skeleton
export function ProjectCardSkeleton() {
  return (
    <div className="h-full bg-bg-card rounded-xl overflow-hidden border border-primary/20 p-6">
      <div className="flex items-start justify-between mb-4">
        <Skeleton width="3rem" height="3rem" className="rounded" />
        <Skeleton width="4rem" height="1.5rem" className="rounded-full" />
      </div>
      
      <Skeleton width="60%" height="1.5rem" className="mb-2" />
      <Skeleton width="100%" height="4rem" className="mb-4" />
      
      <div className="flex flex-wrap gap-2 mb-4">
        <Skeleton width="4rem" height="1.5rem" className="rounded-full" />
        <Skeleton width="5rem" height="1.5rem" className="rounded-full" />
        <Skeleton width="3rem" height="1.5rem" className="rounded-full" />
      </div>
      
      <div className="flex gap-3">
        <Skeleton width="100%" height="2.5rem" className="rounded-lg" />
        <Skeleton width="100%" height="2.5rem" className="rounded-lg" />
      </div>
    </div>
  );
}
