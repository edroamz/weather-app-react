import * as React from "react";
import Container from "./common/container";
import Paragraph from "./common/paragraph";

export default function header() {
  return (
    <header className="header">
      <Container>
        <div
          style={{
            padding: "1em",
          }}
        >
          <div className="header-box">
            <Paragraph className="header-box__paragraph">
              This site is built with Reactjs & Webpack from scratch. The source
              code is hosted on{" "}
              <a
                className="header-box__paragraph__link"
                href="https://github.com/edroamz/weather-app-react"
              >
                Github
              </a>
              .
            </Paragraph>
          </div>
        </div>
      </Container>
    </header>
  );
}
