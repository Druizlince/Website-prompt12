export default function CTASection() {
  return (
    <section id="audit" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-[#080810] to-cyan-950/30" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Currently Accepting New Clients — Bergen County, NJ
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
          Get Your Free
          <br />
          <span className="gradient-text">Business Audit Today</span>
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          We&apos;ll show you exactly what your weak digital presence is costing
          you every month — in dollars. No sales pitch. No commitment. Just data.
        </p>

        <form className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="text"
              placeholder="Your name"
              className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 text-sm"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 text-sm"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="Business email"
              className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 text-sm"
            />
            <input
              type="text"
              placeholder="Business name"
              className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 text-sm"
            />
          </div>
          <select className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 focus:outline-none focus:border-indigo-500/50 text-sm mb-4 appearance-none">
            <option value="">What industry are you in?</option>
            <option>HVAC / Plumbing / Electrical</option>
            <option>Law Firm / Legal Services</option>
            <option>Contractor / Construction</option>
            <option>Restaurant / Food Service</option>
            <option>Medical / Dental / Healthcare</option>
            <option>Retail / E-commerce</option>
            <option>Other SMB</option>
          </select>
          <button
            type="submit"
            className="w-full py-4 rounded-xl gradient-bg text-white font-black text-base shadow-xl shadow-indigo-500/30 hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
          >
            Send Me My Free Audit Report →
          </button>
          <p className="mt-3 text-slate-600 text-xs">
            We&apos;ll contact you within 24 hours. 100% free. No spam. Ever.
          </p>
        </form>
      </div>
    </section>
  );
}
