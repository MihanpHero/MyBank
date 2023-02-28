var loginBtn = document.getElementById('login-btn')
loginBtn.addEventListener("click", function(event){
    var loginArea = document.getElementById('login-area')
    loginArea.style.display = 'none'

    var transactionArea = document.getElementById('transaction-area')
    transactionArea.style.display = 'block'

})