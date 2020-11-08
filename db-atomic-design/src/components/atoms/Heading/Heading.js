import React from "react";
import "./Heading.css";

function Heading({ Tag, change, children }) {
  return <Tag>{children}</Tag>;
}

export default Heading;
