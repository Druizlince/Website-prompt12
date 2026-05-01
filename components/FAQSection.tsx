"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What makes ANTIC AGENCY different from other web agencies?",
    a: "Most design agencies can't touch a server. Most IT firms can't design. We do both — and layer AI automation on top. That combination doesn't exist at the SMB price point. You get secure infrastructure AND a high-converting website AND automation systems in one package.",
  },
  {
    q: "How does the free business audit work?",
    a: "We analyze your Google ranking, your top competitor's ranking, estimated monthly leads being lost, and the revenue impact. We produce a one-page report. It takes 15 minutes, costs you nothing, and quantifies a problem you may not have known existed. No sales pitch — just data.",
  },
  {
    q: "How long does it take to build my website?",
    a: "Basic sites are typically live in 1–2 weeks. Growth tier is 2–3 weeks. Premium and AI builds take 3–5 weeks depending on complexity. We deliver the first proposal within 48 hours of your audit call.",
  },
  {
    q: "What's the ROI on a monthly retainer?",
    a: "A local HVAC company that lands just 3 new jobs/month from web leads at $400/job earns $1,200/month in new revenue. A $250/month retainer is a 4x ROI. We always show you the math before you commit.",
  },
  {
    q: "Do I need to know anything technical?",
    a: "Absolutely not. You run your business — we handle everything digital. Our IT Lead manages all infrastructure, hosting, security, and configurations. You get monthly reports in plain English showing what's working.",
  },
  {
    q: "What happens after the website is built?",
    a: "Your retainer kicks in. We maintain, update, and optimize your site monthly. AI tier clients get fully managed automation systems. You receive a monthly analytics report with traffic, leads, and conversion data.",
  },
  {
    q: "Can you work with businesses outside Bergen County, NJ?",
    a: "Yes. While we have deep roots in the Bergen County SMB market, we work with clients throughout NJ and remotely nationwide. Most of our work is done remotely with occasional in-person meetings.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400">
            Everything you need to know before your free audit.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                open === i
                  ? "bg-[#0f0f1a] border-indigo-500/30"
                  : "bg-[#0a0a12] border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span
                  className={`font-semibold text-sm pr-4 ${
                    open === i ? "text-white" : "text-slate-300"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`text-xl flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-45 text-indigo-400" : "text-slate-600"
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
