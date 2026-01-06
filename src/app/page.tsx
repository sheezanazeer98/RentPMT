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
                  src="/logo.png"
                  alt="RentPMT Logo"
                  width={56}
                  height={56}
                  priority
                  className="h-14 w-34"
                />
              </div>
          
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white py-24 sm:py-32 lg:py-15">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm">
              <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted Payment Gateway
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Trusted Rental Payment
              <span className="block bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                Processing
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-slate-600 sm:text-2xl">
              Secure, verified payment gateway ensuring integrity in rental transactions for landlords and tenants
            </p>
            
            {/* Payment Notice - Hero Section */}
            <div className="mx-auto mt-10 max-w-3xl">
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
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
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
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-slate-600" />
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
            <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Secure Transactions</h3>
              <p className="mt-3 text-slate-600">
                All payments are processed through verified channels with comprehensive fraud protection measures.
              </p>
            </div>
            <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Payment Tracking</h3>
              <p className="mt-3 text-slate-600">
                Comprehensive tracking and verification systems ensure every transaction is properly recorded and accounted for.
              </p>
            </div>
            <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg sm:col-span-2 lg:col-span-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
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

      {/* Payment Warning Section */}
      <section className="py-20 sm:py-28">
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

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="RentPMT Logo"
                width={40}
                height={40}
                className="h-15 w-30"
              />
             
            </div>
            <p className="text-center text-sm text-slate-600">
              © 2026 RentPMT LLC. All rights reserved.
            </p>
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
