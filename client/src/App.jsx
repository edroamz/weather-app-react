import React, { useState } from "react";
import Header from "@components/header.jsx";
import SearchCity from "@components/searchCity.jsx";
import CurrentWeather from "@components/currentWeather.jsx";
import Map from "@components/map.jsx";
import DailyForecast from "@components/dailyForecast.jsx";
import Footer from "@components/footer.jsx";

import { useQuery, gql } from "@apollo/client";
import HourlyForecast from "./components/hourlyForecast";

const App = () => {
  const [apiData, setApiData] = useState({});
  const [city, setCity] = useState({
    id: 5128581,
    name: "New York",
    country: "US",
    lat: 40.7143,
    lon: -74.006,
  });

  const { lat, lon } = city;
  const units = "metric";

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

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Header></Header>
      <main>
        <SearchCity setCity={setCity}></SearchCity>
        {city && apiData?.current?.weather && (
          <CurrentWeather
            city={city}
            current={apiData.current}
          ></CurrentWeather>
        )}
        {apiData?.hourly && (
          <HourlyForecast hourly={apiData.hourly}></HourlyForecast>
        )}

        <Map lat={lat} lng={lon}></Map>
        {apiData?.daily && (
          <DailyForecast daily={apiData.daily}></DailyForecast>
        )}
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
