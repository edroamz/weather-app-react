import React from "react";
import Sunny from "@svgs/sunny-outline.svg";

export default function currentlyWeather() {
  return (
    <section>
      <div
        className="container mx-auto h-full"
        style={{ padding: "4em 0 1em 0" }}
      >
        <div
          style={{
            display: "grid",
            textAlign: "center",
            justifyContent: "center",
            gridTemplateColumns: "1fr",
            margin: "0 auto",
            rowGap: "15px",
          }}
        >
          <div className="flex--center">
            <Sunny
              style={{
                height: "38px",
                width: "38px",
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
                gridTemplateColumns: "repeat(3, auto)",
                columnGap: "2.5em",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: "1.1em",
                  }}
                >
                  High:{" "}
                  <span
                    style={{
                      marginLeft: "0.35em",
                      fontWeight: 400,
                      color: "#666",
                    }}
                  >
                    23°
                  </span>
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: "1.1em",
                  }}
                >
                  Low:{" "}
                  <span
                    style={{
                      marginLeft: "0.35em",
                      fontWeight: 400,
                      color: "#666",
                    }}
                  >
                    20°
                  </span>
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: "1.1em",
                  }}
                >
                  Feels like:{" "}
                  <span
                    style={{
                      marginLeft: "0.35em",
                      fontWeight: 400,
                      color: "#666",
                    }}
                  >
                    27°
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
