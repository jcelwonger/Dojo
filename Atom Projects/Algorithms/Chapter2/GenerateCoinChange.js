function generateCoinChange(cents) {
    var remainingAmount = 0;
    var dollarCoins = Math.floor(cents / 100);
    console.log("Dollar Coins: " + dollarCoins);
    remainingAmount = cents - (dollarCoins * 100);
    var halfDollarCoins = Math.floor(remainingAmount / 50);
    console.log("Half Dollar Coins: " + halfDollarCoins);
    remainingAmount = remainingAmount - (halfDollarCoins * 50);
    var quarters = Math.floor(remainingAmount / 25);
    console.log("Quarters: " + quarters);
    remainingAmount = remainingAmount - (quarters * 25);
    var dimes = Math.floor(remainingAmount / 10);
    console.log("Dimes: " + dimes);
    remainingAmount = remainingAmount - (dimes * 10);
    var nickels = Math.floor(remainingAmount / 5);
    console.log("Nickels: " + nickels);
    remainingAmount = remainingAmount - (nickels * 5);
    var pennies = Math.floor(remainingAmount / 1);
    console.log("Pennies: " + pennies);
}

generateCoinChange(97);
