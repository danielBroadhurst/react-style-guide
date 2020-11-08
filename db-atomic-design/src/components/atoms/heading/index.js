import React from "react";

function Heading({ Tag, size = "large", children }) {
  return <Tag className={"heading--" + size}>{children}</Tag>;
}

export default Heading;
