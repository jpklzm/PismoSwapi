import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Pismo", () => {
  render(<App />);
  const linkElement = screen.getByText(/Pismo/);
  expect(linkElement).toBeInTheDocument();
});

test("renders SWAPI", () => {
  render(<App />);
  const linkElement = screen.getByText(/SWAPI/);
  expect(linkElement).toBeInTheDocument();
});
