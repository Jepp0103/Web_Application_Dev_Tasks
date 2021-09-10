window.onload = function () {
    document.getElementById("calcBtn").onclick = function () {
        displayTaxAmountAndFinalAmount()
    }
}

function displayTaxAmountAndFinalAmount() {
    monetaryAmountInput = document.getElementById("monetary_amount").value;
    taxPercentageInput = document.getElementById("tax_percentage").value;

    document.getElementById("taxAmount").innerHTML = calculateTaxAmount(monetaryAmountInput, taxPercentageInput);
    document.getElementById("finalAmount").innerHTML = calculateFinalAmount(monetaryAmountInput, taxPercentageInput);
};

function calculateTaxAmount(monetaryAmount, taxPercentage) {
    return (monetaryAmount * (taxPercentage * 0.01)).toFixed(2)
}

function calculateFinalAmount(monetaryAmount, taxPercentage) {
    return (monetaryAmount - calculateTaxAmount(monetaryAmount, taxPercentage)).toFixed(2)
}