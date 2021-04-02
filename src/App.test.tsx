import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./components/App";

test("renders learn react link", () => {
  render(<App />);
  const titleElement = screen.getByText(/digital metronome/i);
  expect(titleElement).toBeInTheDocument();
});
