import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0c0c0d",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#3ddc84",
              display: "flex",
            }}
          />
          <span style={{ color: "#a3a29e", fontSize: 28 }}>Available for select projects</span>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 92,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            color: "#ecebe6",
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          Prem Prajapat
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#8fa0ff",
            display: "flex",
          }}
        >
          Product designer &amp; full-stack engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
