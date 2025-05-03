console.log('Hello from Liv');

let transactionType = '';
let total = 0;
let income = 0;
let expense = 0;

document.getElementById('incomeBtn').addEventListener('click', function() {
    transactionType = 'Income';
    this.classList.add('active');
    document.getElementById('expenseBtn').classList.remove('active');
});

document.getElementById('expenseBtn').addEventListener('click', function() {
    transactionType = 'Expense';
    this.classList.add('active');
    document.getElementById('incomeBtn').classList.remove('active');
});

document.getElementById('submit').addEventListener('click', function() {
    let name = document.getElementById('name').value;
    let amount = Number(document.getElementById('amount').value);
    let date = document.getElementById('date').value;

    let noTransaction = document.getElementById('no');
    if (noTransaction) {
        noTransaction.style.display = 'none';
    }

    if (!name || !amount || !date) {
        alert('All fields are required');
        return;
    }

    let parentDiv = document.getElementById('history');
    let childDiv = document.createElement('div');
    childDiv.className = 'childDiv';

    let leftDiv = document.createElement('div');
    leftDiv.className = 'leftDiv';

    let nameDiv = document.createElement('div');
    nameDiv.className = 'nameDiv';
    nameDiv.innerHTML = name;

    let dateDiv = document.createElement('div');
    dateDiv.className = 'dateDiv';
    dateDiv.innerHTML = date;

    leftDiv.appendChild(nameDiv);
    leftDiv.appendChild(dateDiv);

    let rightDiv = document.createElement('div');
    rightDiv.className = 'rightDiv';

    let totalDisplay = document.getElementById('total');
    let incomeshow = document.getElementById('incomeDisplay');
    let expenseshow = document.getElementById('expenseDisplay')

    if (transactionType === 'Income') {
        rightDiv.innerHTML = "+$" + amount;
        rightDiv.style.color = 'green'; 

        income += amount;
        total += amount; // Directly update total

        incomeshow.innerHTML = income;
        totalDisplay.innerHTML = total;

    } else if (transactionType === 'Expense') {
        rightDiv.innerHTML = "-$" + amount;
        rightDiv.style.color = 'red';

        expense += amount
        total -= amount; // Deduct expense from total

        expenseshow.innerHTML = expense;
        totalDisplay.innerHTML = total;
    }

    childDiv.appendChild(leftDiv);
    childDiv.appendChild(rightDiv);
    parentDiv.appendChild(childDiv);
});
