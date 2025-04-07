import { Button } from "@/components/ui/button";
import { NFTCard } from "@/components/feature/nft-card";
import { ThemeToggle } from "@/components/feature/theme-toggle";
import { WalletConnect } from "@/components/feature/wallet-connect";
import { SearchBar } from "@/components/feature/search-bar";
import { CategoryTabs } from "@/components/feature/category-tabs";
import { CollectionTable } from "@/components/feature/collection-table";
import { FeaturedCollections } from "@/components/feature/featured-collections";
import { FeaturedCarousel } from "@/components/feature/featured-carousel";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { AnimatedContainer } from "@/components/feature/framer-animations";

// Mock NFT data
const nfts = [
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
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 px-8 items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SuiNFT</span>
            </div>
            <SearchBar className="md:w-[300px]" />
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Explore
              </Link>
              <Link
                href="/collections"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Collections
              </Link>
              <Link
                href="/activity"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Activity
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <WalletConnect />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto mt-4">
        <CategoryTabs />
      </div>

      <main className="flex-1 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 py-6">
          <div className="space-y-8">
            <FeaturedCarousel />
            <FeaturedCollections />

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Trending NFTs</h2>
                <Button variant="ghost" className="gap-1">
                  View all <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
              <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {nfts.map((nft) => (
                  <NFTCard key={nft.id} nft={nft} />
                ))}
              </AnimatedContainer>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Top Collections</h2>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                1d <ChevronDown className="h-4 w-4" />
              </div>
            </div>
            <CollectionTable />
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-semibold">SuiNFT</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SuiNFT. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
