import React from "react";
import Sunny from "@svgs/sunny-outline.svg";

export default function dailyForecast() {
  const days = [
    {
      day: "Today",
      maxTemp: 27,
      minTemp: 23,
    },
    {
      day: "Monday",
      maxTemp: 27,
      minTemp: 23,
    },
    {
      day: "Monday",
      maxTemp: 27,
      minTemp: 23,
    },
    {
      day: "Monday",
      maxTemp: 27,
      minTemp: 23,
    },
    {
      day: "Monday",
      maxTemp: 27,
      minTemp: 23,
    },
    {
      day: "Monday",
      maxTemp: 27,
      minTemp: 23,
    },
    {
      day: "Monday",
      maxTemp: 27,
      minTemp: 23,
    },
  ];

  return (
    <div className="container mx-auto h-full" style={{ padding: "4em 0" }}>
      <div
        className="flex"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          gridColumnGap: "10px",
        }}
      >
        {days &&
          days.map((i, index) => {
            return (
              <div
                key={index}
                className=""
                style={
                  {
                    /*boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.05)",*/
                  }
                }
              >
                <div
                  style={{
                    display: "grid",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gridRowGap: "5px",
                    width: "100%",
                    gridTemplateColumns: "1fr",
                    border: "1px solid #eee",
                    borderRadius: "4px",
                  }}
                >
                  <div style={{ borderBottom: "1px solid #eee" }}>
                    <h3
                      className="flex--center"
                      style={{
                        textAlign: "center",
                        fontWeight: 700,
                        padding: "15px 0",
                      }}
                    >
                      {i.day}
                    </h3>
                  </div>
                  <div
                    style={{
                      padding: "20px 0",
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      rowGap: "20px",
                    }}
                  >
                    <div className="flex--center">
                      <span
                        style={{
                          minWidth: "48px",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid #eee",
                          borderRadius: "50%",
                          width: "48px",
                          height: "48px",
                          display: "inline-flex",
                        }}
                      >
                        <Sunny
                          className="mx-auto"
                          style={{
                            height: "28px",
                            width: "28px",
                            strokeWidth: 20,
                            // color: "#0070f3",
                          }}
                        ></Sunny>
                      </span>
                    </div>
                    <div style={{ textAlign: "center", fontWeight: 300 }}>
                      <p style={{ marginBottom: "5px" }}>H {i.maxTemp}°</p>
                      <p>L {i.minTemp}°</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
