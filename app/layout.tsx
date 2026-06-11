import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ANTIC AGENCY | Web Design & AI Automation for Small Businesses — Bergen County, NJ",
  description:
    "We build high-converting websites and AI automation systems for small businesses in Bergen County, NJ and beyond. More leads, more revenue, less work. Get your free audit today.",
  alternates: {
    canonical: "https://anticagency.it.com",
  },
  openGraph: {
    type: "website",
    url: "https://anticagency.it.com",
    title: "ANTIC AGENCY | Web Design & AI Automation for Small Businesses",
    description:
      "High-converting websites + AI automation systems for small businesses. Serving Bergen County, NJ. Get a free business audit.",
    siteName: "ANTIC AGENCY",
    images: [
      {
        url: "https://anticagency.it.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ANTIC AGENCY — Web Design & AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANTIC AGENCY | Web Design & AI Automation for Small Businesses",
    description:
      "High-converting websites + AI automation systems for small businesses. Serving Bergen County, NJ.",
    images: ["https://anticagency.it.com/opengraph-image"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ANTIC AGENCY",
  description:
    "Web design and AI automation agency helping small businesses grow with high-converting websites, SEO, and intelligent automation systems.",
  url: "https://anticagency.it.com",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Bergen County, NJ",
  },
  serviceType: [
    "Web Design",
    "AI Automation",
    "SEO",
    "Chatbot Development",
    "Lead Generation",
  ],
  priceRange: "$$",
  sameAs: [],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our websites start at $700 for a professional 5-page site with lead capture, up to $8,000 for a fully custom market-dominating build. We also offer AI bundles from $2,500–$5,000.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer AI automation for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build AI chatbots, appointment booking systems, after-hours response automation, and review generation systems tailored to small and medium businesses.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver your first proposal within 48 hours and most projects are completed within 2–4 weeks depending on scope.",
      },
    },
    {
      "@type": "Question",
      name: "Where is ANTIC AGENCY located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're based in Bergen County, NJ and serve small businesses locally and across the United States.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#080810] text-white antialiased">
        {children}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
