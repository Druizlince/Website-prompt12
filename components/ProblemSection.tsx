const problems = [
  {
    icon: "📉",
    title: "Invisible on Google",
    description:
      "Your competitor ranks #1 for 'plumber near me'. You're on page 3. That's 10–20 calls/month going to them, not you.",
    cost: "~$2,400/mo lost",
  },
  {
    icon: "🤖",
    title: "No Lead Capture System",
    description:
      "Visitors land on your site and leave. No chat, no form, no follow-up. Every visitor who bounces is a lead you'll never recover.",
    cost: "~$1,800/mo lost",
  },
  {
    icon: "📵",
    title: "After-Hours Silence",
    description:
      "40% of service inquiries happen outside business hours. Without auto-response, those customers call your competitor instead.",
    cost: "~$1,200/mo lost",
  },
  {
    icon: "⭐",
    title: "No Review System",
    description:
      "93% of customers check reviews before calling. Without a review automation system, you're losing trust before the first hello.",
    cost: "~$900/mo lost",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            ⚠️ The Real Cost of No Digital Strategy
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Every Month Without Action,
            <br />
            <span className="text-red-400">You Lose Real Money</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Most SMB owners don&apos;t realize they have a problem until we show
            them the numbers. Here&apos;s what a weak digital presence is
            costing you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="p-6 rounded-2xl bg-[#0f0f1a] border border-red-500/10 hover:border-red-500/25 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{problem.icon}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {problem.description}
                  </p>
                  <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold">
                    {problem.cost}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 text-center">
          <p className="text-xl font-bold text-white mb-2">
            The good news? Every one of these problems has a fix.
          </p>
          <p className="text-slate-400 mb-6">
            We diagnose exactly what&apos;s costing you — for free — in a
            15-minute business audit.
          </p>
          <a
            href="#audit"
            className="inline-block px-8 py-4 rounded-xl gradient-bg text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20"
          >
            Show Me What I&apos;m Losing →
          </a>
        </div>
      </div>
    </section>
  );
}
