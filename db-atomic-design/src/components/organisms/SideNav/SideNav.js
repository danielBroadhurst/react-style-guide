import React from "react";
import SideNavGroup from "../../atoms/SideNavGroup/SideNavGroup";
import SidenavSearch from "../../molecules/SideNavSearch/SideNavSearch";
import "./SideNav.css";

function SideNav({ links }) {
  return (
    <div>
      <nav className="side-nav">
        <div>
          <SidenavSearch></SidenavSearch>
          <SideNavGroup navLinks={links}></SideNavGroup>
        </div>
      </nav>
    </div>
  );
}

export default SideNav;
