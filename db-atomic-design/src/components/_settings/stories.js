/* @flow */
import React from "react";
import { storiesOf } from "@storybook/react";

import variables from "./stories.module.css";

const Vars = Object.keys(variables).map((v) => (
  <p key={v} className={variables.colors + " " + variables[v]}>
    {v}
  </p>
));

storiesOf("— Variables", module).add("colours", () => <div>{Vars}</div>);
