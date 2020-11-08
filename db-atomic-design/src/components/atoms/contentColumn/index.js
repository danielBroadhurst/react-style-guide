import React from "react";
import "./styles.css";

const ContentColumn = ({ size = "medium", children }) => {
  return (
    <div className={"contentColumn mx-auto contentColumn--" + size}>
      {children}
    </div>
  );
};

export default ContentColumn;
