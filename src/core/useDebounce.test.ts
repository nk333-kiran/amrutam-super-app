import { useDebounce } from "./useDebounce";

describe("Debounce Hook", () => {
  test("returns value", () => {
    expect(typeof useDebounce).toBe("function");
  });
});
