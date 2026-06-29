# OffiMesh

**Offline-First Payment Infrastructure for Africa**

OffiMesh enables secure digital payments without internet using QR, Bluetooth, and offline communication. Transactions automatically settle through Nomba once connectivity returns.

---

## Overview

OffiMesh is a revolutionary payment platform designed specifically for African markets where internet connectivity can be unreliable. By leveraging local communication technologies like QR codes, Bluetooth Low Energy (BLE), and audio signals, OffiMesh allows merchants and customers to complete transactions completely offline, with automatic reconciliation when connectivity is restored.

## Features

### Core Capabilities
- **Offline QR Payments** - Generate and scan dynamic QR codes for instant peer-to-peer transfers
- **Bluetooth Payments** - Transfer funds directly between devices using secure BLE communication
- **Audio Payment Support** - Transmit payment data via audio signals for specialized environments
- **Automatic Sync** - Transactions automatically sync and reconcile with the cloud ledger
- **Secure Local Ledger** - All transactions are cryptographically secured locally
- **Merchant Mode** - Dedicated POS interface optimized for high-volume retail
- **Customer Mode** - Streamlined payment experience for everyday users
- **Nomba Integration** - Seamless bank settlement through Nomba payment gateway

### Security
- 256-bit end-to-end encryption
- ECDSA digital signatures
- Tamper detection and prevention
- Offline cryptographic verification
- Replay attack protection
- Keys stored in device Trusted Execution Environment (TEE)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Components**: Radix UI primitives
- **Theme**: Dark mode first with light mode support

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Dav-123/Offimesh.git

# Navigate to the project directory
cd Offimesh

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
offimesh/
├── public/
│   ├── manifest.json      # PWA manifest
│   ├── llms.txt            # AI indexing file
│   └── robots.txt          # Generated at runtime
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with SEO
│   │   ├── page.tsx       # Home page
│   │   ├── globals.css    # Global styles
│   │   ├── sitemap.ts     # Dynamic sitemap
│   │   ├── robots.ts      # Robots.txt generator
│   │   └── [page]/        # Static pages
│   ├── components/
│   │   ├── layout/        # Header, Footer, ThemeProvider
│   │   ├── sections/      # Page sections
│   │   └── ui/            # Reusable UI components
│   ├── lib/               # Utilities
│   └── types/             # TypeScript types
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Landing page with all sections |
| About | `/about` | Company information |
| Blog | `/blog` | Articles and updates |
| Careers | `/careers` | Job opportunities |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |
| Cookies | `/cookies` | Cookies policy |
| Security | `/security-policy` | Security policy |
| Docs | `/docs` | Developer documentation |
| API Reference | `/docs/api` | API documentation |
| Press Kit | `/press-kit` | Media resources |
| Changelog | `/changelog` | Version history |
| Status | `/status` | System status |
| Brand Assets | `/brand-assets` | Logo and brand guidelines |

## Design System

### Colors
- **Primary**: Purple (`#9333ea`)
- **Secondary**: Indigo (`#6366f1`)
- **Accent**: Fuchsia (`#d946ef`)
- **Dark**: Slate (`#0f172a`)
- **Light**: White

### Typography
- **Display**: Geist (brand font)
- **Body**: Inter (system font)

### Components
- Glass morphism cards
- Gradient buttons
- Animated sections
- Responsive grids

## Performance

- Optimized for Core Web Vitals
- Lazy loading for images
- Dynamic imports for large components
- Efficient Tailwind CSS purging
- Edge-ready with Next.js

## SEO

- Complete metadata implementation
- Open Graph and Twitter Cards
- JSON-LD structured data
- Dynamic sitemap
- Robots.txt
- PWA manifest

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

We welcome contributions! Please see our contributing guidelines for details.

## License

Copyright 2024 OffiMesh. All rights reserved.

## Contact

- **Website**: [offimesh.com](https://offimesh.com)
- **Email**: contact@offimesh.com
- **Twitter**: [@offimesh](https://twitter.com/offimesh)
- **LinkedIn**: [offimesh](https://linkedin.com/company/offimesh)
- **GitHub**: [offimesh](https://github.com/offimesh)

---

Built with passion for Africa's financial inclusion.
