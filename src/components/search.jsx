import React from "react";
import SearchIcon from "@svgs/search-outline.svg";

export default function search() {
  return (
    <section>
      <div className="container mx-auto" style={{ padding: "4em 0 0 0" }}>
        <div
          className="search mx-auto"
          style={{ position: "relative", width: "590px" }}
        >
          <i>
            <SearchIcon
              style={{
                height: "24px",
                width: "24px",
                strokeWidth: 12,
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                marginLeft: "15px",
                color: "rgb(91, 112, 131)",
              }}
            ></SearchIcon>
          </i>
          <input
            className="search-input"
            type="text"
            placeholder="Search city..."
          />
        </div>
      </div>
    </section>
  );
}
