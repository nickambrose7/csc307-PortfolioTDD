// Stock Portfolio class
class Portfolio {
  constructor() {
    this.stocks = {}; // key: ticker, value: shares
  }
  // test if portfolio is empty
  isEmpty() {
    return Object.keys(this.stocks).length === 0;
  }
}
module.exports = Portfolio;
