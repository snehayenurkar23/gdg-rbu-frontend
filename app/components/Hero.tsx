"use client";

import React from "react";
import PixelCascade from "./PixelCascade";
import { usePixelRipple, PixelRippleOverlay } from "./PixelRipple";

interface HeroProps {
  onOpenProfile: () => void;
}

export default function Hero({ onOpenProfile }: HeroProps) {
  const { ripples: ripple1, triggerRipple: trigger1 } = usePixelRipple();
  const { ripples: ripple2, triggerRipple: trigger2 } = usePixelRipple();

  return (
    <section
      id="home"
      style={{
        paddingTop: "136px",
        paddingBottom: "90px",
        paddingLeft: "24px",
        paddingRight: "24px",
        maxWidth: "1360px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <PixelCascade
        id="home-cascade"
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <div className="hero-grid">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <h1
              className="retron-font"
              style={{
                fontSize: "clamp(2.2rem, 5.2vw, 4.6rem)",
                lineHeight: 1.12,
                fontWeight: 900,
                color: "var(--text-color)",
                textTransform: "uppercase",
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              <span style={{ display: "block" }}>GOOGLE DEVELOPER</span>
              <span style={{ display: "block" }}>GROUPS, RBU</span>
            </h1>

            <p
              style={{
                fontFamily: "monospace",
                fontSize: "clamp(1.05rem, 1.8vw, 1.4rem)",
                lineHeight: 1.7,
                color: "var(--muted-color)",
                maxWidth: "560px",
              }}
            >
              Empowering students with
              <br />
              cutting-edge tech skills,
              <br />
              community, and resources
              <br />
              for a future in technology
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "8px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#events"
                onClick={(e) => trigger1(e)}
                className="pixel-ripple-host"
                style={{
                  backgroundColor: "var(--card-bg)",
                  color: "var(--text-color)",
                  border: "3px solid var(--card-border)",
                  borderRadius: "0px",
                  padding: "14px 32px",
                  fontSize: "15px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  boxShadow: "var(--card-shadow)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PixelRippleOverlay ripples={ripple1} />
                <span>Learn More</span>
              </a>

              <button
                onClick={(e) => {
                  trigger2(e);
                  onOpenProfile();
                }}
                className="pixel-ripple-host"
                style={{
                  backgroundColor: "var(--card-bg)",
                  color: "var(--text-color)",
                  border: "3px solid var(--card-border)",
                  borderRadius: "0px",
                  padding: "14px 32px",
                  fontSize: "15px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  boxShadow: "var(--card-shadow)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PixelRippleOverlay ripples={ripple2} />
                <span>Profile</span>
              </button>
            </div>

            <div style={{ marginTop: "8px" }}>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  border: "2.5px solid var(--card-border)",
                  borderRadius: "0px",
                  padding: "6px 16px",
                  fontSize: "13px",
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  transform: "rotate(-2deg)",
                  boxShadow: "3px 3px 0px rgba(0,0,0,0.2)",
                }}
              >
                GDG • RBU
              </span>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                backgroundColor: "#000000",
                borderRadius: "0px",
                transform: "translate(10px, 10px)",
                opacity: 0.18,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "620px",
                aspectRatio: "16/10",
                backgroundColor: "#000000",
                border: "4px solid var(--card-border)",
                borderRadius: "0px",
                boxShadow: "var(--card-shadow-lg)",
                overflow: "hidden",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  pointerEvents: "none",
                  width: "50%",
                  height: "24px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "0px",
                  opacity: 0.85,
                  boxShadow: "0 0 12px rgba(255,255,255,0.4)",
                }}
              />
            </div>
          </div>
        </div>
      </PixelCascade>
    </section>
  );
}
