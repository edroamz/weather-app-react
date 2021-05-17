import React from "react";
import Heading from "@components/common/heading.jsx";
import DailyCard from "@components/dailyCard.jsx";
import { GetShortWeekdayFromUnixUTCTimestamp } from "@utils/dateUtils.js";
import WeatherIcon from "@helpers/getOpenWeatherIconHelper.jsx";

export default function dailyForecast({ daily }) {
  return (
    <section id="daily-forecast">
      <div className="container mx-auto h-full py-20">
        <Heading
          level={2}
          style={{
            marginBottom: "2rem",
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          Daily forecast
        </Heading>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            gridColumnGap: "10px",
          }}
        >
          {daily?.map((i, index) => {
            return (
              <DailyCard
                key={index}
                weekday={GetShortWeekdayFromUnixUTCTimestamp(i.dt)}
                maxTemp={Math.round(i.temp.max)}
                minTemp={Math.round(i.temp.min)}
                icon={
                  <WeatherIcon
                    className="weather-icon"
                    iconCode={i.weather[0].icon}
                  ></WeatherIcon>
                }
              ></DailyCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
