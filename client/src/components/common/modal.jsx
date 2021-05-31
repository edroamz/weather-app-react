import React, { useEffect, useRef } from "react";

export default function modal({
  show,
  handleClose,
  children,
  header = null,
  footer = null,
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
          {!header ? null : (
            <header className="modal__header">
              {header}
              <button
                className="modal__header__btn-close"
                onClick={handleClose}
              >
                cancel
              </button>
            </header>
          )}
          <div className="modal__body">{children}</div>
          {!footer ? null : <footer className="modal__footer">{footer}</footer>}
        </div>
      </div>
    );
  }
}
