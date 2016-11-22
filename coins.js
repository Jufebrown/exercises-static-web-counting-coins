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

var inputAmount = prompt("Enter an amount of money ex: 4.77");
var cents=Math.round(inputAmount*100)%100;

// Initialize a JavaScript object to hold the coins
var coinPurse = {dollars:0,quarters:0,dimes:0,nickels:0,pennies:0}
//break dollar amount off
coinPurse.dollars = Math.floor(inputAmount);
  


function coinCounter () {
//take cents and divide by 25, get remainder
  coinPurse.quarters = Math.floor(cents/25);
  cents = cents % 25;
//take remainder and divide by 10, get remainder
  coinPurse.dimes = Math.floor(cents/10);
  cents = cents % 10;
//take remainder and divide by 5, get remainder
  coinPurse.nickels = Math.floor(cents/05);
  cents = cents % 05;
//set remainder to pennies
  coinPurse.pennies = Math.floor(cents/01);
  return coinPurse;
}

var coins = coinCounter()
console.log(coins);