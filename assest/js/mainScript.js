//login btn event handler
const loginBtn = document.getElementById('login');
    loginBtn.addEventListener("click", function(){
        const loginArea = document.getElementById("login-area");
            loginArea.style.display = "none";
        const transactionArea = document.getElementById("transactionArea");
            transactionArea.style.display = "block";    
    });
//deposit button event handler
    const depositBtn = document.getElementById("deposit");
        depositBtn.addEventListener("click", function(){
            const depositNumber = getInputNumber("depositAmount");

            updateSpanText("currentDeposit", depositNumber);
            updateSpanText("currentBalance", depositNumber);

            document.getElementById("depositAmount").value = "";
        });
//with drawBtn Event handler
    const withdrawBtn = document.getElementById("withdraw");
        withdrawBtn.addEventListener("click", function(){
            const withdrawNumber = getInputNumber("withdrawAmount");
            console.log(withdrawNumber);

            updateSpanText("currentWithdraw", withdrawNumber);
            updateSpanText("currentBalance", -1 * withdrawNumber);

            document.getElementById("withdrawAmount").value = "";
        });
    function getInputNumber(id){
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
    }
    function updateSpanText(id, depositNumber){
        //current balance number 
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const total = depositNumber + currentNumber;
        document.getElementById(id).innerText = total;
    }
