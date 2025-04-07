"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedContainer } from "@/components/feature/framer-animations";

export function FeaturedCollections() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Sui Collections</h2>
        <Button variant="ghost" className="gap-1">
          View all <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
      <AnimatedContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link href="/collections/1" className="block">
            <div className="relative overflow-hidden rounded-lg border hover:shadow-md transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src="/placeholder.svg?height=300&width=400&text=Collection+1"
                  alt="Collection 1"
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="font-semibold text-white">Sui Dreamers</h3>
                <p className="text-sm text-white/80">Floor: 1.2 SUI</p>
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link href="/collections/2" className="block">
            <div className="relative overflow-hidden rounded-lg border hover:shadow-md transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src="/placeholder.svg?height=300&width=400&text=Collection+2"
                  alt="Collection 2"
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="font-semibold text-white">Forgotten Universe</h3>
                <p className="text-sm text-white/80">Floor: 2.5 SUI</p>
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link href="/collections/3" className="block">
            <div className="relative overflow-hidden rounded-lg border hover:shadow-md transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src="/placeholder.svg?height=300&width=400&text=Collection+3"
                  alt="Collection 3"
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="font-semibold text-white">Cosmic Creatures</h3>
                <p className="text-sm text-white/80">Floor: 0.8 SUI</p>
              </div>
            </div>
          </Link>
        </motion.div>
      </AnimatedContainer>
    </div>
  );
}
