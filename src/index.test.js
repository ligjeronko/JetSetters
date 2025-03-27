import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Mock `ReactDOM.createRoot` to monitor rendering behavior
jest.mock("react-dom/client", () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

describe("index.js", () => {
  it("renders the App component without crashing", () => {
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root); // Mock the root element

    require("./index"); // Import your index.js file

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


module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  };