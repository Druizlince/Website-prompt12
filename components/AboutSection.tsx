"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { fadeUp, blurIn, slideInLeft, slideInRight, scaleIn, fadeIn } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080810] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-cyan-950/10" />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6"
          >
            🤝 Our Story
          </motion.div>
          <motion.h2
            variants={blurIn}
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Two Old Friends,
            <br />
            <span className="gradient-text">One Big Mission</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-2xl mx-auto">
            ANTIC AGENCY didn't start in a boardroom — it started with two childhood friends reconnecting and asking the same question: <span className="text-white italic">"Why are small businesses still getting left behind?"</span>
          </motion.p>
        </AnimatedSection>

        {/* Timeline / Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Left — Story cards */}
          <AnimatedSection className="space-y-5">
            {[
              {
                icon: "🏫",
                label: "Where It Started",
                title: "Elementary & Middle School",
                body: "Daniel and Juan Andrés first crossed paths as kids in school — sharing classrooms, lunch tables, and the kind of friendships you don't forget. Life eventually pulled them in different directions.",
              },
              {
                icon: "📍",
                label: "The Reconnection",
                title: "Both in New Jersey — Just Miles Apart",
                body: "Years passed, paths diverged. Then, out of nowhere, they discovered they were practically neighbors in NJ. They started hanging out again, picking up right where they left off.",
              },
              {
                icon: "💡",
                label: "The Idea",
                title: "One Conversation Changed Everything",
                body: "In one of those hangouts, a real conversation happened. They saw the same gap: small businesses with huge potential, held back by weak websites and zero automation. That night, ANTIC AGENCY was born.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={slideInLeft}
                className="flex gap-4 p-5 rounded-2xl bg-[#0f0f1a] border border-indigo-500/10 hover:border-indigo-500/25 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-lg flex-shrink-0 shadow-lg shadow-indigo-500/20">
                  {item.icon}
                </div>
                <div>
                  <p className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                  <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>

          {/* Right — Team cards */}
          <AnimatedSection className="space-y-5">
            <motion.p variants={fadeIn} className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-6 text-center lg:text-left">
              Meet the founders
            </motion.p>

            {[
              {
                name: "Daniel",
                role: "Co-Founder · Strategy & Client Growth",
                bio: "The connector. Daniel drives client relationships, business strategy, and makes sure every project ties back to real revenue outcomes for the business owner.",
                gradient: "from-indigo-500 to-cyan-500",
                initials: "D",
              },
              {
                name: "Juan Andrés",
                role: "Co-Founder · Tech & AI Systems",
                bio: "The builder. Juan Andrés architects the websites and AI automation stacks — making sure every system is fast, secure, and actually works while you sleep.",
                gradient: "from-purple-500 to-indigo-500",
                initials: "JA",
              },
            ].map((person) => (
              <motion.div
                key={person.name}
                variants={slideInRight}
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-2xl bg-[#0f0f1a] border border-white/5 hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${person.gradient} flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-lg`}>
                    {person.initials}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-black text-base">{person.name}</h3>
                    <p className="text-indigo-400 text-xs font-medium mb-2">{person.role}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{person.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={scaleIn}
              className="p-5 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 text-center"
            >
              <p className="text-white font-bold text-sm mb-1">Bergen County, NJ — and beyond</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Two guys who grew up together, now helping local businesses grow together. That's ANTIC AGENCY.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
