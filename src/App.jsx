import React from "react";
import Search from "@components/search.jsx";
import HourlyForecast from "@components/hourlyForecast.jsx";
import DailyForecast from "@components/dailyForecast.jsx";
import Map from "@components/map.jsx";
import CurrentlyWeather from "@components/currentlyWeather.jsx";
import Footer from "@components/footer.jsx";

const App = () => (
  <>
    <main>
      <Search></Search>
      <CurrentlyWeather></CurrentlyWeather>
      <section>
        <HourlyForecast></HourlyForecast>
      </section>
      <Map></Map>
      <DailyForecast></DailyForecast>
    </main>
    <Footer></Footer>
  </>
);

export default App;
