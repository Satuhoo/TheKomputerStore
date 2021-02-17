let balance = 0;
let pay = 0;
let outstandingLoan = 0;
let loaned = false;
let repayLoan;

function getBalance() {
    document.getElementById("balance").innerHTML = balance + " €";
}

function getPay() {
    document.getElementById("pay").innerHTML = pay + " €";
}

function getOutstandingLoan() {
    document.getElementById("loan").innerHTML = outstandingLoan + " €";
}

const work = document.getElementById("work-btn");
work.addEventListener("click", function() {
    pay = pay + 100;
    getPay();
})

const bank = document.getElementById("bank-btn");
bank.addEventListener("click", function() {
    let payBack = 0;
    if (outstandingLoan > 0) {
        payBack = pay * 0.10;
        balance = balance + (pay - payBack);
        outstandingLoan = outstandingLoan - payBack;
        getOutstandingLoan();
    } else {
        balance = balance + pay;
    }
    pay = 0;
    getBalance();
    getPay();
    
})

const getLoan = document.getElementById("loan-btn");
getLoan.addEventListener("click", function() {
    let loan = prompt("Please enter amount of loan:");
    loan = parseFloat(loan)
    if (loan <= balance * 2 && outstandingLoan <= 0) {
        balance = balance + loan;
        outstandingLoan = loan;
        if (!loaned) {
            createLoanText();
        } else {
            getOutstandingLoan();
        }
        loaned = true;
        getBalance();
    } else {
        alert("You will not be able to get this loan. Please check entered amount or pay previous loan back before trying again");
    }
})

function activeRepayButton() {
    repayLoan = document.getElementById("repay-loan-btn");
    repayLoan.addEventListener("click", function() {
        if (outstandingLoan - pay < 0) {
            outstandingLoan = 0;
        } else {
            outstandingLoan = outstandingLoan - pay;
        }
        pay = 0;
        getPay();
        getOutstandingLoan();
    })
}


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