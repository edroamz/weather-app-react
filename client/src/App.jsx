import React, { useState, useEffect } from "react";
import SearchBox from "@components/searchBox.jsx";
import HourlyCard from "@components/hourlyCard.jsx";
import DailyCard from "@components/dailyCard.jsx";
import Map from "@components/map.jsx";
import {
  GetHoursFromUnixUTCTimestamp,
  GetShortWeekdayFromUnixUTCTimestamp,
} from "@utils/dateUtils.js";
import WeatherIcon from "@helpers/getOpenWeatherIconHelper.jsx";
import LocationIcon from "@icons/navigate.svg";
import { Loader } from "@googlemaps/js-api-loader";
import { useQuery, gql } from "@apollo/client";

const App = () => {
  const [apiData, setApiData] = useState({});
  const [city, setCity] = useState({
    id: 5128581,
    name: "New York",
    lat: 40.7143,
    lon: -74.006,
  });

  const units = "metric";
  const { lat, lon } = city;
  const googleMapsKey = process.env.API_KEY_GOOGLE_MAPS;

  const mapRef = React.useRef();
  let map = {};
  const mapOptions = {
    center: { lat, lng: lon },
    zoom: 10,
  };

  useEffect(async () => {
    const GMapsLoader = new Loader({
      apiKey: googleMapsKey,
      version: "weekly",
    });
    GMapsLoader.load()
      .then(() => {
        map = new google.maps.Map(mapRef.current, mapOptions);
        new google.maps.Marker({
          position: { lat, lng: lon },
          map,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  const GET_WEATHER_DATA = gql`
    query GetWeatherData($lat: Float!, $lon: Float!, $units: String!) {
      getWeatherData(lat: $lat, lon: $lon, units: $units) {
        lat
        lon
        current {
          dt
          temp
          feels_like
          pressure
          humidity
          uvi
          clouds
          weather {
            main
            description
            icon
          }
        }
        hourly {
          dt
          temp
          weather {
            icon
          }
        }
        daily {
          dt
          temp {
            min
            max
          }
          weather {
            icon
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_WEATHER_DATA, {
    variables: { lat, lon, units },
    onCompleted: (data) => {
      console.log(data.getWeatherData);
      setApiData(data.getWeatherData);
    },
  });

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

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
          <div className="container mx-auto">
            <SearchBox setCity={setCity}></SearchBox>
          </div>
        </section>
        {apiData?.current?.weather && (
          <section id="current-weather">
            <div
              className="container mx-auto"
              style={{
                paddingTop: "2rem",
                textAlign: "center",
                fontSize: "1.1em",
              }}
            >
              <LocationIcon
                style={{
                  display: "inline-block",
                  marginRight: "5px",
                  height: "14px",
                  width: "14px",
                }}
              ></LocationIcon>
              <span
                style={{
                  textDecorationLine: "underline",
                  textDecorationThickness: "from-font",
                }}
              >
                {city.name}
              </span>
            </div>
            <div
              className="container mx-auto h-full"
              style={{ paddingTop: "3rem" }}
            >
              <div
                className="grid justify-center text-center"
                style={{
                  gridTemplateColumns: "1fr",
                  margin: "0 auto",
                  rowGap: "15px",
                }}
              >
                <div className="grid text-left" style={{ rowGap: "15px" }}>
                  <h2
                    className=" text-center"
                    style={{
                      fontSize: "2rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {apiData?.current?.weather && (
                      <WeatherIcon
                        className="weather-icon--current"
                        iconCode={apiData.current.weather[0].icon}
                      ></WeatherIcon>
                    )}{" "}
                    {Math.round(apiData.current.temp)}°{" "}
                    {apiData.current.weather[0].main}.
                  </h2>
                  <p
                    style={{
                      fontSize: "1.25rem",
                      textTransform: "capitalize",
                    }}
                  >
                    {apiData.current.weather[0].description}
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
                          {apiData.current.pressure} hPa
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
                          {apiData.current.humidity}%
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
                          {Math.round(apiData.current.feels_like)}°
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
                        Clouds:{" "}
                        <span
                          className=""
                          style={{
                            marginLeft: "0.35em",
                            color: "#666",
                          }}
                        >
                          {apiData.current.clouds}%
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
                        UV index:{" "}
                        <span
                          className=""
                          style={{
                            marginLeft: "0.35em",
                            color: "#666",
                          }}
                        >
                          {apiData.current.uvi}
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
            <h2
              style={{
                marginBottom: "2rem",
                textAlign: "center",
                fontSize: "2rem",
              }}
            >
              Hourly forecast
            </h2>
            <div className="flex">
              {apiData?.hourly?.slice(0, 12)?.map((i, index) => {
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
                    {apiData.hourly.slice(0, 12).length - 1 !== index && (
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
        {/* <Map></Map> */}
        <section id="map" ref={mapRef} className="map"></section>
        <section id="daily-forecast">
          <div className="container mx-auto h-full py-20">
            <h2
              style={{
                marginBottom: "2rem",
                textAlign: "center",
                fontSize: "2rem",
              }}
            >
              Daily forecast
            </h2>
            <div
              className="grid"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                gridColumnGap: "10px",
              }}
            >
              {apiData?.daily?.map((i, index) => {
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
