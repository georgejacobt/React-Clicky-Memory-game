import React from "react";
import "./Wrapper.css";
import "./animate.css";

const Wrapper = props => (
  <div className={props.animateClass}>{props.children}</div>
);

export default Wrapper;
