import React, { useState } from "react";
import Field from "../../atoms/field";

function NavSearch() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="relative pt3 px3">
      <Field value={searchValue} change={setSearchValue}>
        Search
      </Field>
    </div>
  );
}

export default NavSearch;
