/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

let inputAmount = prompt("Enter an amount of money ex: 4.77");
const cents=Math.round(inputAmount*100)%100;

// function that takes a coin value as an arg and outputs the amount of coins of that value
const amountAndRemainder = (coinValue) => {
  let currentCoin = Math.floor(cents/coinValue);
  cents = cents % coinValue;
  return currentCoin;
}

//gets dollar amount from inputted amount
const getDollars = () => Math.floor(inputAmount)

//function that breaks down the inputted value
const coinCounter = () => {
  // Initialize a JavaScript object to hold the coins
  let coinPurse = {dollars:0, quarters:0, dimes:0, nickels:0, pennies:0}
  //break dollar amount off
  coinPurse.dollars = getDollars()
  //take cents and divide by 25, get remainder
  coinPurse.quarters = amountAndRemainder(25);
  //take remainder and divide by 10, get remainder
  coinPurse.dimes = amountAndRemainder(10);
  //take remainder and divide by 5, get remainder
  coinPurse.nickels = amountAndRemainder(5);
  //set remainder to pennies
  coinPurse.pennies = amountAndRemainder(1);
  return coinPurse;
}

let coins = coinCounter()
console.log(coins);
