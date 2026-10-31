import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import App from "@/App";

describe("App routing", () => {
  it("renders the home page correctly with React Router DOM", () => {
    const { container } = render(<App />);
    const h1 = container.querySelector("h1");
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toContain("Help The Needy");
  });
});
