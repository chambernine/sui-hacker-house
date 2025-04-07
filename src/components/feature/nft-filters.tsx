"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"
import { Filter } from "lucide-react"

interface NFTFiltersProps {
  expanded?: boolean
}

export function NFTFilters({ expanded = false }: NFTFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 10])

  if (expanded) {
    return (
      <div className="space-y-4">
        <Accordion type="single" collapsible defaultValue="price">
          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <Slider defaultValue={[0, 10]} max={10} step={0.1} value={priceRange} onValueChange={setPriceRange} />
                <div className="flex items-center justify-between">
                  <div className="text-sm">{priceRange[0]} SUI</div>
                  <div className="text-sm">{priceRange[1]} SUI</div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="status">
            <AccordionTrigger>Status</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="buy-now" className="rounded border-gray-300" />
                  <label htmlFor="buy-now" className="text-sm">
                    Buy Now
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="on-auction" className="rounded border-gray-300" />
                  <label htmlFor="on-auction" className="text-sm">
                    On Auction
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="new" className="rounded border-gray-300" />
                  <label htmlFor="new" className="text-sm">
                    New
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="collections">
            <AccordionTrigger>Collections</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="cosmic-voyagers" className="rounded border-gray-300" />
                  <label htmlFor="cosmic-voyagers" className="text-sm">
                    Cosmic Voyagers
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="dreamscapes" className="rounded border-gray-300" />
                  <label htmlFor="dreamscapes" className="text-sm">
                    Dreamscapes
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="neon-series" className="rounded border-gray-300" />
                  <label htmlFor="neon-series" className="text-sm">
                    Neon Series
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter NFTs</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="p-2">
          <p className="text-sm font-medium mb-2">Price Range</p>
          <Slider
            defaultValue={[0, 10]}
            max={10}
            step={0.1}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mb-2"
          />
          <div className="flex items-center justify-between">
            <div className="text-xs">{priceRange[0]} SUI</div>
            <div className="text-xs">{priceRange[1]} SUI</div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>Buy Now</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>On Auction</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>New</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

