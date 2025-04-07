"use client";

import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedContainer } from "@/components/framer-animations";

// Mock collection data
const collections = [
  {
    id: "1",
    name: "Steady Teddys",
    image: "/placeholder.svg?height=40&width=40&text=ST",
    floor: "$746.65",
    change: "0%",
    verified: true,
  },
  {
    id: "2",
    name: "CryptoPunks",
    image: "/placeholder.svg?height=40&width=40&text=CP",
    floor: "$79.2K",
    change: "0%",
    verified: true,
  },
  {
    id: "3",
    name: "Courtyard.io",
    image: "/placeholder.svg?height=40&width=40&text=CY",
    floor: "$8.63",
    change: "+4.5%",
    verified: true,
  },
  {
    id: "4",
    name: "Ronkeverse",
    image: "/placeholder.svg?height=40&width=40&text=RV",
    floor: "$93.25",
    change: "+14.1%",
    verified: true,
  },
  {
    id: "5",
    name: "Pudgy Penguins",
    image: "/placeholder.svg?height=40&width=40&text=PP",
    floor: "$18.7K",
    change: "-1.3%",
    verified: true,
  },
  {
    id: "6",
    name: "Doodles",
    image: "/placeholder.svg?height=40&width=40&text=DD",
    floor: "$5,671.20",
    change: "0%",
    verified: true,
  },
  {
    id: "7",
    name: "Mutant Ape Yacht",
    image: "/placeholder.svg?height=40&width=40&text=MA",
    floor: "$4,646.33",
    change: "+2%",
    verified: true,
  },
  {
    id: "8",
    name: "Axie",
    image: "/placeholder.svg?height=40&width=40&text=AX",
    floor: "$3.48",
    change: "+20%",
    verified: true,
  },
  {
    id: "9",
    name: "Milady Maker",
    image: "/placeholder.svg?height=40&width=40&text=MM",
    floor: "$5,617.26",
    change: "-5%",
    verified: true,
  },
  {
    id: "10",
    name: "Morph Black",
    image: "/placeholder.svg?height=40&width=40&text=MB",
    floor: "$2,044.16",
    change: "+35.7%",
    verified: true,
  },
];

export function CollectionTable() {
  return (
    <AnimatedContainer className="space-y-2">
      {collections.map((collection, index) => (
        <motion.div
          key={collection.id}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex items-center justify-between py-2 hover:bg-muted/50 rounded-lg px-2 cursor-pointer"
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        >
          <div className="flex items-center gap-3">
            <div className="text-sm text-muted-foreground w-5">{index + 1}</div>
            <div className="relative">
              <Avatar className="h-8 w-8 rounded-md">
                <motion.img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              </Avatar>
              {collection.verified && (
                <Badge className="absolute -bottom-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-blue-500 border-0">
                  <Check className="h-3 w-3 text-white" />
                </Badge>
              )}
            </div>
            <div className="text-sm font-medium">{collection.name}</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-sm font-medium">{collection.floor}</div>
            <div className={`text-xs ${getChangeClass(collection.change)}`}>
              {collection.change}
            </div>
          </div>
        </motion.div>
      ))}
    </AnimatedContainer>
  );
}

function getChangeClass(change: string): string {
  if (change.startsWith("+")) return "positive-change";
  if (change.startsWith("-")) return "negative-change";
  return "neutral-change";
}
