import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ANTIC AGENCY — Web Design & AI Automation for Small Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#07070f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 96px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow top */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(99,102,241,0.3) 0%, transparent 70%)",
          }}
        />
        {/* Background glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-60px",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(34,211,238,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.35)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#818cf8",
            }}
          />
          <span
            style={{
              color: "#a5b4fc",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            AI-Powered Digital Agency · Bergen County, NJ
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            color: "#ffffff",
            marginBottom: "28px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Web Design &amp; AI Automation</span>
          <span
            style={{
              background: "linear-gradient(135deg, #6366f1, #22d3ee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            That Grows Your Business
          </span>
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            lineHeight: 1.6,
            maxWidth: "780px",
            marginBottom: "48px",
          }}
        >
          High-converting websites + AI automation systems for small businesses.
          Proven ROI. Free audit — no strings attached.
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { value: "4x", label: "Avg Client ROI" },
            { value: "$0", label: "Free Audit" },
            { value: "48hr", label: "First Proposal" },
          ].map((s) => (
            <div
              key={s.label}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span
                style={{
                  fontSize: "42px",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                  backgroundClip: "text",
                  color: "transparent",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </span>
              <span style={{ fontSize: "16px", color: "#64748b", marginTop: "4px" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Footer brand */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "96px",
            fontSize: "20px",
            fontWeight: 800,
            letterSpacing: "4px",
            color: "#334155",
          }}
        >
          ANTICAGENCY.VERCEL.APP
        </div>
      </div>
    ),
    { ...size }
  );
}
