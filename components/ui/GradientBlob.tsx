"use client";

import { motion } from "framer-motion";

interface GradientBlobProps {
  className?: string;
}

export default function GradientBlob({ className }: GradientBlobProps) {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-3xl ${className}`}
    />
  );
}
