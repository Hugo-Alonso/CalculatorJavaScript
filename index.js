let resultField = document.getElementById('result');
let historyField = document.getElementById('history');

function appendNumber(number) {
    resultField.value += number;
}

function appendOperator(operator) {
    if (resultField.value === '') return;
    let lastChar = resultField.value.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar)) return;
    resultField.value += operator;
}

function clearDisplay() {
    resultField.value = '';
    historyField.innerText = '';
}

function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
    try {
        const expression = resultField.value;
        const result = eval(expression);
        historyField.innerText = `${expression} = ${result}`;
        resultField.value = result;
    } catch (error) {
        resultField.value = 'Error';
    }
}
