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
          background: "#111110",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#d8a13a",
              display: "flex",
            }}
          />
          <span style={{ color: "#f4f2ec", fontSize: 28, fontWeight: 600 }}>PREM</span>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 76,
            fontWeight: 600,
            color: "#f4f2ec",
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
            color: "#d8a13a",
            fontStyle: "italic",
            display: "flex",
          }}
        >
          UI/UX &amp; Backend Builder
        </div>
      </div>
    ),
    { ...size }
  );
}
