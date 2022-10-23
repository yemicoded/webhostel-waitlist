import React from "react";
import ReactDOM from "react-dom";
import { clx } from "../utils/clx";

export default function Modal({ isOpen, onclick, classname, children }) {
  const classes = clx("absolute w-full h-full bg-black/20 inset-0", classname);
  return ReactDOM.createPortal(
    isOpen && <div className={classes} onClick={onclick}>{children}</div>,
    document.getElementById("signup-modal")
  );
}
