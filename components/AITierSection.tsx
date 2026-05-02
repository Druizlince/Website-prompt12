"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { fadeUp, blurIn, slideInLeft, slideInRight, scaleIn } from "@/lib/animations";

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
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080810] to-transparent pointer-events-none" />
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <AnimatedSection>
            <motion.div
              variants={slideInLeft}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6"
            >
              🤖 AI Tier — Highest Margin Product
            </motion.div>
            <motion.h2
              variants={blurIn}
              className="text-4xl sm:text-5xl font-black tracking-tight mb-6"
            >
              Your Business,
              <br />
              <span className="gradient-text">Working 24/7</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed mb-8">
              Our AI tier turns your website into a fully automated sales
              machine. Lead capture, appointment booking, review collection, and
              reporting — all running without lifting a finger.
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-8"
            >
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
            </motion.div>

            <motion.a
              href="#audit"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-8 py-4 rounded-xl gradient-bg text-white font-bold shadow-xl shadow-indigo-500/25 hover:opacity-90 transition-opacity"
            >
              Unlock AI for My Business →
            </motion.a>
          </AnimatedSection>

          {/* Right */}
          <AnimatedSection className="space-y-4">
            {aiFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={slideInRight}
                whileHover={{ x: 6, borderColor: "rgba(99,102,241,0.35)" }}
                className="p-4 rounded-xl bg-[#0f0f1a] border border-indigo-500/10 transition-colors duration-300 flex items-start gap-4 cursor-default"
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
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
