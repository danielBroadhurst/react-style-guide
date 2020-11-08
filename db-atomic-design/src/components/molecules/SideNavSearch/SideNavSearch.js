import React, { useState } from "react";
import Field from "../../atoms/Field/Field";
import "./SideNavSearch.css";

function SideNavSearch() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="relative lg-pt3 px3">
      <Field value={searchValue} change={setSearchValue}>
        Search
      </Field>
    </div>
  );
}

export default SideNavSearch;
