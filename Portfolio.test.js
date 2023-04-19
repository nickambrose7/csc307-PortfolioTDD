const Portfolio = require("./Portfolio");

// set up function
function setup() {
  p = new Portfolio();
}


test("Testing portfolio -- success", () => {
  setup();
  expect(p).toBeInstanceOf(Portfolio);
});

test("Test isEmpty() -- success", () => {
  setup();
  expect(p.isEmpty()).toBe(true);
});

test("Test buyStock() -- success", () => {
  p.buyStock("GME", 5);
  expect(p.isEmpty()).toBe(false);
});

test("Test buyStock() -- failure", () => {
  setup();
  expect(() => {
    p.buyStock("GME", -5);
  }).toThrow();
});

test("Test sellStock() -- success", () => {
  setup();
  p.buyStock("GME", 5);
  p.sellStock("GME", 2);
  expect(p.isEmpty()).toBe(false);
});
test("Test sellStock() -- failure", () => {
  setup();
  expect(() => {
    p.sellStock("GME", 2);
  }).toThrow();
});

test("Test countUniqueStocks() -- success", () => {
  setup();
  p.buyStock("GME", 5);
  p.buyStock("RBLX", 10);
  expect(p.countUniqueStocks()).toBe(2);
} );

 test("Test make a sale -- success", () => {
  setup();
  p.buyStock("GME", 5);
  p.buyStock("RBLX", 10);
  p.sellStock("GME", 2);
  expect(p.countUniqueStocks()).toBe(2);
  expect(p.stocks["GME"]).toBe(3);
} );

// 2.6 The stock portfolio shall answer how many shares exist for a given symbol.
 test("Test count shares for a given symbol -- success", () => {
  setup();
  p.buyStock("GME", 5);
  p.buyStock("RBLX", 10);
  p.buyStock("GME", 2);
  expect(p.countShares("GME")).toBe(7);
} );

// 2.7 The portfolio should keep only owned symbols. If symbols are in the portfolio, that means at least one stock should be owned.
  test("Test keep only owned symbols -- success", () => {
  setup();
  p.buyStock("GME", 5);
  p.buyStock("RBLX", 10);
  p.buyStock("GME", 2);
  p.sellStock("GME", 7);
  expect(p.countUniqueStocks()).toBe(1);
} );

//   2.8 It should not be possible to sell too many shares. Raise an exception (named ShareSaleException) when attempting to sell more shares than actually owned by the portfolio.
  test("Test sell too many shares -- failure", () => {
  setup();
  p.buyStock("GME", 5);
  p.buyStock("RBLX", 10);
  p.buyStock("GME", 2);
  expect(() => {
    p.sellStock("GME", 10);
  }).toThrow("ShareSaleException");
} );