"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Wallet } from "lucide-react"

export function WalletConnect() {
  const [connected, setConnected] = useState(false)

  const handleConnect = () => {
    // In a real app, this would connect to the Sui wallet
    setConnected(true)
  }

  const handleDisconnect = () => {
    setConnected(false)
  }

  if (connected) {
    return (
      <Button variant="outline" onClick={handleDisconnect} className="gap-2 rounded-full">
        <Wallet className="h-4 w-4" />
        0x1a2b...3c4d
      </Button>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 rounded-full">
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription>Connect your Sui wallet to interact with the marketplace</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button onClick={handleConnect} className="w-full gap-2 justify-start p-6">
            <img src="/placeholder.svg?height=32&width=32&text=Sui" alt="Sui Wallet" className="h-8 w-8" />
            <div className="text-left">
              <div className="font-medium">Sui Wallet</div>
              <div className="text-xs text-muted-foreground">Connect to your Sui Wallet</div>
            </div>
          </Button>
          <Button variant="outline" className="w-full gap-2 justify-start p-6">
            <img src="/placeholder.svg?height=32&width=32&text=Ethos" alt="Ethos Wallet" className="h-8 w-8" />
            <div className="text-left">
              <div className="font-medium">Ethos Wallet</div>
              <div className="text-xs text-muted-foreground">Connect to your Ethos Wallet</div>
            </div>
          </Button>
          <Button variant="outline" className="w-full gap-2 justify-start p-6">
            <img src="/placeholder.svg?height=32&width=32&text=Suiet" alt="Suiet Wallet" className="h-8 w-8" />
            <div className="text-left">
              <div className="font-medium">Suiet Wallet</div>
              <div className="text-xs text-muted-foreground">Connect to your Suiet Wallet</div>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

