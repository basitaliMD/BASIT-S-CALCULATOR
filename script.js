let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperation(operation) {
    display.value += operation;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid calculation');
        clearDisplay();
    }
}

function clearDisplay() {
    display.value = '';
}
