"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Mock collections data
const collections = [
  { id: "1", name: "Cosmic Voyagers", items: 100, floor: "1.2 SUI" },
  { id: "2", name: "Dreamscapes", items: 75, floor: "0.8 SUI" },
  { id: "3", name: "Neon Series", items: 120, floor: "2.1 SUI" },
  { id: "4", name: "Quantum Collection", items: 50, floor: "1.5 SUI" },
  { id: "5", name: "Ethereal Series", items: 85, floor: "1.7 SUI" },
  { id: "6", name: "Digital Artifacts", items: 60, floor: "0.9 SUI" },
]

export function CollectionFilters() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCollections = collections.filter((collection) =>
    collection.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Accordion type="single" collapsible defaultValue="collections">
      <AccordionItem value="collections">
        <AccordionTrigger>Collections</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search collections..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
              {filteredCollections.map((collection) => (
                <div key={collection.id} className="flex items-center space-x-2">
                  <input type="checkbox" id={`collection-${collection.id}`} className="rounded border-gray-300" />
                  <label htmlFor={`collection-${collection.id}`} className="text-sm flex-1 flex justify-between">
                    <span>{collection.name}</span>
                    <span className="text-muted-foreground">{collection.floor}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

