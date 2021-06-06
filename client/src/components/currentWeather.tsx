import * as React from "react";
import Container from "./common/container";
import Paragraph from "./common/paragraph";
import LocationIcon from "@icons/navigate.svg";
import Heading from "./common/heading";
import WeatherIcon from "./../helpers/getOpenWeatherIconHelper";
import Text from "./common/text";

interface ICurrentWeatherProps {
  city: ICity;
  current: ICurrent;
}

interface ICity {
  name: string;
  country: string;
}

interface ICurrent {
  temp: number;
  pressure: number;
  humidity: number;
  feels_like: number;
  clouds: number;
  uvi: number;
  weather: IWeather[];
}

interface IWeather {
  icon: string;
  main: string;
  description: string;
}

export default function currentWeather({
  city: { name: cityName, country },
  current: { temp, pressure, humidity, feels_like, clouds, uvi, weather },
}: ICurrentWeatherProps) {
  const { icon, main, description } = weather[0];

  return (
    <section id="current-weather" className="current-weather">
      <Container>
        <div
          style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <div className="current-weather__location ">
            <LocationIcon className="current-weather__location__icon"></LocationIcon>
            <Text className="current-weather__location__text">
              {cityName}, {country}
            </Text>
          </div>
          <div style={{ marginTop: "3rem" }}></div>

          <div className="current-weather__info ">
            <div className="current-weather__info__main ">
              <Heading
                level="h2"
                className="current-weather__info__main__heading"
              >
                <WeatherIcon
                  className="weather-icon--current"
                  icon={icon}
                ></WeatherIcon>{" "}
                <Text>{Math.round(temp)}°</Text> <Text>{main}.</Text>
              </Heading>
              <Paragraph className="current-weather__info__main__description">
                {description}
              </Paragraph>

              <div className="current-weather__info__summary ">
                <Text className="current-weather__info__summary__label">
                  Pressure:{" "}
                  <Text className="current-weather__info__summary__label__value">
                    {pressure} hPa
                  </Text>
                </Text>
                <div className="current-weather__info__summary__separator">
                  —
                </div>
                <Text className="current-weather__info__summary__label">
                  Humidity:{" "}
                  <Text className="current-weather__info__summary__label__value">
                    {humidity}%
                  </Text>
                </Text>
                <div className="current-weather__info__summary__separator">
                  —
                </div>
                <Text className="current-weather__info__summary__label">
                  Feels like:{" "}
                  <Text className="current-weather__info__summary__label__value">
                    {Math.round(feels_like)}°
                  </Text>
                </Text>
                <div className="current-weather__info__summary__separator">
                  —
                </div>
                <Text className="current-weather__info__summary__label">
                  Clouds:{" "}
                  <Text className="current-weather__info__summary__label__value">
                    {clouds}%
                  </Text>
                </Text>
                <div className="current-weather__info__summary__separator">
                  —
                </div>
                <Text className="current-weather__info__summary__label">
                  UV index:{" "}
                  <Text className="current-weather__info__summary__label__value">
                    {uvi}
                  </Text>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
