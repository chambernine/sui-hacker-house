import { Button } from "@/components/ui/button";
import { NFTCard } from "@/components/feature/nft-card";
import { SearchBar } from "@/components/feature/search-bar";
import { NFTFilters } from "@/components/feature/nft-filters";
import { CollectionFilters } from "@/components/feature/collection-filters";
import { CategoryTabs } from "@/components/feature/category-tabs";
import { Grid, LayoutGrid, ListFilter } from "lucide-react";
import { AnimatedContainer } from "@/components/feature/framer-animations";

// Mock NFT data
const marketplaceNfts = [
  {
    id: "1",
    name: "Cosmic Voyager #42",
    description: "A journey through the digital cosmos",
    image: "/placeholder.svg?height=400&width=400",
    price: "2.5 SUI",
    creator: "0x1a2b...3c4d",
    collection: "Cosmic Voyagers",
  },
  {
    id: "2",
    name: "Digital Dreamscape #18",
    description: "Where reality meets imagination",
    image: "/placeholder.svg?height=400&width=400",
    price: "1.8 SUI",
    creator: "0x5e6f...7g8h",
    collection: "Dreamscapes",
  },
  {
    id: "3",
    name: "Neon Genesis #7",
    description: "The beginning of a new digital era",
    image: "/placeholder.svg?height=400&width=400",
    price: "3.2 SUI",
    creator: "0x9i0j...1k2l",
    collection: "Neon Series",
  },
  {
    id: "4",
    name: "Quantum Fragment #23",
    description: "A piece of the quantum realm",
    image: "/placeholder.svg?height=400&width=400",
    price: "1.5 SUI",
    creator: "0x3m4n...5o6p",
    collection: "Quantum Collection",
  },
  {
    id: "5",
    name: "Ethereal Essence #11",
    description: "Capturing the essence of the ethereal",
    image: "/placeholder.svg?height=400&width=400",
    price: "2.1 SUI",
    creator: "0x7q8r...9s0t",
    collection: "Ethereal Series",
  },
  {
    id: "6",
    name: "Digital Artifact #36",
    description: "A relic from the digital age",
    image: "/placeholder.svg?height=400&width=400",
    price: "1.9 SUI",
    creator: "0x1u2v...3w4x",
    collection: "Digital Artifacts",
  },
  {
    id: "7",
    name: "Cyber Punk #14",
    description: "A vision of the cyberpunk future",
    image: "/placeholder.svg?height=400&width=400",
    price: "2.7 SUI",
    creator: "0x5y6z...7a8b",
    collection: "Cyber Series",
  },
  {
    id: "8",
    name: "Abstract Thought #29",
    description: "A visualization of abstract thinking",
    image: "/placeholder.svg?height=400&width=400",
    price: "1.6 SUI",
    creator: "0x9c0d...1e2f",
    collection: "Abstract Collection",
  },
  {
    id: "9",
    name: "Digital Landscape #52",
    description: "A landscape from the digital world",
    image: "/placeholder.svg?height=400&width=400",
    price: "2.3 SUI",
    creator: "0x3g4h...5i6j",
    collection: "Digital Landscapes",
  },
];

export default function MarketplacePage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">NFT Marketplace</h1>
          <p className="text-muted-foreground">
            Discover and collect extraordinary NFTs
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 rounded-full">
            <ListFilter className="h-4 w-4" /> Sort By: Recently Added
          </Button>
          <div className="flex items-center border rounded-full overflow-hidden">
            <Button variant="ghost" size="icon" className="rounded-none">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-none">
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <CategoryTabs />

      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8 mt-6">
        <div className="space-y-6">
          <div className="bg-card rounded-lg border p-4">
            <h3 className="font-medium mb-4">Filters</h3>
            <div className="space-y-4">
              <SearchBar placeholder="Search NFTs..." className="w-full" />
              <CollectionFilters />
              <NFTFilters expanded={true} />
            </div>
          </div>
        </div>

        <div>
          <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketplaceNfts.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </AnimatedContainer>
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="rounded-full">
              Load More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
