document.getElementById("button-deposit").addEventListener('click', function() {
    // select the data field 
    const despositField = document.getElementById('deposit');
    const newDepositAmountSting = despositField.value;
    const newDepositAmount = parseFloat(newDepositAmountSting);

    // step get the current deposit total amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previusDepositTotalString = depositTotalElement.innerText;
    const previusDepositTotal = parseFloat(previusDepositTotalString);
    
    // add total amount deposit payment
    const currentDepositAmount = previusDepositTotal + newDepositAmount;

    // show in output deposit amount+previus Amount
    if (isNaN(newDepositAmount)) {
        alert('Your Deposit Amount is NULL');
        return;
    } else if (newDepositAmount == 0){
        alert('Your Amount us ZERO!!');
        return;
    } else {
        depositTotalElement.innerText = currentDepositAmount;
    }

    // get ballance amount
    const balanceAmountElement = document.getElementById('ballance-total');
    const newBallanceAmountString = balanceAmountElement.innerText;

    // string to float 
    const newBallanceAmount = parseFloat(newBallanceAmountString);

    const currentBallance = newBallanceAmount + newDepositAmount;
    balanceAmountElement.innerText = currentBallance;

    // clear deposit field value 
    despositField.value = '';


})