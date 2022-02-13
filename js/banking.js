/* function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7); */

function getInputValue(inputId) {
  // debugger;
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const newAmountValue = parseFloat(inputAmountText);
  // clear input fiel 
  inputField.value = '';
  return newAmountValue;
}
function updateTotalField(totalFieldId, amount) {
  // debugger;
  const totalElement = document.getElementById(totalFieldId);
  const toatlText = totalElement.innerText;
  const previousToatlAmount = parseFloat(toatlText);
  totalElement.innerText = previousToatlAmount + amount;
}
function getCurrentBalance() {
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById('balance-total');
  /*   const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  }
  else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}







document.getElementById('deposit-button').addEventListener('click', function () {
  /*  
   const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const newDepositToatlAmount = parseFloat(depositAmountText); */

  // get and update deposit 
  /*   
    const depositTotal = document.getElementById('deposit-total');
    const depositToatlAmountText = depositTotal.innerText;
    const previousDepositToatlAmount = parseFloat(depositToatlAmountText);
    depositTotal.innerText = previousDepositToatlAmount + newDepositToatlAmount; */

  // update balance 
  /*  
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
 
   balanceTotal.innerText = previousBalanceTotal + newDepositToatlAmount; */
  const newDepositToatlAmount = getInputValue('deposit-input');
  if (newDepositToatlAmount > 0) {
    updateTotalField('deposit-total', newDepositToatlAmount);
    updateBalance(newDepositToatlAmount, true);
  }
});

// handle withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {
  /*  
   const withdrawInput = document.getElementById('withdraw-input');
   const withdrawAmountText = withdrawInput.value;
   const newWithdrawAmount = parseFloat(withdrawAmountText); */

  // get and udate withdraw total 

  /*
  const withdrawTotal = document.getElementById('withdraw-total');
  const withdrawToalAmountText = withdrawTotal.innerText
  const previouswithdrawToalAmount = parseFloat(withdrawToalAmountText);
  withdrawTotal.innerText = previouswithdrawToalAmount + newWithdrawAmount */

  // update balance after withdraw 
  /*   
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;
     */
  const newWithdrawAmount = getInputValue('withdraw-input');
  const currentBalance = getCurrentBalance();
  if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
    updateTotalField('withdraw-total', newWithdrawAmount);
    updateBalance(newWithdrawAmount, false);
  }
  if (newWithdrawAmount > currentBalance) {
    console.log('You can not withdraw more than what you have in your account');
  }

  /*  // clear  withdraw input field 
   withdrawInput.value = ''; */
})