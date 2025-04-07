"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { ArrowRight, CheckCircle, Info, Wallet } from "lucide-react";

interface BuyNFTDrawerProps {
  nft: {
    id: string;
    name: string;
    image: string;
    price?: string;
    collection: string;
  };
  trigger?: React.ReactNode;
}

export function BuyNFTDrawer({ nft, trigger }: BuyNFTDrawerProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleBuy = () => {
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

  return (
    <Drawer onOpenChange={(open) => !open && resetState()}>
      <DrawerTrigger asChild>
        {trigger || (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm">Buy Now</Button>
          </motion.div>
        )}
      </DrawerTrigger>
      <DrawerContent className="max-w-md mx-auto">
        <DrawerHeader>
          <DrawerTitle>Buy NFT</DrawerTitle>
          <DrawerDescription>
            Complete your purchase of {nft.name}
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
                <p className="text-lg font-bold mt-1">{nft.price}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-muted/50 p-4 rounded-lg flex items-start gap-3">
                <Info className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium mb-1">Transaction Information</p>
                  <p className="text-muted-foreground">
                    You are about to purchase this NFT for {nft.price}. This
                    transaction will be processed on the Sui blockchain and
                    cannot be reversed.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Item Price</span>
                  <span className="font-medium">{nft.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Network Fee</span>
                  <span className="font-medium">~0.001 SUI</span>
                </div>
                <div className="flex justify-between text-sm font-medium pt-2 border-t">
                  <span>Total</span>
                  <span>{nft.price?.replace("SUI", "")} SUI</span>
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
            <h3 className="text-xl font-bold mb-2">Purchase Complete!</h3>
            <p className="text-center text-muted-foreground mb-4">
              You have successfully purchased {nft.name}. The NFT has been
              transferred to your wallet.
            </p>
            <Button variant="outline" asChild className="gap-2">
              <a href="/my-collection">
                View in My Collection <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        )}

        <DrawerFooter>
          {!isComplete && (
            <Button
              onClick={handleBuy}
              disabled={isProcessing}
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
                  <Wallet className="h-4 w-4" /> Confirm Purchase
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
