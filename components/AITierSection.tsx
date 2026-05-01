const aiFeatures = [
  {
    icon: "💬",
    title: "AI Lead Chatbot",
    subtitle: "Voiceflow + Tidio",
    description:
      "Captures visitor info 24/7, qualifies leads automatically, and books calls — even while you sleep.",
    time: "3–5 hrs setup",
  },
  {
    icon: "📅",
    title: "Appointment Automation",
    subtitle: "Calendly + Make.com",
    description:
      "Auto-books appointments, sends confirmations, and fires reminders. Zero manual scheduling.",
    time: "2–3 hrs setup",
  },
  {
    icon: "🌙",
    title: "After-Hours Response",
    subtitle: "Tidio / Crisp",
    description:
      "Instant replies to inquiries outside business hours — so you never lose a lead to silence.",
    time: "1–2 hrs setup",
  },
  {
    icon: "⭐",
    title: "Review Automation",
    subtitle: "Make.com + GMB API",
    description:
      "Auto-requests Google reviews post-service via SMS/email. More reviews = higher local rankings.",
    time: "2–3 hrs setup",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    subtitle: "Google Data Studio",
    description:
      "Auto-generated monthly PDF report on traffic, leads, and conversions. Know your ROI.",
    time: "2–3 hrs setup",
  },
];

export default function AITierSection() {
  return (
    <section id="ai-tier" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              🤖 AI Tier — Highest Margin Product
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              Your Business,
              <br />
              <span className="gradient-text">Working 24/7</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Our AI tier turns your website into a fully automated sales
              machine. Lead capture, appointment booking, review collection, and
              reporting — all running without lifting a finger.
            </p>

            <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-8">
              <p className="text-sm text-slate-400 mb-1">ROI Example</p>
              <p className="text-white font-bold">
                HVAC company → 3 new AI-captured jobs/month @ $400 each
              </p>
              <p className="text-2xl font-black text-indigo-400 mt-2">
                $1,200/mo new revenue
              </p>
              <p className="text-slate-400 text-sm mt-1">
                vs. $600–$900/mo retainer →{" "}
                <span className="text-green-400 font-bold">4x+ ROI</span>
              </p>
            </div>

            <a
              href="#audit"
              className="inline-block px-8 py-4 rounded-xl gradient-bg text-white font-bold shadow-xl shadow-indigo-500/25 hover:opacity-90 transition-opacity"
            >
              Unlock AI for My Business →
            </a>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {aiFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-4 rounded-xl bg-[#0f0f1a] border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 flex items-start gap-4"
              >
                <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-white text-sm">{feature.title}</h3>
                    <span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">
                      {feature.subtitle}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <span className="text-xs text-indigo-400 whitespace-nowrap font-medium flex-shrink-0">
                  {feature.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
