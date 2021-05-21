import React from "react";
import Container from "@components/common/container.jsx";
import Paragraph from "@components/common/paragraph.jsx";
import Flex from "@components/common/flex.jsx";

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
