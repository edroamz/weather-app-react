import React from "react";
import Icon from "@svgs/search-outline.svg";

export default function searchBox() {
  return (
    <div
      className="search mx-auto"
      style={{ position: "relative", width: "590px" }}
    >
      <i>
        <Icon
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
        ></Icon>
      </i>
      <input
        className="search-input"
        type="text"
        placeholder="Search city..."
      />
    </div>
  );
}
