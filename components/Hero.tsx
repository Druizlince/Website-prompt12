"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp, blurIn, fadeIn, stagger } from "@/lib/animations";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Parallax background layers */}
      <motion.div className="absolute inset-0 hero-glow" style={{ y: bgY }} />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"
        style={{ y: bgY }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080810] to-transparent z-10" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{ y: textY, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">

          {/* Left — Text */}
          <motion.div
            className="flex flex-col justify-center py-16 lg:py-0"
            initial="hidden"
            animate="visible"
            variants={stagger(0.15, 0.14)}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8 w-fit">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              AI-Powered Digital Agency · Bergen County, NJ
            </motion.div>

            <motion.h1
              variants={blurIn}
              className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6"
            >
              Your Business Is
              <br />
              <span className="gradient-text">Bleeding Revenue</span>
              <br />
              Without Knowing It
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              We build high-converting websites + AI automation systems that
              turn visitors into paying customers — and justify{" "}
              <span className="text-white font-semibold">$200–$900/mo retainers</span>{" "}
              with measurable ROI.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href="#audit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl gradient-bg text-white font-bold text-base shadow-xl shadow-indigo-500/25 transition-all duration-200 text-center"
              >
                Get Your Free Business Audit →
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200 text-center"
              >
                See Our Services
              </motion.a>
            </motion.div>

            <motion.div variants={stagger(0, 0.1)} className="grid grid-cols-3 gap-6">
              {[
                { value: "4x", label: "Average Client ROI" },
                { value: "$0", label: "Free Audit — No Strings" },
                { value: "48hr", label: "First Proposal Delivered" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={fadeUp}>
                  <div className="text-2xl xl:text-3xl font-black gradient-text">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center h-[600px] xl:h-[700px] relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
              <div className="absolute w-60 h-60 bg-cyan-500/15 rounded-full blur-2xl" />
            </div>
            <HeroScene />
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile 3D */}
      <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-40 pointer-events-none">
        <HeroScene />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 z-20"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
