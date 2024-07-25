/* Question: Maximizing Profit from Stock Trading with Future Price Knowledge
Given the accurate future prices of a share over the next few minutes, your high-frequency trading (HFT) platform allows you to either:

Buy one share of the stock,
Sell any number of shares that you currently own,
Not make any transaction.
Your task is to implement a function that calculates the maximum profit you can obtain given a series of future prices for the next 
𝑛
n minutes. You should only sell shares if there is no future price that is higher than the current price, ensuring you maximize your profit by not selling too early.
*/
const maxProfit = (prices: number[]): number => {
  let profit = 0;
  let shares = 0;
  for (let i = 0; i < prices.length; i++) {
    // Check if there is a future price greater than the current price
    let sell = true;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        sell = false;
        break;
      }
    }

    if (i < prices.length - 1 && prices[i] < prices[i + 1]) {
      // Buy shares
      profit -= prices[i];
      shares++;
    } else if (shares > 0 && sell) {
      // Sell shares
      profit += shares * prices[i];
      shares = 0;
    }
  }
  return profit;
}