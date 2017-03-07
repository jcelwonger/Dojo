function sweatshirtPricing(num) {
    var cost = 20;
    var salesTax = 0.0825;
    var discountPercent = 0;
    var discountTotal = 0;
    var preTaxCost = cost * num;
    if (num == 2) {
        discountPercent = 0.09;
    } else if (num == 3) {
        discountPercent = 0.19;
    } else if (num >= 4) {
        discountPercent = 0.35;
    } else {
        discountPercent = 0;
    }
    discountTotal = ((preTaxCost) * discountPercent);
    preTaxTotal = preTaxCost - discountTotal;
    taxAmount = preTaxTotal * salesTax;
    totalAmount = Math.ceil(preTaxTotal + taxAmount);
    return '$' + totalAmount + '.00';
}

console.log(sweatshirtPricing(900));
