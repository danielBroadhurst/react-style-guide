import React from "react";
import "./MainContent.css";

function MainContent(props) {
  return <div className="main-content">{props.children}</div>;
}

export default MainContent;
