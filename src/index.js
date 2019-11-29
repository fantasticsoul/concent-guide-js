import "./runConcent";
import React, { Component } from "react";
import ReactDom from "react-dom";
import App from "./App";
import { clearContextIfHot } from "concent";

console.log("  ****** render App ******  ");
clearContextIfHot();
ReactDom.render(<App />, document.getElementById("root"));
