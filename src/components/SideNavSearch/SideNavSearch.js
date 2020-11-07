import React, { useState } from "react";
import "./SideNavSearch.css";

function SideNavSearch() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="relative lg-pt3 px3">
      <div className="field">
        <div className="field__inputWrapper flex">
          <label
            className={
              searchValue
                ? "floatLabel color-textBlackSoft floatLabel--isActive"
                : "floatLabel color-textBlackSoft"
            }
          >
            Search
          </label>
          <input
            className="fieldInput"
            id="search"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SideNavSearch;
