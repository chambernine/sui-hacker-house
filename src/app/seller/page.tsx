"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NFTCard } from "@/components/nft-card";
import { WalletConnect } from "@/components/wallet-connect";
import { SearchBar } from "@/components/search-bar";
import { NFTFilters } from "@/components/nft-filters";
import { Plus, Upload, Wallet } from "lucide-react";
import { AnimatedContainer } from "@/components/framer-animations";
import { motion } from "framer-motion";

// Mock NFT data for seller
const sellerNfts = [
  {
    id: "1",
    name: "Cosmic Voyager #42",
    description: "A journey through the digital cosmos",
    image: "/placeholder.svg?height=400&width=400",
    price: "2.5 SUI",
    creator: "0x1a2b...3c4d",
    collection: "Cosmic Voyagers",
    status: "listed",
  },
  {
    id: "2",
    name: "Digital Dreamscape #18",
    description: "Where reality meets imagination",
    image: "/placeholder.svg?height=400&width=400",
    price: "1.8 SUI",
    creator: "0x5e6f...7g8h",
    collection: "Dreamscapes",
    status: "listed",
  },
  {
    id: "3",
    name: "Neon Genesis #7",
    description: "The beginning of a new digital era",
    image: "/placeholder.svg?height=400&width=400",
    creator: "0x9i0j...1k2l",
    collection: "Neon Series",
    status: "not_listed",
  },
];

export default function SellerPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Seller Dashboard</h1>
          <p className="text-muted-foreground">Manage your NFTs and listings</p>
        </div>
        <div className="flex items-center gap-3">
          <WalletConnect />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> Create NFT
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
        <div className="space-y-6">
          <motion.div
            className="bg-card rounded-lg border p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Wallet className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Connected Wallet</p>
                <p className="text-xs text-muted-foreground">0x1a2b...3c4d</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Balance:</span>
                <span className="text-sm font-medium">42.5 SUI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">NFTs Owned:</span>
                <span className="text-sm font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">NFTs Listed:</span>
                <span className="text-sm font-medium">8</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-card rounded-lg border p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-medium mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <Upload className="h-4 w-4" /> Bulk Upload
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <Plus className="h-4 w-4" /> Create Collection
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All NFTs</TabsTrigger>
                <TabsTrigger value="listed">Listed</TabsTrigger>
                <TabsTrigger value="not_listed">Not Listed</TabsTrigger>
                <TabsTrigger value="created">Created</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <SearchBar
                placeholder="Search your NFTs..."
                className="w-full sm:w-auto"
              />
              <NFTFilters />
            </div>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsContent value="all" className="mt-0">
              <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sellerNfts.map((nft) => (
                  <NFTCard key={nft.id} nft={nft} sellerView={true} />
                ))}
              </AnimatedContainer>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
