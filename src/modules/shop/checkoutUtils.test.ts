import { calculateCheckout } from "./checkoutUtils";

describe("Checkout", () => {
  test("calculates totals", () => {
    const result = calculateCheckout(1000);

    expect(result.tax).toBe(50);
    expect(result.total).toBe(1050);
  });
});
