import React from "react";
import Container from "@components/common/container.jsx";
import SearchBox from "@components/searchBox.jsx";

export default function searchCity({ setCity }) {
  return (
    <section id="search">
      <div style={{ padding: "0 1rem" }}>
        <Container>
          <SearchBox setCity={setCity}></SearchBox>
        </Container>
      </div>
    </section>
  );
}
