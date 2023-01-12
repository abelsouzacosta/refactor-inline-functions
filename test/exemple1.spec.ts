import { rating } from "../src/exemple1";

describe("Rating Driver", () => {
  it("shuold return 1 for driver rate", () => {
    let driver = {
      lateDeliveries: 4,
    };

    let rate = rating(driver);

    expect(rate).toBe(1);
  });

  it("should return 2 for driver rate", () => {
    let driver = {
      lateDeliveries: 12,
    };

    let rate = rating(driver);

    expect(rate).toBe(2);
  });
});
