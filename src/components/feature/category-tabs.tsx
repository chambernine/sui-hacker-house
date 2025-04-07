"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Gamepad2, Image, Music, Camera, Ticket, MoreHorizontal, Sparkles } from "lucide-react"

const categories = [
  { id: "all", name: "All", icon: <Sparkles className="h-4 w-4" /> },
  { id: "gaming", name: "Gaming", icon: <Gamepad2 className="h-4 w-4" /> },
  { id: "art", name: "Art", icon: <Image className="h-4 w-4" /> },
  { id: "pfps", name: "PFPs", icon: <Ticket className="h-4 w-4" /> },
  { id: "memberships", name: "Memberships", icon: <Ticket className="h-4 w-4" /> },
  { id: "music", name: "Music", icon: <Music className="h-4 w-4" /> },
  { id: "photography", name: "Photography", icon: <Camera className="h-4 w-4" /> },
]

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "ghost"}
          className="flex items-center gap-2 rounded-full"
          onClick={() => setActiveCategory(category.id)}
        >
          {category.icon}
          {category.name}
        </Button>
      ))}
      <Button variant="ghost" size="icon" className="rounded-full">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </div>
  )
}

