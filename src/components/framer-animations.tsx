"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, type Variant } from "framer-motion";
import Image from "next/image";

// Custom hook to detect when an element is in view
export function useScrollInView(threshold = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, isInView, controls };
}

// Animation variants
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const staggerChildrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animated components
interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
}

export function AnimatedImage({
  src,
  alt,
  className,
  variants = fadeInVariants,
}: AnimatedImageProps) {
  const { ref, controls } = useScrollInView();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="overflow-hidden"
    >
      <Image src={src || "/placeholder.svg"} alt={alt} className={className} />
    </motion.div>
  );
}

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
}

export function AnimatedCard({
  children,
  className,
  variants = scaleInVariants,
}: AnimatedCardProps) {
  const { ref, controls } = useScrollInView();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
}

export function AnimatedContainer({
  children,
  className,
  variants = staggerChildrenVariants,
}: AnimatedContainerProps) {
  const { ref, controls } = useScrollInView(0.05);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
