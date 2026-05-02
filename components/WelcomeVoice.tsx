"use client";

import { useState, useEffect, useRef } from "react";

export default function WelcomeVoice() {
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [done, setDone] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const message =
    "Welcome to Antic Agency. We build high-converting websites and A.I. automation systems for small businesses. Every month without a strong digital presence is costing you real money. Let us show you exactly what you're losing — for free. Get your free business audit today.";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  const play = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(message);
    utteranceRef.current = utterance;

    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (v) =>
        v.name.includes("Google US English") ||
        v.name.includes("Samantha") ||
        v.name.includes("Daniel") ||
        (v.lang === "en-US" && v.localService === false)
    );
    if (preferred) utterance.voice = preferred;

    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    utterance.volume = 1;

    utterance.onstart = () => setPlaying(true);
    utterance.onend = () => {
      setPlaying(false);
      setDone(true);
    };
    utterance.onerror = () => setPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis?.cancel();
    setPlaying(false);
  };

  const dismiss = () => {
    window.speechSynthesis?.cancel();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-in">
      <div className="relative p-5 rounded-2xl bg-[#0f0f1a] border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 w-72 backdrop-blur-sm">
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 text-slate-500 hover:text-white transition-colors text-lg leading-none"
          aria-label="Dismiss"
        >
          ×
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shadow-lg shadow-indigo-500/30 flex-shrink-0">
            <span className="text-lg">{playing ? "🔊" : done ? "✅" : "👋"}</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm">Welcome to ANTIC AGENCY</p>
            <p className="text-slate-500 text-xs">Click to hear from us</p>
          </div>
        </div>

        {/* Waveform animation */}
        {playing && (
          <div className="flex items-center gap-0.5 mb-3 h-6">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1 rounded-full gradient-bg opacity-80"
                style={{
                  height: `${Math.random() * 20 + 4}px`,
                  animation: `pulse ${0.4 + Math.random() * 0.4}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Message preview */}
        {!playing && (
          <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
            &ldquo;Welcome to Antic Agency. We build high-converting websites and AI automation...&rdquo;
          </p>
        )}

        {/* Button */}
        <div className="flex gap-2">
          {!playing ? (
            <button
              onClick={play}
              className="flex-1 py-2.5 rounded-xl gradient-bg text-white text-xs font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <span>▶</span>
              {done ? "Play Again" : "Play Welcome"}
            </button>
          ) : (
            <button
              onClick={stop}
              className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <span>⏹</span>
              Stop
            </button>
          )}
          <button
            onClick={dismiss}
            className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-xs hover:bg-white/10 transition-all"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}
