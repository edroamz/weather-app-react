import React, { useEffect, useRef } from "react";
import SearchIcon from "@icons/search-outline.svg";

export default function modal({
  show,
  handleClose,
  search,
  setSearch,
  children,
}) {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    const { current: wrap } = modalRef;
    if (!wrap?.contains(event.target)) {
      handleClose();
    }
  };

  const handleEscKeyCap = (event) => {
    if (event.keyCode === 27) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKeyCap);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKeyCap);
    };
  }, []);

  if (!show) {
    document.body.removeAttribute("style");
    return null;
  } else {
    document.body.style.overflow = "hidden";

    return (
      <div className="backdrop">
        <div className="modal" ref={modalRef}>
          <header className="modal__header">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: 0,
              }}
            >
              <SearchIcon
                style={{
                  verticalAlign: "middle",
                  display: "inline-flex",
                  height: "28px",
                  width: "28px",
                  strokeWidth: 40,
                  color: "#0070f3",
                }}
              ></SearchIcon>
              <input
                type="text"
                style={{
                  width: "100%",
                  height: "4.5rem",
                  marginLeft: "25px",
                  border: 0,
                  outline: "none",
                  fontSize: "1.2rem",
                }}
                placeholder="Search city..."
                autoFocus
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
            <button onClick={handleClose}>esc</button>
          </header>
          <div className="modal__body">{children}</div>
          {/* <footer className="modal__footer">
            <button onClick={handleClose}>Close</button>
          </footer> */}
        </div>
      </div>
    );
  }
}
