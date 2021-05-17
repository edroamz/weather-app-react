import React from "react";
import Container from "@components/common/container.jsx";
import Paragraph from "@components/common/paragraph.jsx";

export default function header() {
  return (
    <header className="header">
      <div
        style={{
          paddingTop: "1em",
          paddingBottom: "1em",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          height: "100%",
        }}
      >
        <Container
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paragraph className="header__paragraph">
            This site is built with Reactjs & Webpack from scratch and hosted on
            Netlify. The source code is hosted on{" "}
            <a
              className="header__paragraph__link"
              href="https://github.com/edroamz/weather-app-react"
            >
              Github
            </a>
            .
          </Paragraph>
        </Container>
      </div>
    </header>
  );
}
