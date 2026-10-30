import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("App routing", () => {
  it("renders the home page correctly with React Router DOM", () => {
    render(<App />);
    expect(screen.getByText(/HELP THEM WHO NEED/i)).toBeInTheDocument();
  });
});
