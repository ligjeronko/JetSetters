import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Mock ReactDOM.createRoot
jest.mock("react-dom/client", () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

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

    // Assertions
    expect(ReactDOM.createRoot).toHaveBeenCalledWith(
      document.getElementById("root")
    );
    expect(ReactDOM.createRoot().render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
});