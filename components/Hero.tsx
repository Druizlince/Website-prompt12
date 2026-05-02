"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080810] to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">

          {/* Left — Text */}
          <div className="flex flex-col justify-center py-16 lg:py-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8 w-fit">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              AI-Powered Digital Agency · Bergen County, NJ
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              Your Business Is
              <br />
              <span className="gradient-text">Bleeding Revenue</span>
              <br />
              Without Knowing It
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
              We build high-converting websites + AI automation systems that
              turn visitors into paying customers — and justify{" "}
              <span className="text-white font-semibold">$200–$900/mo retainers</span>{" "}
              with measurable ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#audit"
                className="px-8 py-4 rounded-xl gradient-bg text-white font-bold text-base shadow-xl shadow-indigo-500/25 hover:opacity-90 hover:scale-105 transition-all duration-200 text-center"
              >
                Get Your Free Business Audit →
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200 text-center"
              >
                See Our Services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "4x", label: "Average Client ROI" },
                { value: "$0", label: "Free Audit — No Strings" },
                { value: "48hr", label: "First Proposal Delivered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl xl:text-3xl font-black gradient-text">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 3D Scene */}
          <div className="hidden lg:flex items-center justify-center h-[600px] xl:h-[700px] relative">
            {/* Glow behind sphere */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
              <div className="absolute w-60 h-60 bg-cyan-500/15 rounded-full blur-2xl" />
            </div>
            <HeroScene />
          </div>
        </div>
      </div>

      {/* Mobile 3D — smaller version below text */}
      <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-40 pointer-events-none">
        <HeroScene />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 z-20">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
