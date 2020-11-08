import React from "react";
import "./Header.css";

function Header() {
  return (
    <header role="banner">
      <div className="flex items-center justify-between py3 px3 lg-px7 mb3 lg-mb7 color-textBlackSoft bg-grayNatural">
        <div className="flex items-center">
          <a className="brandLogo" href="/developer/pattern-library/">
            <span className="hiddenVisually">Home</span>
            <img
              src="https://via.placeholder.com/150"
              className="brandLogo"
              alt="Logo"
            />
          </a>
          <span className="text-md text-bold pl3">
            Starbucks Pattern Library
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
