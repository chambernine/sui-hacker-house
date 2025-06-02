# SUI NFT Marketplace

A modern, feature-rich NFT marketplace built on the SUI blockchain with a beautiful, responsive UI. This project was created for the SUI Hacker House event and showcases the integration of SUI blockchain technology with modern web development practices.

## 🚀 Features

### Core Marketplace Features

- **Browse & Search NFTs**: Discover NFTs with advanced filtering and search capabilities
- **Buy & Sell NFTs**: Seamless NFT transactions with SUI cryptocurrency
- **Wallet Integration**: Connect with popular SUI wallets (Sui Wallet, Ethos, Suiet)
- **Collection Management**: Organize and view NFTs by collections
- **Seller Dashboard**: Manage your NFT listings and view analytics

### Advanced Features

- **Auction System**: Enable auction listings with time-based bidding
- **Featured Collections**: Highlight popular and trending collections
- **Category Filtering**: Browse NFTs by categories and traits
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Theme switching for better user experience
- **Smooth Animations**: Framer Motion powered animations and transitions

### Technical Features

- **SUI zkLogin Integration**: Secure authentication with Google OAuth
- **Real-time Updates**: Dynamic NFT status and pricing updates
- **Modern UI Components**: Built with shadcn/ui and Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Blockchain**: SUI Network (@mysten/sui)
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Authentication**: SUI zkLogin with Google OAuth
- **Icons**: Lucide React
- **State Management**: React Hooks

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── marketplace/        # NFT marketplace page
│   ├── seller/            # Seller dashboard
│   └── login/             # Authentication page
├── components/
│   ├── feature/           # Custom feature components
│   │   ├── nft-card.tsx           # NFT display component
│   │   ├── buy-nft-drawer.tsx     # Purchase interface
│   │   ├── sell-nft-drawer.tsx    # Listing interface
│   │   ├── wallet-connect.tsx     # Wallet connection
│   │   ├── login.tsx              # SUI zkLogin
│   │   └── ...
│   └── ui/                # Reusable UI components
└── lib/                   # Utilities and configurations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- A SUI wallet (Sui Wallet, Ethos, or Suiet)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd sui-hacker-house
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Setup

The application is configured to work with SUI testnet by default. To use different networks or configure additional settings, update the SUI client configuration in the relevant components.

## 🔧 Key Components

### NFT Card (`nft-card.tsx`)

- Displays NFT information with image, name, price, and collection
- Includes buy/sell actions and metadata
- Supports both marketplace and seller views

### Buy NFT Drawer (`buy-nft-drawer.tsx`)

- Streamlined purchase flow with transaction details
- Real-time price display in SUI tokens
- Transaction processing with loading states

### Sell NFT Drawer (`sell-nft-drawer.tsx`)

- List NFTs for sale with custom pricing
- Auction functionality with duration settings
- Edit existing listings

### Wallet Connect (`wallet-connect.tsx`)

- Multi-wallet support (Sui Wallet, Ethos, Suiet)
- Connection status display
- Wallet address truncation

## 🎨 UI/UX Features

- **Modern Design**: Clean, minimalist interface following current design trends
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Micro-interactions and page transitions
- **Accessibility**: Built with accessibility best practices
- **Theme Support**: Dark and light mode with system preference detection

## 🔐 Authentication

The marketplace uses SUI's zkLogin for secure, Web2-style authentication:

- Google OAuth integration
- Cryptographic key generation
- Secure wallet address derivation
- Seamless user experience

## 📱 Pages

1. **Homepage** (`/`): Featured NFTs, collections, and marketplace overview
2. **Marketplace** (`/marketplace`): Browse all available NFTs with filtering
3. **Seller Dashboard** (`/seller`): Manage your NFT collection and listings
4. **Login** (`/login`): Authentication with SUI zkLogin

## 🤝 Contributing

This project was built for the SUI Hacker House. Feel free to fork, modify, and improve upon this codebase.

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Related Links

- [SUI Documentation](https://docs.sui.io/)
- [SUI Wallet](https://sui.io/wallet)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

---

# sui-hacker-house

_SUI Hacker House Project - NFT Marketplace_
