import * as React from "react";
import Container from "./common/container";
import Paragraph from "./common/paragraph";
import Flex from "./common/flex";

export default function header() {
  return (
    <header className="header">
      <Container>
        <div
          style={{
            padding: "1em",
          }}
        >
          <Flex items="center" justify="center">
            <Paragraph className="header__paragraph">
              This site is built with Reactjs & Webpack from scratch. The source
              code is hosted on{" "}
              <a
                className="header__paragraph__link"
                href="https://github.com/edroamz/weather-app-react"
              >
                Github
              </a>
              .
            </Paragraph>
          </Flex>
        </div>
      </Container>
    </header>
  );
}
