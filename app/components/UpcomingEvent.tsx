"use client";

import React from "react";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import PixelCascade from "./PixelCascade";

export default function UpcomingEvent() {
  return (
    <section
      id="events"
      style={{
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "90px 24px",
      }}
    >
      <PixelCascade className="event-section-wrap">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "44px",
            borderBottom: "3.5px solid var(--card-border)",
            paddingBottom: "24px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <h2
            className="retron-font"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              fontWeight: 900,
              color: "var(--text-color)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Upcoming Event
          </h2>
          <div
            style={{
              backgroundColor: "#FFC20E",
              color: "#000000",
              border: "2.5px solid var(--card-border)",
              borderRadius: "0px",
              padding: "8px 18px",
              fontSize: "13px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              boxShadow: "3px 3px 0px var(--card-border)",
            }}
          >
            FALL 2026
          </div>
        </div>

        <div className="event-grid">
          <div
            style={{
              backgroundColor: "var(--card-bg)",
              border: "3.5px solid var(--card-border)",
              borderRadius: "0px",
              padding: "clamp(24px, 4vw, 44px)",
              boxShadow: "var(--card-shadow)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background:
                "linear-gradient(135deg, var(--card-bg) 0%, rgba(120,120,120,0.14) 100%)",
              position: "relative",
              minHeight: "440px",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "var(--card-bg)",
                  border: "2.5px solid var(--card-border)",
                  borderRadius: "0px",
                  padding: "6px 16px",
                  fontSize: "13px",
                  fontWeight: 900,
                  marginBottom: "24px",
                  boxShadow: "2.5px 2.5px 0px var(--card-border)",
                }}
              >
                <Sparkles size={16} color="#FACC15" />
                <span>ORIENTATION</span>
              </div>

              <h3
                className="retron-font"
                style={{
                  fontSize: "clamp(1.6rem, 2.8vw, 2.5rem)",
                  fontWeight: 900,
                  marginBottom: "18px",
                  color: "var(--text-color)",
                }}
              >
                GDG ORIENTATION 2026
              </h3>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "var(--muted-color)",
                  marginBottom: "28px",
                }}
              >
                GDG is now recruiting across multiple domains: Web Development,
                Competitive Programming, Design, Machine Learning, AI & Cloud,
                Management, Marketing, and Socials. Choose the domain that
                interests you and be a part of the team, learn new skills, and
                work on real-world projects
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "0px",
                  backgroundColor: "#FFC20E",
                  border: "3px solid var(--card-border)",
                  boxShadow: "3px 3px 0px var(--card-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000000",
                  fontWeight: 900,
                  fontSize: "15px",
                }}
              >
                GDG
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 800,
                  color: "var(--muted-color)",
                }}
              >
                Campus Auditorium & Online
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#FFC20E",
              color: "#000000",
              border: "3.5px solid var(--card-border)",
              borderRadius: "0px",
              padding: "clamp(24px, 4vw, 44px)",
              boxShadow: "var(--card-shadow)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              minHeight: "440px",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "24px",
                }}
              >
                <h3
                  className="retron-font"
                  style={{
                    fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                    fontWeight: 900,
                    lineHeight: 1.1,
                  }}
                >
                  New
                  <br />
                  Event
                </h3>
                <span
                  style={{
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    borderRadius: "0px",
                    padding: "6px 14px",
                    fontSize: "12px",
                    fontWeight: 900,
                    letterSpacing: "0.06em",
                  }}
                >
                  LIMITED SEATS
                </span>
              </div>

              <div
                style={{
                  borderTop: "2.5px dashed #000000",
                  paddingTop: "20px",
                  marginBottom: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 900,
                    letterSpacing: "0.08em",
                  }}
                >
                  DATE & TIME
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "17px",
                    fontWeight: 900,
                  }}
                >
                  <Calendar size={18} />
                  <span>OCT 10, 2026</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "17px",
                    fontWeight: 900,
                  }}
                >
                  <Clock size={18} />
                  <span>2:00 PM</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.gdgrbu.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="color-rise-btn"
              style={
                {
                  "--rise-color": "#4285F4",
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  border: "3px solid #000000",
                  borderRadius: "0px",
                  padding: "16px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontSize: "16px",
                  fontWeight: 900,
                  boxShadow: "4px 4px 0px rgba(0,0,0,0.3)",
                  width: "100%",
                } as React.CSSProperties
              }
            >
              <span>Register Now</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </PixelCascade>
    </section>
  );
}
