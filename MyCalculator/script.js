const screenElement1 = document.querySelector('.screen-1');
const screenElement2 = document.querySelector('.screen-2');
const tempResultElement = document.querySelector('.temp-result');
const numbersElement = document.querySelectorAll('.number');
const operationElement = document.querySelectorAll('.operation');
const equalElement = document.querySelector('.equal');
const clearElement = document.querySelector('.all-clear');
const clearLastElement = document.querySelector('.last-entity-clear');


let screen1Num = '';
let screen2Num = '';
let result = null;
let finalOperation = '';
let haveDecimal = false;


numbersElement.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDecimal) {
            haveDecimal = true;
        } else if (e.target.innerText === '.' && haveDecimal) {
            return;
        }
        screen2Num += e.target.innerText;
        screenElement2.innerText = screen2Num;
    })
});

operationElement.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!screen2Num) return;
        haveDecimal = false;
        const operationName = e.target.innerText;
        if (screen1Num && screen2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(screen2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function clearVar(name = '') {
    screen1Num += screen2Num + '' + name + '';
    screenElement1.innerText = screen1Num;
    screenElement2.innerText = '';
    screen2Num = '';
    tempResultElement.innerText = result;
}

function mathOperation() {
    if (lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(screen2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(screen2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(screen2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(screen2Num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(screen2Num);
    }

}

equalElement.addEventListener('click', (e) => {
    if (!screen1Num || !screen2Num) return;
    haveDecimal = false;
    mathOperation();
    clearVar();
    screenElement2.innerText = result;
    tempResultElement.innerText = '';
    screen2Num = result;
    screen1Num = '';

});



clearElement.addEventListener('click', (e) => {
    screenElement1.innerText = '0';
    screenElement2.innerText = '0';
    screen1Num = '';
    screen2Num = '';
    result = '';
    tempResultElement.innerText = '0';
})

clearLastElement.addEventListener('click', (e) => {
    screenElement1.innerText = '';
    screen2Num = '';

})