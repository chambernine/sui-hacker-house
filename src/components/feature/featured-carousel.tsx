"use client";

import { useEffect, useState } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Mock featured collections data
const featuredCollections = [
  {
    id: "1",
    name: "ByWassies",
    image: "/placeholder.svg?height=500&width=1000&text=ByWassies",
    floor: "1.25 SUI",
    items: "10,000",
    change: "+12.5%",
    creator: "0xc734...1d4a",
    verified: true,
  },
  {
    id: "2",
    name: "Sui Dreamers",
    image: "/placeholder.svg?height=500&width=1000&text=Sui+Dreamers",
    floor: "2.5 SUI",
    items: "5,000",
    change: "+8.3%",
    creator: "0xe982...3f7b",
    verified: true,
  },
  {
    id: "3",
    name: "Cosmic Creatures",
    image: "/placeholder.svg?height=500&width=1000&text=Cosmic+Creatures",
    floor: "0.8 SUI",
    items: "8,500",
    change: "+5.7%",
    creator: "0xa651...9c2d",
    verified: true,
  },
  {
    id: "4",
    name: "Digital Nomads",
    image: "/placeholder.svg?height=500&width=1000&text=Digital+Nomads",
    floor: "1.7 SUI",
    items: "3,200",
    change: "-2.1%",
    creator: "0xb423...7e5f",
    verified: false,
  },
];

export function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Handle client-side rendering for the carousel
  useEffect(() => {
    setIsClient(true);

    // Auto-advance the carousel every 5 seconds
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % featuredCollections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) =>
      current === 0 ? featuredCollections.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % featuredCollections.length);
  };

  if (!isClient) {
    return null;
  }

  const currentCollection = featuredCollections[activeIndex];

  // Variants for the slide animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // Variants for the content animations
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden rounded-lg border">
      <div className="relative aspect-[2/1] w-full overflow-hidden">
        {/* Carousel container with Framer Motion */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <img
              src={currentCollection.image || "/placeholder.svg"}
              alt={currentCollection.name}
              className="object-cover w-full h-full"
            />

            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="space-y-2"
              >
                <div className="flex items-center gap-2 mb-2">
                  {currentCollection.verified && (
                    <motion.div
                      className="bg-blue-500 rounded-full p-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                      }}
                    >
                      <Sparkles className="h-4 w-4 text-white" />
                    </motion.div>
                  )}
                  <span className="text-sm font-medium text-white/80">
                    {currentCollection.verified ? "Verified" : "Collection"}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-1">
                  {currentCollection.name}
                </h2>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="text-sm">
                    Floor: {currentCollection.floor}
                  </div>
                  <div className="text-sm">
                    Items: {currentCollection.items}
                  </div>
                  <div
                    className={cn(
                      "text-sm",
                      currentCollection.change.startsWith("+")
                        ? "positive-change"
                        : "negative-change"
                    )}
                  >
                    {currentCollection.change}
                  </div>
                </div>
                <div className="text-sm text-white/60 mt-1">
                  Created by: {currentCollection.creator}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left navigation button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </motion.div>

        {/* Right navigation button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-3 right-6 flex gap-2 z-10">
        {featuredCollections.map((_, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "w-2 h-2 rounded-full p-0 bg-white/30 hover:bg-white/50",
                activeIndex === index && "bg-white hover:bg-white"
              )}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
