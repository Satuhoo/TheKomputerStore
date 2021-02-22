# The Komputer Store

The web application which allows the user to get salary, bank the money, take a loan, repay the loan, compare different computers and buy them. It contains three different parts which are introduced below.

## The bank

The bank shows bank balance and gives a chance to take a new loan. When the first loan have been taken, shows the loan amount.

Constraints for taking a loan:
1. It is not possible to take a loan if loan amount is more than double of bank balance
2. It is not possible to get more than one bank loan before buying a computer
3. It is not possible if old loan have not been payed back


## Work
The pay amount shows how much money have been earned by working. 

The bank button transfers the money from pay balance to bank balance. If loan has taken, transfers 10% of salary for repaying the loan.

The work button increases the pay amount by 100e. 

The repay loan is shown after taking first loan. It repays the loan from the salary. If salary is higher than the loan amount, transfers the rest of the money to bank balance.

## The store

The store contains the selection of laptops in the dropdown menu and information about selected laptop in the separate box. 

The buy now button in the information box allows to buy a laptop, if there is enough money for that in the bank balance.