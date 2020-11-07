import React from "react";
import { Link } from "react-router-dom";
import "./SideNavLinks.css";

function SideNavLinks() {
  return (
    <ul className="p4">
      <li className="pb3">
        <a
          href="/"
          className="block text-noUnderline whiteSpace-noWrap text-bold color-greenStarbucks"
        >
          Main Links
        </a>
        <ul className="mt1 pl3">
          <li className="mb1">
            <Link
              to="/components/Footer"
              className="child-link block text-noUnderline whiteSpace-noWrap"
            >
              Footer
            </Link>
          </li>
          <li className="mb1">
            <Link
              to="/components/Header"
              className="child-link block text-noUnderline whiteSpace-noWrap"
            >
              Header
            </Link>
          </li>
          <li className="mb1">
            <Link
              to="/components/SideNav"
              className="child-link block text-noUnderline whiteSpace-noWrap"
            >
              Side Nav
            </Link>
          </li>
          <li className="mb1">
            <Link
              to="/components/SideNavSearch"
              className="child-link block text-noUnderline whiteSpace-noWrap"
            >
              Side Nav Search
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default SideNavLinks;
