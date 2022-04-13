import React from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onClick} className={classes.backdrop}></div>,
    document.getElementById("backdrop")
  );
};

export default Backdrop;
