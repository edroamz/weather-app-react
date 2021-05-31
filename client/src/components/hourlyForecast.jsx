import React, { Fragment } from "react";
import Heading from "@components/common/heading.jsx";
import Container from "@components/common/container.jsx";
import TransparentBox from "@components/common/transparentBox.jsx";
import ScrollableBox from "@components/common/scrollableBox.jsx";
import VerticalLineSeparator from "@components/common/verticalLineSeparator.jsx";
import HourlyCard from "@components/hourlyCard.jsx";
import WeatherIcon from "@helpers/getOpenWeatherIconHelper.jsx";
import { GetHoursFromUnixUTCTimestamp } from "@utils/dateUtils.js";

export default function hourlyForecast({ hourly }) {
  return (
    <section id="hourly-forecast" className="hourly-forecast">
      <div
        style={{
          padding: "5rem 0 2rem",
        }}
      >
        <Container>
          <div style={{ padding: "0 1rem" }}>
            <Heading level={2} className="hourly-forecast__heading">
              Hourly forecast
            </Heading>
          </div>
        </Container>
        <div style={{ position: "relative" }}>
          <TransparentBox from="left" to="right"></TransparentBox>
          <TransparentBox from="right" to="left"></TransparentBox>
          <ScrollableBox>
            <div className="hourly-forecast__wrapper">
              {hourly?.map((i, index) => {
                const hour =
                  index === 0 ? "Now" : GetHoursFromUnixUTCTimestamp(i.dt);
                const temp = Math.round(i.temp);
                const icon = (
                  <WeatherIcon
                    className="weather-icon"
                    iconCode={i.weather[0].icon}
                  ></WeatherIcon>
                );

                return (
                  <Fragment key={index}>
                    <HourlyCard
                      hour={hour}
                      temp={temp}
                      icon={icon}
                    ></HourlyCard>
                    {hourly.length - 1 !== index && (
                      <VerticalLineSeparator></VerticalLineSeparator>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </ScrollableBox>
        </div>
      </div>
    </section>
  );
}
