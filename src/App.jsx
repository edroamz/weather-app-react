import React from "react";
import Search from "@components/search.jsx";
import HourlySummary from "@components/hourlySummary.jsx";
import DailyForecast from "@components/dailyForecast.jsx";
import Map from "@components/map.jsx";
import Currently from "@components/currently.jsx";
import Footer from "@components/footer.jsx";

const App = () => (
  <div>
    <Search></Search>
    <Currently></Currently>
    <HourlySummary></HourlySummary>
    <DailyForecast></DailyForecast>
    <Map></Map>
    <Footer></Footer>
  </div>
);

export default App;
