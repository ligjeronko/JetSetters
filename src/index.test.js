import React from "react";
import App from "./App";


describe("index.js Tests", () => {
  beforeEach(() => {
    // Clear DOM between tests
    document.body.innerHTML = "";
  });

  test("renders App without crashing", () => {
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root); // Mock root element

    require("./index"); // Load index.js file
  });
});