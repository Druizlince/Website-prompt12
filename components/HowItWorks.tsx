"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { fadeUp, blurIn, fadeIn, scaleIn } from "@/lib/animations";

const steps = [
  {
    icon: "🔍",
    title: "Free Business Audit",
    description:
      "We analyze your Google ranking, competitor positioning, estimated lost leads, and revenue impact — and hand you a clear one-page report. Free, no strings attached.",
    duration: "15 minutes",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    icon: "🏗️",
    title: "We Build Your Revenue System",
    description:
      "Based on your tier, we design and build your website and automation stack. You review, we refine. First proposal within 48 hours of your audit.",
    duration: "1–3 weeks",
    gradient: "from-indigo-500 to-cyan-500",
  },
  {
    icon: "🚀",
    title: "Launch + Automate",
    description:
      "We go live. Your AI systems activate. Leads start flowing. We monitor, optimize, and report monthly so you always know your ROI.",
    duration: "Ongoing",
    gradient: "from-cyan-500 to-cyan-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080810] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-6"
          >
            ⚙️ Our Process
          </motion.div>
          <motion.h2
            variants={blurIn}
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            From Audit to Revenue
            <br />
            <span className="gradient-text">in 3 Steps</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-xl mx-auto">
            No fluff, no long sales calls. We show you the problem, propose the
            fix, and build it fast.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Connector line */}
          <motion.div
            variants={fadeIn}
            className="hidden md:block absolute top-8 left-[calc(33%+2rem)] right-[calc(33%+2rem)] h-px bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-indigo-500/20"
          />

          {steps.map((step, i) => (
            <motion.div key={step.title} variants={scaleIn} className="text-center">
              <motion.div
                className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} mb-6 shadow-xl`}
                whileHover={{ scale: 1.12, rotate: [0, -4, 4, 0] }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-2xl">{step.icon}</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#080810] border-2 border-indigo-500/50 flex items-center justify-center">
                  <span className="text-xs font-black text-indigo-400">{i + 1}</span>
                </div>
              </motion.div>
              <h3 className="text-xl font-black mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {step.description}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs">
                ⏱ {step.duration}
              </span>
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="mt-16 text-center">
          <motion.div variants={fadeUp}>
            <motion.a
              href="#audit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-10 py-4 rounded-xl gradient-bg text-white font-bold text-lg shadow-xl shadow-indigo-500/25 hover:opacity-90 transition-all duration-200"
            >
              Start With a Free Audit →
            </motion.a>
            <p className="mt-3 text-slate-500 text-sm">
              Takes 15 minutes. No commitment. No sales pitch.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
