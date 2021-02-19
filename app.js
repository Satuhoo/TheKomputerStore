let balance = 0;
let pay = 0;
let outstandingLoan = 0;
let loaned = false; //Helps to check the first loan.
let bought = true; //Helps to prevent taking out more than one loan before buying a computer
                   //Default true, because then it's possible to get first loan

//Functionality for getting and updating balance, pay and loan
function getBalance() {
    document.getElementById("balance").innerHTML = balance + " €";
}

function getPay() {
    document.getElementById("pay").innerHTML = pay + " €";
}

function getOutstandingLoan() {
    document.getElementById("loan").innerHTML = outstandingLoan + " €";
}

//When work button is clicked, adds 100 for pay amount
const work = document.getElementById("work-btn");
work.addEventListener("click", function() {
    pay = pay + 100;
    getPay();
})

//When bank button is clicked, moves pay amount to balance amount
const bank = document.getElementById("bank-btn");
bank.addEventListener("click", function() {
    let payBack = 0;
    //If there is outstanding loan,  10% of salary be transferred to the outstanding loan amount
    if (outstandingLoan > 0) {
        payBack = pay * 0.10;
        balance = balance + (pay - payBack);
        outstandingLoan = outstandingLoan - payBack;
        getOutstandingLoan();
    } else {
        balance = balance + pay;
    }
    pay = 0; //Reset pay amount
    //Calls functions to update the amounts of balance and pay
    getBalance();
    getPay();
    
})

//When get a loan button is clicked, opens prompt window
const getLoan = document.getElementById("loan-btn");
getLoan.addEventListener("click", function() {
    let loan = prompt("Please enter amount of loan:");
    loan = parseFloat(loan); //Change loan amount from string to float
    //Checks if it's possible to take new loan
    if (loan <= balance * 2 && outstandingLoan <= 0 && bought) {
        balance = balance + loan;
        outstandingLoan = loan;
        if (!loaned) { //If it is the first loan, calls function which create the new info row for loan
            createLoanText();
        } else { //If not, updates loan amount
            getOutstandingLoan();
        }
        loaned = true; 
        bought = false;
        getBalance();
    } else {
        alert("You will not be able to get this loan. Please check entered amount or pay previous loan back before trying again");
    }
})

//Activates repay loan button after taking the first loan
function activeRepayButton() {
    //When button is clicked moves money from pay amount to repaying loan
    let repayLoan = document.getElementById("repay-loan-btn");
    repayLoan.addEventListener("click", function() {
        //If the pay amount is more than the loan amount, moves rest of the money to bank balance
        if (outstandingLoan - pay < 0) { 
            pay = pay - outstandingLoan;
            outstandingLoan = 0;
            balance = balance + pay;
        } else {
            outstandingLoan = outstandingLoan - pay;
        }
        pay = 0;
        getPay();
        getBalance();
        getOutstandingLoan();
    })
}

//When buy now button is clicked, checks if there is enough money in balance and gives the right message
const buy = document.getElementById("buy-btn");
buy.addEventListener("click", function() {
    if (balance >= laptop.price) {
        balance = balance - laptop.price;
        getBalance();
        bought = true; //Allows taking out the next loan
        alert("Congratulation! You have a nice laptop now!");
    } else {
        alert("Sorry, you have not enough money for that. Go to work and try again.")
    }
})

//Creates new info row and repay loan button. Sets ids for the changing variables
function createLoanText() {
    let loanText = document.createElement("p");
    let text = document.createTextNode("Loan");
    loanText.appendChild(text);

    let loanAmount = document.createElement("p");
    loanAmount.setAttribute("id", "loan");
    let amount = document.createTextNode(outstandingLoan + " €");
    loanAmount.appendChild(amount);

    let element = document.getElementById("loan-txt");
    element.appendChild(loanText); 
    element.appendChild(loanAmount); 

    let repayLoanButton = document.createElement("button");
    repayLoanButton.setAttribute("id", "repay-loan-btn");
    let buttonText = document.createTextNode("Repay loan");
    repayLoanButton.appendChild(buttonText);

    let buttonElement = document.getElementById("buttons");
    buttonElement.appendChild(repayLoanButton);
    activeRepayButton();
}

getBalance();
getPay();