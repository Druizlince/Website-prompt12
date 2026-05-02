"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stagger } from "@/lib/animations";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0.1,
  staggerDelay = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger(delay, staggerDelay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}
