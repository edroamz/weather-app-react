import React from "react";
import Sunny from "@svgs/cloudy-night-outline.svg";

export default function currently() {
  return (
    <section>
      <div className="container mx-auto h-full" style={{ padding: "4em 0" }}>
        <div
          style={{
            display: "grid",
            textAlign: "center",
            justifyContent: "center",
            gridTemplateColumns: "1fr",
            margin: "0 auto",
            rowGap: "25px",
          }}
        >
          <div className="flex--center">
            <Sunny
              style={{
                height: "38px",
                width: "38px",
                strokeWidth: 24,
                color: "#0076ff",
              }}
            ></Sunny>
          </div>
          <div style={{ display: "grid", rowGap: "15px", textAlign: "left" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: 1.25,
                textAlign: "center",
              }}
            >
              27° Clear sky.
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                columnGap: "2.5em",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ fontWeight: 300 }}>
                <span style={{ fontWeight: 500 }}>High:</span> 23°
              </div>
              <div style={{ fontWeight: 300 }}>
                <span style={{ fontWeight: 500 }}>Low:</span> 20°
              </div>
              <div style={{ fontWeight: 300 }}>
                <span style={{ fontWeight: 500 }}>Feels like:</span> 27°
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
