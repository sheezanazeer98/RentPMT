# RentPMT Landing Page

A professional, trust-focused landing page for RentPMT.com - a trusted payment gateway for rental transactions.

## Overview

RentPMT is a secure payment processing platform that facilitates rental payments, deposits, and housing-related transactions for landlords and tenants. This landing page serves as a verification source and establishes credibility for users before sending payments.

## Tech Stack

- **Framework:** Next.js 16.1.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Geist Sans & Geist Mono
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [https://rentpmt.com](https://rentpmt.com) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
rentpmt/
├── src/
│   └── app/
│       ├── page.tsx          # Main landing page
│       ├── layout.tsx         # Root layout with metadata
│       ├── globals.css        # Global styles
│       ├── robots.ts          # SEO robots configuration
│       └── sitemap.ts         # SEO sitemap
├── public/
│   └── logo.png              # RentPMT logo
└── package.json
```

## License
© 2026 RentPMT LLC. All rights reserved.
