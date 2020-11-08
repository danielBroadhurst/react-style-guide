import React from "react";

function Heading({ Tag, classes, children }) {
  return <Tag className={classes}>{children}</Tag>;
}

export default Heading;
