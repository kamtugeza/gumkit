import { describe, expect, it } from "vitest";

describe("test environment", () => {
  it("provides DOM APIs through jsdom", () => {
    const element = document.createElement("button");
    element.textContent = "Test";

    expect(element).toBeInstanceOf(HTMLButtonElement);
    expect(element.textContent).toBe("Test");
  });
});
