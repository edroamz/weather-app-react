import React from "react";
import Header from "@components/header.jsx";
import Search from "@components/search.jsx";
import HourlySummary from "@components/hourlySummary.jsx";
import DailyForecast from "@components/dailyForecast.jsx";
import Map from "@components/map.jsx";
import Currently from "@components/currently.jsx";
import Footer from "@components/footer.jsx";

const App = () => (
  <>
    <Header></Header>
    <main>
      <Search></Search>
      <Currently></Currently>
      <section style={{ borderTop: "1px solid #eaeaea" }}>
        <HourlySummary></HourlySummary>
      </section>
      <Map></Map>
      <DailyForecast></DailyForecast>
    </main>
    <Footer></Footer>
  </>
);

export default App;
