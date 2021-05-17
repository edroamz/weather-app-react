import React from "react";
import Heading from "@components/common/heading.jsx";
import HourlyCard from "@components/hourlyCard.jsx";
import WeatherIcon from "@helpers/getOpenWeatherIconHelper.jsx";
import { GetHoursFromUnixUTCTimestamp } from "@utils/dateUtils.js";

export default function hourlyForecast({ hourly }) {
  return (
    <section id="hourly-forecast">
      <div className="container mx-auto h-full py-20">
        <Heading
          level={2}
          style={{
            marginBottom: "2rem",
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          Hourly forecast
        </Heading>
        <div className="flex">
          {hourly?.slice(0, 12)?.map((i, index) => {
            return (
              <React.Fragment key={index}>
                <HourlyCard
                  hour={GetHoursFromUnixUTCTimestamp(i.dt)}
                  temp={Math.round(i.temp)}
                  icon={
                    <WeatherIcon
                      className="weather-icon"
                      iconCode={i.weather[0].icon}
                    ></WeatherIcon>
                  }
                ></HourlyCard>
                {hourly.slice(0, 12).length - 1 !== index && (
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
    </section>
  );
}
