"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on pointer devices (not touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let raf: number;
    let isHovering = false;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(${isHovering ? 1.8 : 1})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) scale(${isHovering ? 1.6 : 1})`;
        ringRef.current.style.borderColor = isHovering
          ? "rgba(34,211,238,0.7)"
          : "rgba(99,102,241,0.55)";
      }
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => { isHovering = true; };
    const onLeave = () => { isHovering = false; };

    const bindInteractives = () => {
      document.querySelectorAll("a, button, [role='button'], input, select, textarea, label").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    document.addEventListener("mousemove", move);
    bindInteractives();
    loop();

    // Re-bind after hydration mutations
    const observer = new MutationObserver(bindInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ position: "fixed", top: -4, left: -4, width: 8, height: 8, borderRadius: "50%", background: "white", pointerEvents: "none", zIndex: 99999, mixBlendMode: "difference", transition: "transform 0.12s cubic-bezier(0.22,1,0.36,1)" }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ position: "fixed", top: -20, left: -20, width: 40, height: 40, borderRadius: "50%", border: "1.5px solid rgba(99,102,241,0.55)", pointerEvents: "none", zIndex: 99998, transition: "border-color 0.3s, transform 0.06s linear" }}
      />
    </>
  );
}
