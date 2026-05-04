import Image from "next/image";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Basic Website", href: "#services" },
    { label: "Growth Tier", href: "#services" },
    { label: "Premium Build", href: "#services" },
    { label: "AI Bundle", href: "#ai-tier" },
  ],
  Retainers: [
    { label: "Website Care Plan", href: "#pricing" },
    { label: "SEO Monthly", href: "#pricing" },
    { label: "AI Automation", href: "#pricing" },
    { label: "Growth + AI Bundle", href: "#pricing" },
  ],
  Company: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Free Audit", href: "#audit" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="ANTIC AGENCY"
                width={140}
                height={56}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered digital transformation for small and medium businesses.
              We build revenue systems, not just websites.
            </p>
            <p className="text-slate-600 text-xs">
              📍 Bergen County, NJ · Serving clients nationwide
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-sm text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © 2026 ANTIC AGENCY. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js · Tailwind CSS · Deployed on Netlify
          </p>
        </div>
      </div>
    </footer>
  );
}
