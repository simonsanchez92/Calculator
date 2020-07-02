const app = document.querySelector('.app');
const buttons = [...app.querySelectorAll('button')];
const display = app.querySelector('#display');
const cdisplay = app.querySelector('#cdisplay');

const numbers = buttons.filter(button => {
    return button.dataset.num && button;
});

const ops = buttons.filter(button => {
    return button.dataset.op && button;
});

const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equal');
const dotBtn = document.querySelector('#dot');

let currentOp = false;
let first = [];
let second = [];
let myOp;
let result;


numbers.forEach(number => {
    number.addEventListener('click', () => {

        if (currentOp == false) {
            first.push(number.dataset.num);
            display.textContent = first.join('');
        }

        if (currentOp == true) {
            second.push(number.dataset.num)
            display.textContent = second.join('');
        }

    })
});

ops.forEach(operation => {
    operation.addEventListener('click', () => {

        if (first != []) {
            currentOp = true;
            myOp = operation.dataset.op;
            cdisplay.textContent = display.textContent + ' ' + operation.dataset.op;

        }
        if (result != undefined) {
            first = result;
            result = undefined;
            second = [];
            myOp = operation.dataset.op;
            currentOp = true;
            cdisplay.textContent = first.join('') + ' ' + myOp;

        }
    })
});

equalBtn.addEventListener('click', () => {
    currentOp = false;
    if (!result) {
        let myFirst = parseInt(first.join(''));
        let mySecond = parseInt(second.join(''));
        if (myOp === '-') {
            cdisplay.textContent += ' ' + mySecond;
            display.textContent = myFirst - mySecond;
            result = (myFirst - mySecond).toString().split('');
        }
        if (myOp === '+') {
            cdisplay.textContent += ' ' + mySecond;
            display.textContent = myFirst + mySecond;
            result = (myFirst + mySecond).toString().split('');
        }
        if (myOp === '*') {
            cdisplay.textContent += ' ' + mySecond;
            display.textContent = myFirst * mySecond;
            result = (myFirst * mySecond).toString().split('');
        }
        if (myOp === '/') {
            cdisplay.textContent += ' ' + mySecond;
            display.textContent = myFirst / mySecond;
            result = (myFirst / mySecond).toString().split('');
        }
    }
    else {
        first = result;

        let myFirst = parseInt(first.join(''));
        let mySecond = parseInt(second.join(''));
        if (myOp === '-') {
            cdisplay.textContent = myFirst + ' ' + myOp + ' ' + mySecond;
            display.textContent = myFirst - mySecond;
            result = (myFirst - mySecond).toString().split('');
        }
        if (myOp === '+') {
            cdisplay.textContent = myFirst + ' ' + myOp + ' ' + mySecond;
            display.textContent = myFirst + mySecond;
            result = (myFirst + mySecond).toString().split('');
        }
        if (myOp === '*') {
            cdisplay.textContent = myFirst + ' ' + myOp + ' ' + mySecond;
            display.textContent = myFirst * mySecond;
            result = (myFirst * mySecond).toString().split('');
        }
        if (myOp === '/') {
            cdisplay.textContent = myFirst + ' ' + myOp + ' ' + mySecond;
            display.textContent = myFirst / mySecond;
            result = (myFirst / mySecond).toString().split('');
        }
    }

});
clearBtn.addEventListener('click', () => {
    display.textContent = 0;
    cdisplay.textContent = 0;
    result = undefined;
    first = [];
    second = [];
    currentOp = false;
});

