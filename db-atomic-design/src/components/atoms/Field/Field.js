import React from "react";
import "./Field.css";

function Field({ value, change, children }) {
  return (
    <div className="field">
      <div className="field__inputWrapper flex">
        <label
          className={
            value
              ? "floatLabel color-textBlackSoft floatLabel--isActive"
              : "floatLabel color-textBlackSoft"
          }
        >
          {children}
        </label>
        <input
          className="fieldInput"
          id={value}
          type="text"
          value={value}
          onChange={(e) => change(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Field;
