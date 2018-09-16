import React from "react";
import "./Title.css";

const Title = props => (
  <div>
    <h1 className="title">{props.children}</h1>
    <h1 className="title">Score: {props.score}</h1>
    <h1 className="title">Top Score: {props.topscore}</h1>
    <br />
  </div>
);

export default Title;
