import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://rentpmt.com";
const siteName = "RentPMT";
const defaultTitle = "RentPMT | Trusted Rental Payment Gateway";
const description =
  "Trusted payment gateway for authenticated landlords. Secure rental payment processing for monthly rent, deposits, and housing-related transactions. Based in Northeast Pennsylvania.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description,

  applicationName: siteName,
  generator: "Next.js",
  category: "finance",
  creator: "RentPMT LLC",
  publisher: "RentPMT LLC",

  keywords: [
    "RentPMT",
    "rent payment gateway",
    "rental payments",
    "rent deposits",
    "apartment deposit",
    "tenant payments",
    "landlord payments",
    "property manager payments",
    "rent payment verification",
    "fraud prevention",
    "rent payment tracking",
    "Northeast Pennsylvania",
    "Zelle rent payment",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: defaultTitle,
    description,
    url: "/",
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png", // create this in /public
        width: 1200,
        height: 630,
        alt: "RentPMT — Trusted Rental Payment Gateway",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description,
    images: ["/logo.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  referrer: "origin-when-cross-origin",

  // verification: {
  //   google: "GOOGLE_SEARCH_CONSOLE_TOKEN",
  //   other: {
  //     "msvalidate.01": "BING_TOKEN",
  //   },
  // },

  other: {
    "color-scheme": "light",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Macondo&family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
