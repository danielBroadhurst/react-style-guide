import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function NavLinks({ children }) {
  return (
    <ul className="mt1 pl3">
      {children.map((link, id) => {
        return (
          <li className="mb1" key={id}>
            <Link
              to={link.link}
              className="child-link block text-noUnderline whiteSpace-noWrap"
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
