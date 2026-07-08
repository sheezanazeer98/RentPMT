import Image from "next/image";

export default function Home() {

  const siteUrl = "https://rentpmt.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "RentPMT LLC",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description:
        "Trusted payment gateway for authenticated landlords facilitating rent, deposits, and housing-related transactions.",
      areaServed: "Northeast Pennsylvania",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "RentPMT",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "RentPMT | Trusted Rental Payment Gateway",
      description:
        "Trusted payment gateway for authenticated landlords. Secure rental payment processing for monthly rent, deposits, and housing-related transactions.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#partner`,
      name: "Predictable Property LLC",
      url: "https://predictableproperty.com",
      description: "Verified RentPMT partner providing professionally managed residential rental properties in Scranton & Wilkes-Barre, Pennsylvania.",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Pennsylvania",
        addressLocality: "Scranton & Wilkes-Barre",
      },
      areaServed: {
        "@type": "City",
        name: "Scranton & Wilkes-Barre",
      },
    },
    {
      "@type": "PaymentService",
      "@id": `${siteUrl}/#paymentservice`,
      name: "RentPMT Payment Processing",
      provider: { "@id": `${siteUrl}/#organization` },
      serviceType: "Rental Payment Processing",
      areaServed: {
        "@type": "State",
        name: "Pennsylvania",
      },
    },
  ],
};

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center">
            <div className="flex items-center gap-4">
              <div className="relative">
        <Image
                  src="/logo.svg"
                  alt="RentPMT Logo"
                  width={56}
                  height={56}
                  className="h-15 w-auto object-contain"
          priority
        />
              </div>
          
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-green-50/30 to-white py-5 sm:py-24 lg:py-10">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trusted Payment Gateway
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-5xl">
                Trusted Rental Payment{" "}
                <span className="bg-gradient-to-r from-green-600 to-slate-700 bg-clip-text text-transparent">
                  Processing
                </span>
              </h1>
              <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Secure, verified payment gateway ensuring integrity in rental transactions for landlords and tenants
              </p>
              
              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Verified & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Fraud Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Payment Tracking</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-100/50 to-slate-100/50 p-4">
                <Image
                  src="https://moccasin-cheerful-stingray-119.mypinata.cloud/ipfs/bafybeiglspcgiasw5qhxfc77tgwr6m3gp2j6ly6lxxw24dyugqkaakgkkq"
                  alt="RentPMT Payment Processing"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/10 to-transparent pointer-events-none rounded-xl" />
              </div>
            </div>
          </div>

          {/* Payment Notice - Hero Section */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="rounded-xl border-2 border-red-500/80 bg-gradient-to-br from-red-50 to-red-100/70 p-6 shadow-lg backdrop-blur-sm">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex items-center gap-3">
                  <svg className="h-6 w-6 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="text-sm font-bold text-red-900">
                    IMPORTANT: Only send payments to verified accounts
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-red-800">Zelle:</span>
                    <span className="font-mono bg-white/90 px-3 py-1.5 rounded-md text-red-900 font-semibold border border-red-200">
                      rent@rentpmt.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-red-800">Wire:</span>
                    <span className="font-mono bg-white/90 px-3 py-1.5 rounded-md text-red-900 font-semibold border border-red-200">
                      x4439 (PNC Bank)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                About RentPMT
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-green-600 to-slate-600" />
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <p className="text-xl">
                RentPMT is a trusted payment gateway for authenticated landlords. Based in Northeast Pennsylvania, we facilitate the receipt of monthly rental payments, initial deposits to hold apartments, and other housing-related transactions for a multitude of landlords and property managers.
              </p>
              <p>
                By serving as an intermediary and payment facilitator, we assist in improving payment tracking, reducing fraud risk, and ensuring integrity in the apartment rental market during an era when trust is desperately needed in rental payment completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features Section */}
      <section className="border-t border-slate-200 bg-slate-50/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose RentPMT
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Professional payment processing designed for the modern rental market
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-green-300 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Secure Transactions</h3>
              <p className="mt-3 text-slate-600">
                All payments are processed through verified channels with comprehensive fraud protection measures.
              </p>
            </div>
            <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-green-300 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Payment Tracking</h3>
              <p className="mt-3 text-slate-600">
                Comprehensive tracking and verification systems ensure every transaction is properly recorded and accounted for.
              </p>
            </div>
            <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-green-300 hover:shadow-lg sm:col-span-2 lg:col-span-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Trusted Intermediary</h3>
              <p className="mt-3 text-slate-600">
                Serving as a reliable intermediary between landlords and tenants, building trust in every transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Partner Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Our Trusted Partner
              </h2>
            </div>

            <div className="rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50/50 to-white p-6 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">Predictable Property LLC</h3>
                  <p className="text-sm text-slate-600 mt-0.5">Serving Northeast Pennsylvania and Beyond                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1">
                    <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-semibold text-green-700">Verified</span>
                  </div>
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-700 mb-4">
                Verified RentPMT partner providing professionally managed residential rental properties in Northeast Pennsylvania. All rental payments are securely processed through RentPMT's authenticated payment system.
              </p>

              {/* Trust Indicators - Compact */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-700">
                  <svg className="h-4 w-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-700">
                  <svg className="h-4 w-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Payment Tracking</span>
                </div>
              </div>

              {/* Cross-Reference Note - Compact */}
              <div className="rounded-lg bg-green-100/50 border border-green-200 p-3 mb-4">
                <p className="text-xs text-slate-700">
                  Verified on{" "}
                  <a 
                    href="https://predictableproperty.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-green-700 hover:text-green-800 underline"
                  >
                    PredictableProperty.com
            </a>{" "}
                  as an official RentPMT payment partner.
          </p>
        </div>

              {/* CTA Buttons - Compact */}
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://predictableproperty.com/rentals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
                >
                  View Properties
                  <svg className="ml-1.5 h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://predictableproperty.com"
            target="_blank"
            rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-green-600 bg-white px-4 py-2 text-xs font-semibold text-green-700 shadow-sm hover:bg-green-50 transition-colors"
                >
                  Visit Website
                  <svg className="ml-1.5 h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Warning Section */}
      <section className="py-20 sm:py-28 bg-slate-50/80 ">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border-2 border-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-10 shadow-xl sm:p-12">
            <div className="absolute right-0 top-0 -mr-20 -mt-20 h-40 w-40 rounded-full bg-red-200/50 blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-40 w-40 rounded-full bg-red-200/50 blur-3xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 shadow-lg">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-red-900 mb-6">
                  IMPORTANT PAYMENT NOTICE
                </h2>
                <div className="space-y-4 text-lg text-red-900">
                  <div className="rounded-lg border border-red-300 bg-white/80 p-5 shadow-sm">
                    <p className="font-bold mb-2 text-red-900">
                      IMPORTANT! Do not ever issue a Zelle payment to any email address other than:
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2.5 font-mono text-lg font-semibold text-red-900 shadow-sm">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      rent@rentpmt.com
                    </div>
                  </div>
                  <div className="rounded-lg border border-red-300 bg-white/80 p-5 shadow-sm">
                    <p className="font-bold mb-2 text-red-900">
                      Do not send a wire transfer to any account other than one ending in:
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2.5 font-mono text-lg font-semibold text-red-900 shadow-sm">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                      </svg>
                      x4439 at PNC Bank
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-lg bg-red-200/50 p-4 border border-red-300">
                  <p className="text-base font-medium text-red-900">
                    <span className="font-bold">Security Note:</span> Verifying these details protects you from fraud and ensures your payment reaches the correct recipient. Always confirm payment information before sending funds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50/50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="  p-8 sm:p-10 ">
            <div className="text-center mb-6">
              <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-2">
                Contact Us
              </h2>
              <p className="text-slate-600">
                Have questions? For contact queries, reach us by phone or email and we&apos;ll get back to you promptly.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:+15704911604"
                className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-600/20 hover:bg-green-700 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (570) 491-1604
              </a>
              <a
                href="mailto:info.rentpmt@gmail.com"
                className="inline-flex items-center gap-3 rounded-xl border border-green-200 bg-white px-8 py-4 text-base font-semibold text-green-700 shadow-sm hover:border-green-300 hover:bg-green-50 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info.rentpmt@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
            <Image
                  src="/logo.svg"
                  alt="RentPMT Logo"
                  width={40}
                  height={40}
                  className="h-15 w-auto object-contain"
                />
              </div>
              <p className="text-sm text-slate-600">
                © 2026 RentPMT LLC. All rights reserved.
              </p>
              <div className="flex flex-col items-center md:items-start gap-3 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Contact
                </p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a
                      href="tel:+15704911604"
                      className="font-medium text-green-700 hover:text-green-800 transition-colors"
                    >
                      (570) 491-1604
                    </a>
                    <span className="text-slate-500">(contact queries)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href="mailto:info.rentpmt@gmail.com"
                      className="font-medium text-green-700 hover:text-green-800 transition-colors"
                    >
                      info.rentpmt@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Trusted Partners Section */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4 text-center md:text-left">Trusted Partners</h3>
              <a
                href="https://predictableproperty.com"
            target="_blank"
            rel="noopener noreferrer"
                className="text-sm text-green-700 hover:text-green-800 font-medium"
          >
                Predictable Property LLC
          </a>
            </div>
          </div>
        </div>
      </footer>
      <script
  type="application/ld+json"
  // eslint-disable-next-line react/no-danger
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>

    </div>
  );
}
