import React from "react";
import Sunny from "@svgs/sunny-outline.svg";

export default function hourlySummary() {
  const hours = [
    {
      hour: 11,
      temperature: 27,
    },
    {
      hour: 12,
      temperature: 27,
    },
    {
      hour: 13,
      temperature: 27,
    },
    {
      hour: 14,
      temperature: 27,
    },
    {
      hour: 15,
      temperature: 27,
    },
    {
      hour: 16,
      temperature: 27,
    },
    {
      hour: 17,
      temperature: 27,
    },
    {
      hour: 18,
      temperature: 27,
    },
    {
      hour: 19,
      temperature: 27,
    },
    {
      hour: 20,
      temperature: 27,
    },
    {
      hour: 21,
      temperature: 27,
    },
    {
      hour: 22,
      temperature: 27,
    },
  ];

  return (
    <div className="container mx-auto h-full" style={{ padding: "3em 0" }}>
      <div className="flex">
        {hours &&
          hours.map((i, index) => {
            return (
              <div
                key={index}
                className="flex-1"
                style={{
                  borderRight: "1px solid #eaeaea",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gridRowGap: "10px",
                    width: "100%",
                    gridTemplateColumns: "1fr",
                  }}
                >
                  <div
                    className="flex--center"
                    style={{ textAlign: "center", fontWeight: 700 }}
                  >
                    {i.hour}:00
                  </div>
                  <div>
                    <Sunny
                      className="mx-auto"
                      style={{
                        height: "32px",
                        width: "32px",
                        strokeWidth: 24,
                        color: "#666",
                      }}
                    ></Sunny>
                  </div>
                  <div
                    className="flex--center"
                    style={{ textAlign: "center", fontWeight: 300 }}
                  >
                    {i.temperature}°
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
