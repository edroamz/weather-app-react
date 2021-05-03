import React from "react";
import Sunny from "@svgs/cloudy-night-outline.svg";

export default function hourlyCard({ hour, temperature }) {
  return (
    <div
      className="flex-1"
      style={{
        borderRight: "1px solid #eaeaea",
      }}
    >
      <div
        className="grid items-center justify-start"
        style={{
          gridRowGap: "15px",
          width: "100%",
          gridTemplateColumns: "1fr",
        }}
      >
        <div
          className="flex items-center justify-center font-normal text-center"
          style={{
            color: "#666",
            fontSize: "0.9em",
          }}
        >
          {hour}
        </div>
        <div>
          <Sunny
            className="mx-auto"
            style={{
              height: "32px",
              width: "32px",
              strokeWidth: 24,
            }}
          ></Sunny>
        </div>
        <div
          className="flex items-center justify-center font-medium text-center"
          style={{
            fontSize: "1.1em",
          }}
        >
          {temperature}°
        </div>
      </div>
    </div>
  );
}
