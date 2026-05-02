"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import TiltCard from "@/components/TiltCard";
import { fadeUp, blurIn, fadeIn, scaleIn } from "@/lib/animations";

const plans = [
  {
    name: "Website Care Plan",
    price: "$100–$200",
    period: "/mo",
    description: "Keep your existing site maintained, secure, and updated.",
    features: [
      "Monthly backups",
      "Security monitoring",
      "Plugin/theme updates",
      "Minor content updates",
      "Uptime monitoring",
    ],
    cta: "Add Care Plan",
    border: "border-slate-700/40",
    highlighted: false,
    badge: null,
  },
  {
    name: "SEO Monthly",
    price: "$200–$400",
    period: "/mo",
    description: "Rank higher and get found by more local customers.",
    features: [
      "Keyword tracking & reporting",
      "On-page SEO updates",
      "Google Business optimization",
      "Monthly content updates",
      "Competitor analysis",
    ],
    cta: "Boost My SEO",
    border: "border-indigo-500/20",
    highlighted: false,
    badge: null,
  },
  {
    name: "Growth Retainer",
    price: "$250–$400",
    period: "/mo",
    description: "Full maintenance + SEO for businesses in growth mode.",
    features: [
      "Everything in Care Plan",
      "Full SEO package",
      "Monthly strategy call",
      "Conversion optimizations",
      "Priority support",
    ],
    cta: "Start Growing",
    border: "border-indigo-500/40",
    highlighted: true,
    badge: null,
  },
  {
    name: "AI Automation",
    price: "$400–$900",
    period: "/mo",
    description: "AI chatbot, booking, reviews, and analytics — all managed.",
    features: [
      "AI lead chatbot (managed)",
      "Appointment automation",
      "Review request system",
      "After-hours response",
      "Monthly analytics report",
    ],
    cta: "Get AI Tier",
    border: "border-purple-500/20",
    highlighted: false,
    badge: null,
  },
  {
    name: "Growth + AI Bundle",
    price: "$600–$1,200",
    period: "/mo",
    description: "The full stack. Highest margin. Highest retention.",
    features: [
      "Full Growth Retainer",
      "Full AI Automation Tier",
      "Dedicated account manager",
      "Quarterly strategy sessions",
      "White-glove support",
    ],
    cta: "Go Full Stack",
    border: "border-cyan-500/30",
    highlighted: false,
    badge: "Best Value",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080810] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6"
          >
            💰 Monthly Retainers
          </motion.div>
          <motion.h2
            variants={blurIn}
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Transparent Pricing,
            <br />
            <span className="gradient-text">Measurable ROI</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every retainer is designed to pay for itself. We always sell the
            ROI, not the service.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={scaleIn}>
              <TiltCard intensity={10} className="h-full">
                <div
                  className={`relative p-5 rounded-2xl bg-[#0f0f1a] border ${plan.border} flex flex-col h-full ${
                    plan.highlighted
                      ? "ring-2 ring-indigo-500/30 shadow-xl shadow-indigo-500/10"
                      : ""
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-black text-xs font-black whitespace-nowrap">
                      {plan.badge}
                    </div>
                  )}

                  <h3 className="font-black text-base mb-1">{plan.name}</h3>
                  <p className="text-slate-500 text-xs mb-4 leading-relaxed">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-black gradient-text">{plan.price}</span>
                    <span className="text-slate-500 text-sm">{plan.period}</span>
                  </div>

                  <ul className="flex-1 space-y-2 mb-5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-indigo-400 mt-0.5 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="#audit"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className={`block text-center px-3 py-2.5 rounded-lg text-xs font-bold transition-all ${
                      plan.highlighted
                        ? "gradient-bg text-white"
                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.cta} →
                  </motion.a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection>
          <motion.p variants={fadeUp} className="text-center text-slate-500 text-sm mt-8">
            All retainers start after the initial build is complete. Cancel
            anytime after 3 months.
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}
