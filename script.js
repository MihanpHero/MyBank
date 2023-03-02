// login button handler
var loginBtn = document.getElementById('login-btn')
loginBtn.addEventListener("click", function(event){
    var loginArea = document.getElementById('login-area')
    loginArea.style.display = 'none'

    var transactionArea = document.getElementById('transaction-area')
    transactionArea.style.display = 'block'

})

// deposit button handler
 var depositButton = document.getElementById('addDeposit')
 depositButton.addEventListener("click", function(){
    var depositNumber = getInputNumber('depositAmount')

    updateSpanText('currentDeposit', depositNumber)
    
    updateSpanText('currentBalance', depositNumber)

    document.getElementById('depositAmount').value = ''
 })


 function updateSpanText(id, depositNumber) {
    var current = document.getElementById(id).innerText
    var currentNumber = parseFloat(current)
    var total = currentNumber + depositNumber
 
    document.getElementById(id).innerText = total
 }

 function getInputNumber(id) {
    var Amount = document.getElementById(id).value
    var AmountNumber = parseFloat(Amount)
    return AmountNumber
    
 }

//  Money Withdraw handler

var withdrawBtn = document.getElementById('addWithdraw')
 
withdrawBtn.addEventListener('click', function(){
    var withdrawNumber = getInputNumber("withdrawAmount")

    updateSpanText("currentWithdraw", withdrawNumber)

    updateSpanText('currentBalance', -1 * withdrawNumber)
    
    document.getElementById('withdrawAmount').value = ''

})




