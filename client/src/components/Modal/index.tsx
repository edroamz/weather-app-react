import * as React from "react";
import { useEffect, useRef } from "react";

interface IModalProps {
  show: boolean;
  handleClose: CallableFunction;
  children: any;
  header?: JSX.Element | null;
  footer?: JSX.Element | null;
}

export default function modal({
  show,
  handleClose,
  children,
  header = null,
  footer = null,
}: IModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    const { current } = modalRef;

    if (!current?.contains(event.target)) {
      handleClose();
    }
  };

  const handleEscKeyCap = (event: KeyboardEvent) => {
    if (event.key == "Escape" || event.code == "Escape") {
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
                onClick={() => handleClose()}
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
