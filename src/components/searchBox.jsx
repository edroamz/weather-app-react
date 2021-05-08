import React from "react";
import Icon from "@icons/search-outline.svg";

export default function searchBox() {
  function search() {
    alert("Searching...");
  }

  return (
    <div className="search mx-auto">
      <input
        className="search-input"
        type="text"
        placeholder="Search city..."
      />
      <button onClick={search}>
        <Icon></Icon>
      </button>
    </div>
  );
}
