"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, MoreHorizontal, Share2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/framer-animations";

interface NFTCardProps {
  nft: {
    id: string;
    name: string;
    description: string;
    image: string;
    price?: string;
    creator: string;
    collection: string;
    status?: string;
  };
  sellerView?: boolean;
}

export function NFTCard({ nft, sellerView = false }: NFTCardProps) {
  return (
    <AnimatedCard>
      <Card className="overflow-hidden transition-all hover:shadow-md border-muted bg-card">
        <CardHeader className="p-0">
          <Link href={`/nft/${nft.id}`}>
            <div className="relative aspect-square overflow-hidden">
              <motion.img
                src={nft.image || "/placeholder.svg"}
                alt={nft.name}
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              {sellerView && nft.status && (
                <Badge
                  className="absolute top-3 left-3"
                  variant={nft.status === "listed" ? "default" : "outline"}
                >
                  {nft.status === "listed" ? "Listed" : "Not Listed"}
                </Badge>
              )}
            </div>
          </Link>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Link
              href={`/collection/${nft.collection}`}
              className="text-xs text-muted-foreground hover:text-primary"
            >
              {nft.collection}
            </Link>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Heart className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Share2 className="h-4 w-4 mr-2" /> Share
                  </DropdownMenuItem>
                  {sellerView && (
                    <>
                      {nft.status === "listed" ? (
                        <DropdownMenuItem>Unlist NFT</DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem>List for Sale</DropdownMenuItem>
                      )}
                      <DropdownMenuItem>Transfer NFT</DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Link href={`/nft/${nft.id}`}>
            <h3 className="font-semibold truncate hover:text-primary transition-colors">
              {nft.name}
            </h3>
          </Link>
          <div className="flex items-center justify-between mt-2">
            <div className="text-xs text-muted-foreground">
              Creator: <span className="font-medium">{nft.creator}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          {nft.price ? (
            <div>
              <p className="text-xs text-muted-foreground">Price</p>
              <p className="font-semibold">{nft.price}</p>
            </div>
          ) : (
            <div>
              <p className="text-xs text-muted-foreground">Not for sale</p>
            </div>
          )}
          {!sellerView && nft.price && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm">Buy Now</Button>
            </motion.div>
          )}
          {sellerView && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant={nft.status === "listed" ? "outline" : "default"}
              >
                {nft.status === "listed" ? "Edit Listing" : "List for Sale"}
              </Button>
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </AnimatedCard>
  );
}
