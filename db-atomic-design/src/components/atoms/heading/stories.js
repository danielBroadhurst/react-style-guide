/* @flow */

import React from "react";
import { storiesOf } from "@storybook/react";

import Heading from "./index";

storiesOf("Heading", module)
  .add("h1", () => <Heading Tag={"h1"}>This is the Header Text</Heading>)
  .add("h2", () => <Heading Tag={"h2"}>This is the Header Text</Heading>)
  .add("h3", () => <Heading Tag={"h3"}>This is the Header Text</Heading>)
  .add("h4", () => <Heading Tag={"h4"}>This is the Header Text</Heading>)
  .add("h5", () => <Heading Tag={"h5"}>This is the Header Text</Heading>)
  .add("h6", () => <Heading Tag={"h6"}>This is the Header Text</Heading>);
