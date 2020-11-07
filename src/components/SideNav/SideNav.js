import React from "react";
import SideNavLinks from "../SideNavLinks/SideNavLinks";
import SidenavSearch from "../SideNavSearch/SideNavSearch";
import "./SideNav.css";

function SideNav() {
  return (
    <div>
      <nav className="side-nav">
        <div>
          <SidenavSearch></SidenavSearch>
          <SideNavLinks></SideNavLinks>
        </div>
      </nav>
    </div>
  );
}

export default SideNav;
