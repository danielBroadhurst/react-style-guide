/* @flow */
import React from "react";
import { storiesOf } from "@storybook/react";
import "./styles.css";

const content = {
  outline: "1px solid #eee",
  backgroundColor: "rgba(220, 220, 220, .6)",
  minHeight: "200px",
};
const sideNav = {
  outline: "1px solid #eee",
  backgroundColor: "rgba(171, 171, 171, .6)",
  minHeight: "200px",
};

storiesOf("Side Nav", module).add("Side Nav", () => (
  <div className="flexWrap" style={content}>
    <div className="sideNav" style={sideNav} />
    <div className="container" style={content} />
  </div>
));
