import React from "react";
import "./Title.css";

const Title = props => (
  <div>
    <h1 className="title">{props.children}</h1>
    <h2 className="title">Score: {props.score}</h2>
    <h2 className="title">Top Score: {props.topscore}</h2>
    {/* <h2 className="title">Past Click: {props.pastClickId}</h2> */}
    <br />
  </div>
);

export default Title;
