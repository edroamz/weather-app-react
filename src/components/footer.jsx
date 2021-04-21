import React from "react";

export default function footer() {
  return (
    <footer
      className="bg-light-grey"
      style={{ borderTop: "1px solid #eaeaea" }}
    >
      <div>
        <div className="container mx-auto h-full" style={{ padding: "4em 0" }}>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              rowGap: "1.5em",
              textAlign: "center",
            }}
          >
            <p>
              Copyright © {new Date().getFullYear()} Eduardo R. Ambriz. All
              rights reserved.
            </p>
            <p style={{ fontWeight: 300 }}>
              This site is built with Reactjs from scratch and hosted on
              Netlify. The source code is hosted on{" "}
              <a
                style={{
                  color: "rgb(0, 118, 255)",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
                href="https://github.com/edroamz/weather-app-react"
              >
                Github
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
