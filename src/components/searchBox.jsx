import React from "react";
import Icon from "@icons/search-outline.svg";

export default function searchBox() {
  function search() {
    alert("Searching...");
  }

  return (
    <div className="searchbox">
      <input
        className="searchbox__input"
        type="text"
        placeholder="Search city..."
      />
      <button className="searchbox__btn" onClick={search}>
        <Icon className="searchbox__btn__icon"></Icon>
      </button>
    </div>
  );
}
