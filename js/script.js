//---------------Getting Element-------------------------------
const depositInput = document.getElementById("deposit-input");
const withdrawInput = document.getElementById("withdraw-input");
const DepositText = document.getElementById("deposit-total");
const withdrawText = document.getElementById("withdraw-total");
const BalanceText = document.getElementById("balance-total");

//--------------Handle Deposit---------------------------
document.getElementById("deposit-btn").addEventListener("click", function () {
    // storing given input value
    let amount = getValue(depositInput);

    if (amount > 0) {
        // updating deposit text
        updateTotal(DepositText, amount);
        // updating balance
        updateBalance(amount, true);
    }
});

//----------------Handle Withdraw-----------------------------
document.getElementById("withdraw-btn").addEventListener("click", function () {
    // storing given input value
    let amount = getValue(withdrawInput);
    //withdraw validation
    if (amount > 0 && amount <= parseFloat(BalanceText.innerText)) {
        // updating withdraw text
        updateTotal(withdrawText, amount);
        // updating balance
        updateBalance(amount, false);
    }
});
//-------------Functions-------------------------------------

//input value getting function
function getValue(fieldId) {
    inputValueNumber = parseFloat(fieldId.value);
    fieldId.value = "";
    return inputValueNumber;
}

//updating depo & withdraw text
function updateTotal(fieldId, amount) {
    fieldId.innerText = parseFloat(fieldId.innerText) + amount;
}

//---------update balance-------------------------------
function updateBalance(amount, isAdding) {
    previousBalance = parseFloat(BalanceText.innerText);
    if (isAdding == true) {
        BalanceText.innerText = previousBalance + amount;
    } else {
        BalanceText.innerText = previousBalance - amount;
    }
}
