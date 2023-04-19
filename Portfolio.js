// Stock Portfolio class
class Portfolio {
  constructor() {
    this.stocks = {}; // key: ticker, value: shares
  }
  // test if portfolio is empty
  isEmpty() {
    return Object.keys(this.stocks).length === 0;
  }
  // add stock to portfolio
  buyStock(ticker, shares) {
    if (shares >= 0) {
      if (ticker in this.stocks) {
        this.stocks[ticker] += shares;
      } else {
        this.stocks[ticker] = shares;
      }
    } else {
      throw new Error("Shares must be greater than 0");
    }
  }
  // sell stock from portfolio
  sellStock(ticker, shares) {
    if (ticker in this.stocks) {
      if (shares <= this.stocks[ticker]) {
        this.stocks[ticker] -= shares;
        if (this.stocks[ticker] === 0) {
          delete this.stocks[ticker];
        }
      } else {
        throw new Error("ShareSaleException");
      }
    } else {
      throw new Error("Ticker not found");
    } 
        
  }
  countUniqueStocks() {
    return Object.keys(this.stocks).length;
  }
  countShares(ticker) {
    if (ticker in this.stocks) {
      return this.stocks[ticker];
    }
    return 0;
  }

}
module.exports = Portfolio;
