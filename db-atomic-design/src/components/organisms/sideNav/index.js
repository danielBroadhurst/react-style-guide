import React from "react";
import NavGroup from "../../atoms/navGroup";
import NavSearch from "../../molecules/navSearch";
import "../../templates/patternLibrary/styles.css";

function SideNav({ links }) {
  return (
    <nav className="sideNav">
      <NavSearch></NavSearch>
      <NavGroup links={links}></NavGroup>
    </nav>
  );
}

export default SideNav;
