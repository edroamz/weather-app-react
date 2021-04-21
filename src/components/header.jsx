import React from "react";
import Logo from "@svgs/logo.svg";

export default function header() {
  return (
    <header style={{ borderBottom: "1px solid #eaeaea" }}>
      <div className="container mx-auto h-full" style={{ padding: "1em 0" }}>
        <div className="flex">
          <div className="flex-1">
            <Logo
              style={{ width: "38px", height: "38px", display: "inline-block" }}
            ></Logo>
          </div>
          <div className="flex-1">
            <nav className="h-full" style={{ padding: "0 2em" }}>
              <ul
                className="flex--center h-full"
                style={{
                  margin: 0,
                  listStyle: "none",
                  padding: 0,
                  color: "rgb(107,114,128)",
                }}
              >
                <li className="flex-auto">Forecast</li>
                <li className="flex-auto">Maps</li>
                <li className="flex-auto">News</li>
              </ul>
            </nav>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </header>
  );
}
