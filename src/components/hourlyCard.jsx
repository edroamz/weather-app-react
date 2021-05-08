import React from "react";
import WeatherIcon from "@helpers/getOpenWeatherIconHelper.jsx";

export default function hourlyCard({ hour, temperature, icon }) {
  return (
    <>
      <div
        className="flex-1"
        // style={{
        //   borderRight: "1px solid #eaeaea",
        // }}
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
            className="flex items-center justify-center text-center"
            style={{
              color: "#666",
              fontSize: "0.9em",
            }}
          >
            {hour}
          </div>
          <div>
            <WeatherIcon
              className="mx-auto"
              iconCode={icon}
              style={{
                height: "32px",
                width: "32px",
              }}
            ></WeatherIcon>
          </div>
          <div
            className="flex items-center justify-center text-center"
            style={{
              fontSize: "1.1em",
            }}
          >
            {temperature}°
          </div>
        </div>
      </div>
      <span
        style={{
          height: "42px",
          width: "1px",
          alignSelf: "center",
          backgroundColor: "#eaeaea",
        }}
      ></span>
    </>
  );
}
