import React from "react";
import NavLinks from "../../atoms/navLink";

function NavGroup({ links }) {
  return (
    <ul className="p4">
      {links &&
        links.map((link, id) => {
          return (
            <li className="pb3" key={id}>
              <a
                href={link.link}
                className="block text-noUnderline whiteSpace-noWrap text-bold color-brand"
              >
                {link.title}
              </a>
              {link.children && <NavLinks children={link.children}></NavLinks>}
            </li>
          );
        })}
    </ul>
  );
}

export default NavGroup;
