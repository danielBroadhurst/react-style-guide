import React from "react";
import SideNavLinks from "../SideNavLink/SideNavLinks";
import "./SideNavGroup.css";

function SideNavGroup({ navLinks }) {
  return (
    <ul className="p4">
      {navLinks &&
        navLinks.map((link, id) => {
          return (
            <li className="pb3" key={id}>
              <a
                href={link.link}
                className="block text-noUnderline whiteSpace-noWrap text-bold color-greenStarbucks"
              >
                {link.title}
              </a>
              {link.children && (
                <SideNavLinks children={link.children}></SideNavLinks>
              )}
            </li>
          );
        })}
    </ul>
  );
}

export default SideNavGroup;
