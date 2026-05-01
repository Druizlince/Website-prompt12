const services = [
  {
    tier: "Basic",
    badge: "Starter",
    icon: "🚀",
    colorClass: "from-slate-800/60 to-slate-900/40",
    borderClass: "border-slate-700/40",
    price: "$700–$1,500",
    retainer: "+ $200/mo",
    description: "Get online fast with a professional, mobile-first website.",
    features: [
      "5-page professional website",
      "Mobile-first responsive design",
      "Contact form + lead capture",
      "Basic on-page SEO",
      "Fast hosting on Netlify",
      "SSL + security setup",
    ],
    stack: "Next.js / HTML + Netlify",
    cta: "Start Basic",
    highlighted: false,
  },
  {
    tier: "Growth",
    badge: "Most Popular",
    icon: "📈",
    colorClass: "from-indigo-900/40 to-indigo-950/20",
    borderClass: "border-indigo-500/30",
    price: "$1,500–$3,500",
    retainer: "+ $250–$400/mo",
    description: "A full-power site designed to convert visitors into customers.",
    features: [
      "Everything in Basic",
      "WordPress + Elementor build",
      "SEO-optimized content",
      "Google Business integration",
      "Blog / portfolio section",
      "Advanced analytics setup",
      "Conversion rate optimization",
    ],
    stack: "WordPress + Elementor",
    cta: "Start Growing",
    highlighted: true,
  },
  {
    tier: "Premium",
    badge: "High Performance",
    icon: "⚡",
    colorClass: "from-cyan-900/30 to-cyan-950/20",
    borderClass: "border-cyan-500/20",
    price: "$3,500–$8,000",
    retainer: "+ $400–$500/mo",
    description: "Custom-built for businesses ready to dominate their market.",
    features: [
      "Everything in Growth",
      "Custom Next.js build",
      "Advanced UX + animations",
      "API integrations",
      "E-commerce (if needed)",
      "Performance optimization",
      "Monthly strategy calls",
    ],
    stack: "Next.js + Custom APIs",
    cta: "Go Premium",
    highlighted: false,
  },
  {
    tier: "AI Bundle",
    badge: "Highest ROI",
    icon: "🤖",
    colorClass: "from-purple-900/40 to-indigo-950/20",
    borderClass: "border-purple-500/30",
    price: "$2,500–$5,000",
    retainer: "+ $600–$1,200/mo",
    description: "Full website + AI automation that works for you 24/7.",
    features: [
      "Everything in Growth or Premium",
      "AI lead capture chatbot",
      "Appointment booking automation",
      "After-hours auto-response",
      "Review request automation",
      "Monthly analytics reports",
      "Dedicated support",
    ],
    stack: "Next.js + Voiceflow + Make.com",
    cta: "Get AI Bundle",
    highlighted: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            💼 Service Tiers
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Choose Your
            <span className="gradient-text"> Growth Level</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every tier is built around one goal: generating more revenue for
            your business. We don&apos;t build websites — we build revenue systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.tier}
              className={`relative p-6 rounded-2xl bg-gradient-to-b ${service.colorClass} border ${service.borderClass} flex flex-col hover:scale-[1.02] transition-transform duration-300 ${
                service.highlighted
                  ? "ring-2 ring-indigo-500/40 shadow-2xl shadow-indigo-500/10"
                  : ""
              }`}
            >
              {service.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-white text-xs font-bold shadow-lg whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="text-3xl mb-3">{service.icon}</div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-black">{service.tier}</h3>
                <span className="px-2 py-0.5 rounded-full bg-white/5 text-slate-400 text-xs">
                  {service.badge}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-4">
                <span className="text-2xl font-black text-white">{service.price}</span>
                <span className="text-slate-500 text-sm ml-1">one-time</span>
                <div className="text-indigo-400 text-sm font-semibold mt-0.5">
                  {service.retainer} retainer
                </div>
              </div>

              <ul className="flex-1 space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mb-4 px-3 py-2 rounded-lg bg-white/5 text-slate-500 text-xs">
                Stack: {service.stack}
              </div>

              <a
                href="#audit"
                className={`block text-center px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                  service.highlighted
                    ? "gradient-bg text-white shadow-lg shadow-indigo-500/20"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {service.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
