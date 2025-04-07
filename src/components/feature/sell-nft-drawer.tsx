"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Info,
  Tag,
} from "lucide-react";

interface SellNFTDrawerProps {
  nft: {
    id: string;
    name: string;
    image: string;
    price?: string;
    collection: string;
    status?: string;
  };
  trigger?: React.ReactNode;
}

export function SellNFTDrawer({ nft, trigger }: SellNFTDrawerProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [price, setPrice] = useState(nft.price?.replace(" SUI", "") || "");
  const [enableAuction, setEnableAuction] = useState(false);

  const handleList = () => {
    setIsProcessing(true);
    // Simulate transaction processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 2000);
  };

  const resetState = () => {
    setIsProcessing(false);
    setIsComplete(false);
  };

  const isEditing = nft.status === "listed";

  return (
    <Drawer onOpenChange={(open) => !open && resetState()}>
      <DrawerTrigger asChild>
        {trigger || (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" variant={isEditing ? "outline" : "default"}>
              {isEditing ? "Edit Listing" : "List for Sale"}
            </Button>
          </motion.div>
        )}
      </DrawerTrigger>
      <DrawerContent className="max-w-md mx-auto">
        <DrawerHeader>
          <DrawerTitle>
            {isEditing ? "Edit Listing" : "List NFT for Sale"}
          </DrawerTitle>
          <DrawerDescription>
            {isEditing
              ? `Update your listing for ${nft.name}`
              : `Set a price and list ${nft.name} on the marketplace`}
          </DrawerDescription>
        </DrawerHeader>

        {!isComplete ? (
          <div className="px-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-24 h-24 rounded-lg overflow-hidden">
                <motion.img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div>
                <h3 className="font-medium">{nft.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {nft.collection}
                </p>
                {isEditing && (
                  <p className="text-sm font-medium mt-1">
                    Currently listed at: {nft.price}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="price">Price (SUI)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="price"
                    type="number"
                    placeholder="0.00"
                    className="pl-10"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auction">Enable Auction</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow buyers to place bids
                  </p>
                </div>
                <Switch
                  id="auction"
                  checked={enableAuction}
                  onCheckedChange={setEnableAuction}
                />
              </div>

              {enableAuction && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <Label htmlFor="duration">Auction Duration</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <select
                      id="duration"
                      className="w-full h-10 pl-10 pr-10 bg-background border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    >
                      <option value="1">1 day</option>
                      <option value="3">3 days</option>
                      <option value="7">7 days</option>
                      <option value="14">14 days</option>
                    </select>
                  </div>
                </motion.div>
              )}

              <div className="bg-muted/50 p-4 rounded-lg flex items-start gap-3">
                <Info className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium mb-1">Listing Information</p>
                  <p className="text-muted-foreground">
                    When you list your NFT, it will be visible to all users on
                    the marketplace. You can cancel your listing at any time. A
                    small network fee will be charged when listing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className="px-4 py-8 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-green-100 dark:bg-green-900/20 rounded-full p-3 mb-4"
            >
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">
              {isEditing ? "Listing Updated!" : "NFT Listed!"}
            </h3>
            <p className="text-center text-muted-foreground mb-4">
              {isEditing
                ? `You have successfully updated the listing for ${nft.name}.`
                : `You have successfully listed ${nft.name} for ${price} SUI.`}
            </p>
            <Button variant="outline" asChild className="gap-2">
              <a href="/seller">
                View My Listings <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        )}

        <DrawerFooter>
          {!isComplete && (
            <Button
              onClick={handleList}
              disabled={isProcessing || !price}
              className="gap-2"
            >
              {isProcessing ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                  />
                  Processing...
                </>
              ) : (
                <>
                  <Tag className="h-4 w-4" />
                  {isEditing ? "Update Listing" : "List for Sale"}
                </>
              )}
            </Button>
          )}
          <DrawerClose asChild>
            <Button variant="outline">{isComplete ? "Close" : "Cancel"}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
