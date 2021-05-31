import React from "react";
import Heading from "@components/common/heading.jsx";
import DailyCard from "@components/dailyCard.jsx";
import { GetShortWeekdayFromUnixUTCTimestamp } from "@utils/dateUtils.js";
import WeatherIcon from "@helpers/getOpenWeatherIconHelper.jsx";
import Container from "@components/common/container.jsx";

export default function dailyForecast({ daily }) {
  return (
    <section id="daily-forecast" className="daily-forecast">
      <Container>
        <div
          style={{
            paddingTop: "6rem",
            paddingBottom: "4rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <Heading level={2} className="daily-forecast__heading">
            Daily forecast
          </Heading>
          <div className="daily-forecast__wrapper">
            {daily?.map((i, index) => {
              const weekday =
                index === 0
                  ? "Today"
                  : GetShortWeekdayFromUnixUTCTimestamp(i.dt);

              return (
                <DailyCard
                  key={index}
                  weekday={weekday}
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
      </Container>
    </section>
  );
}
