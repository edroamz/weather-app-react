import React, { useState, useEffect } from "react";
import SearchBox from "@components/searchBox.jsx";
import HourlyCard from "@components/hourlyCard.jsx";
import DailyCard from "@components/dailyCard.jsx";
import Map from "@components/map.jsx";
import hourlyForecast from "./data/hourlyForecast.json";
import dailyForecast from "./data/dailyForecast.json";
import { RoundNumber } from "@utils/mathUtils.js";
import { GetUTCHoursFromUnixTimestamp } from "@utils/dateUtils.js";
import WeatherIcon from "@helpers/getOpenWeatherIconHelper.jsx";

const App = () => {
  const [apiData, setApiData] = useState({});
  const [apiAllData, setApiAllData] = useState({});
  const [city, setCity] = useState({
    name: "London",
    lat: 51.5085,
    lon: -0.1257,
  });

  const apiKey = process.env.API_KEY;
  const apiUri = process.env.API_URI;
  const units = "metric";

  const currentWeatherApiUrl = `${apiUri}/weather?q=${city.name}&appid=${apiKey}&units=${units}`;
  const oneCallApiUrl = `${apiUri}/onecall?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=${units}`;

  useEffect(async () => {
    await fetch(currentWeatherApiUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((resp) => resp.json())
      .then(function (data) {
        setApiData(data);
      })
      .catch(function (error) {
        console.log(error);
      });

    await fetch(oneCallApiUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((resp) => resp.json())
      .then(function (data) {
        setApiAllData(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentWeatherApiUrl, oneCallApiUrl]);

  return (
    <>
      <header>
        <div
          className="container mx-auto flex items-center justify-center"
          style={{ height: "100%" }}
        >
          <p style={{ color: "#fff" }}>
            This site is built with Reactjs & Webpack from scratch and hosted on
            Netlify. The source code is hosted on{" "}
            <a
              className=""
              style={{
                color: "#00f6ff",
                textDecoration: "none",
              }}
              href="https://github.com/edroamz/weather-app-react"
            >
              Github
            </a>
            .
          </p>
        </div>
      </header>
      <main>
        <section id="search">
          <div className="container mx-auto" style={{ paddingTop: "3rem" }}>
            <SearchBox></SearchBox>
          </div>
        </section>
        {apiData && apiData.main && apiData.weather && (
          <section id="current-weather">
            <div
              className="container mx-auto h-full"
              style={{ paddingTop: "2.5rem" }}
            >
              <div
                className="grid justify-center text-center"
                style={{
                  gridTemplateColumns: "1fr",
                  margin: "0 auto",
                  rowGap: "15px",
                }}
              >
                <div className="flex items-center justify-center">
                  {/* <Icon
                    style={{
                      height: "38px",
                      width: "38px",
                    }}
                  ></Icon> */}
                  {apiData && apiData.main && apiData.weather && (
                    <WeatherIcon
                      iconCode={apiData.weather[0].icon}
                      style={{
                        height: "38px",
                        width: "38px",
                      }}
                    ></WeatherIcon>
                  )}
                </div>
                <div className="grid text-left" style={{ rowGap: "15px" }}>
                  <h2
                    className=" text-center"
                    style={{
                      fontSize: "2rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {RoundNumber(apiData.main.temp)}° {apiData.weather[0].main}.
                  </h2>
                  <p
                    style={{
                      fontSize: "1.25rem",
                      marginBottom: "10px",
                      textTransform: "capitalize",
                    }}
                  >
                    {apiData.weather[0].description}
                  </p>

                  <div
                    className="grid items-center justify-center"
                    style={{
                      gridTemplateColumns: "repeat(9, auto)",
                      columnGap: "0.75rem",
                      fontSize: "0.95rem",
                    }}
                  >
                    <div>
                      <span
                        className=""
                        style={{
                          fontSize: "1.1em",
                        }}
                      >
                        Pressure:{" "}
                        <span
                          className=""
                          style={{
                            marginLeft: "0.35em",
                            color: "#666",
                          }}
                        >
                          {apiData.main.pressure} hPa
                        </span>
                      </span>
                    </div>
                    <div style={{ color: "hsl(203deg 18% 65%)" }}>—</div>
                    <div>
                      <span
                        className=""
                        style={{
                          fontSize: "1.1em",
                        }}
                      >
                        Humidity:{" "}
                        <span
                          className=""
                          style={{
                            marginLeft: "0.35em",
                            color: "#666",
                          }}
                        >
                          {apiData.main.humidity}%
                        </span>
                      </span>
                    </div>
                    <div style={{ color: "hsl(203deg 18% 65%)" }}>—</div>
                    <div>
                      <span
                        className=""
                        style={{
                          fontSize: "1.1em",
                        }}
                      >
                        High:{" "}
                        <span
                          className=""
                          style={{
                            marginLeft: "0.35em",
                            color: "#666",
                          }}
                        >
                          {RoundNumber(apiData.main.temp_max)}°
                        </span>
                      </span>
                    </div>
                    <div style={{ color: "hsl(203deg 18% 65%)" }}>—</div>
                    <div>
                      <span
                        className=""
                        style={{
                          fontSize: "1.1em",
                        }}
                      >
                        Low:{" "}
                        <span
                          className=""
                          style={{
                            marginLeft: "0.35em",
                            color: "#666",
                          }}
                        >
                          {RoundNumber(apiData.main.temp_min)}°
                        </span>
                      </span>
                    </div>
                    <div style={{ color: "hsl(203deg 18% 65%)" }}>—</div>
                    <div>
                      <span
                        className=""
                        style={{
                          fontSize: "1.1em",
                        }}
                      >
                        Feels like:{" "}
                        <span
                          className=""
                          style={{
                            marginLeft: "0.35em",
                            color: "#666",
                          }}
                        >
                          {RoundNumber(apiData.main.feels_like)}°
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section id="hourly-forecast">
          <div className="container mx-auto h-full py-20">
            <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>
              Hourly forecast
            </h2>
            <div className="flex">
              {apiAllData &&
                apiAllData.hourly &&
                apiAllData.hourly.slice(0, 12).map((i, index) => {
                  return (
                    <HourlyCard
                      key={index}
                      hour={GetUTCHoursFromUnixTimestamp(i.dt)}
                      temperature={RoundNumber(i.temp)}
                      icon={i.weather[0].icon}
                    ></HourlyCard>
                  );
                })}
            </div>
          </div>
        </section>
        <Map></Map>
        <section id="daily-forecast">
          <div className="container mx-auto h-full py-20">
            <div
              className="grid"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                gridColumnGap: "10px",
              }}
            >
              {dailyForecast &&
                dailyForecast.map((i, index) => {
                  return (
                    <DailyCard
                      key={index}
                      day={i.day}
                      maxTemp={i.maxTemp}
                      minTemp={i.minTemp}
                    >
                      daily
                    </DailyCard>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <footer
        className="bg-light-grey"
        style={{ borderTop: "1px solid #eaeaea" }}
      >
        <div>
          <div
            className="container mx-auto h-full"
            style={{ padding: "2em 0" }}
          >
            <div className="grid items-center justify-center text-center">
              <p>
                Copyright © {new Date().getFullYear()} Eduardo Rodriguez. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
