// add event lessenr for withdraw 
document.getElementById('button-withdraw').addEventListener('click', function () { 
    // get all amount from ballance
    const withdrawAmountElements = document.getElementById('withdraw');
    const withdrawAmountString = withdrawAmountElements.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    if (isNaN(withdrawAmount)) {
        alert('Please Insert Valid Number!');
        return;
    } else if (withdrawAmount == 0){
        alert('Your Inserted Amount is ZERO!!');
    }
    // console.log(withdrawAmount);
    
    // get ballance amount 
    const withdrawTotalElements = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElements.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);

    // console.log(withdrawTotal);
    // withdraw ballance add and show output
    const currentWithdrawBallance = withdrawTotal + withdrawAmount;

    // add ballance in Ballance 
    const ballanceAmountField = document.getElementById('ballance-total');
    const ballanceAmountString = ballanceAmountField.innerText;
    const ballanceAmount = parseFloat(ballanceAmountString);

    if (ballanceAmount >= withdrawAmount) {
        withdrawTotalElements.innerText = currentWithdrawBallance;
        const mainBallance = ballanceAmount - withdrawAmount;
        ballanceAmountField.innerText = mainBallance;
    } else {
        alert("Sorry!! Insufficient Balance!!");
        return;
    }

    //clear value of withdraw field
    withdrawAmountElements.value = '';
 });