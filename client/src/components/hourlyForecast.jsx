import React from "react";
import Heading from "@components/common/heading.jsx";
import Container from "@components/common/container.jsx";
import Text from "@components/common/text.jsx";
import HourlyCard from "@components/hourlyCard.jsx";
import WeatherIcon from "@helpers/getOpenWeatherIconHelper.jsx";
import { GetHoursFromUnixUTCTimestamp } from "@utils/dateUtils.js";

export default function hourlyForecast({ hourly }) {
  return (
    <section id="hourly-forecast" className="hourly-forecast">
      <div
        style={{
          padding: "5em 0",
        }}
      >
        <Container>
          <div className=" mx-auto h-full">
            <Heading
              level={2}
              style={{
                marginBottom: "2rem",
                textAlign: "center",
                fontSize: "2rem",
                padding: "0 1rem",
              }}
            >
              Hourly forecast
            </Heading>
          </div>
        </Container>
        <div style={{ position: "relative" }}>
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff,hsla(0,0%,100%,0))",
              width: "56px",
              height: "100%",
              display: "block",
              position: "absolute",
              left: 0,
              zIndex: 10,
            }}
          ></div>
          <div
            style={{
              backgroundImage:
                "linear-gradient(to left, #fff,hsla(0,0%,100%,0))",
              width: "56px",
              height: "100%",
              display: "block",
              position: "absolute",
              right: 0,
              zIndex: 10,
            }}
          ></div>
          <div
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              maxWidth: "1980px",
              margin: "0 auto",
              padding: "0 0 1rem",
            }}
          >
            <div style={{ display: "inline-flex", padding: "0 2rem" }}>
              {hourly?.map((i, index) => {
                return (
                  <React.Fragment key={index}>
                    <HourlyCard
                      hour={
                        index === 0 ? "Now" : GetHoursFromUnixUTCTimestamp(i.dt)
                      }
                      temp={Math.round(i.temp)}
                      icon={
                        <WeatherIcon
                          className="weather-icon"
                          iconCode={i.weather[0].icon}
                        ></WeatherIcon>
                      }
                    ></HourlyCard>
                    {hourly.length - 1 !== index && (
                      <span
                        style={{
                          height: "42px",
                          width: "1px",
                          alignSelf: "center",
                          backgroundColor: "#eaeaea",
                        }}
                      ></span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
