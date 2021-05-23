import React, { useState } from "react";
import Header from "@components/header.jsx";
import SearchCity from "@components/searchCity.jsx";
import CurrentWeather from "@components/currentWeather.jsx";
import Map from "@components/map.jsx";
import DailyForecast from "@components/dailyForecast.jsx";
import Footer from "@components/footer.jsx";
import Text from "@components/common/text.jsx";

import { useQuery, gql } from "@apollo/client";
import HourlyForecast from "./components/hourlyForecast";

const App = () => {
  const [apiData, setApiData] = useState({});
  const [city, setCity] = useState(null);

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

  const { lat, lon } = city || { lat: 0.0, lon: 0.0 };
  const units = "metric";

  const { loading, error, data } = useQuery(GET_WEATHER_DATA, {
    variables: { lat, lon, units },
    onCompleted: ({ getWeatherData }) => {
      console.log(getWeatherData);
      setApiData(getWeatherData);
    },
  });

  const renderAppContent = () => {
    if (error) return <Text>{`Error! ${error.message}`}</Text>;

    if (loading) return <Text>Loading...</Text>;

    if (apiData && city)
      return (
        <>
          <CurrentWeather
            city={city}
            current={apiData.current}
          ></CurrentWeather>
          <HourlyForecast hourly={apiData.hourly}></HourlyForecast>
          <Map lat={lat} lng={lon}></Map>
          <DailyForecast daily={apiData.daily}></DailyForecast>
        </>
      );
  };

  return (
    <>
      <Header></Header>
      <main>
        <SearchCity setCity={setCity}></SearchCity>
        {renderAppContent()}
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
