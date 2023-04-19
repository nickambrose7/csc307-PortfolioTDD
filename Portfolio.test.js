const Portfolio = require("./Portfolio");

// set up function
function setup() {
  p = new Portfolio();
}
setup();

test("Testing portfolio -- success", () => {
  expect(p).toBeInstanceOf(Portfolio);
});

test("Test isEmpty() -- success", () => {
  expect(p.isEmpty()).toBe(true);
});