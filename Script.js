function insert(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculate() {
    let display = document.getElementById('display').value;

    try {
        // Convert trigonometric functions to JavaScript Math functions in degrees
        display = display.replace(/sin\(([^)]+)\)/g, 'Math.sin(($1) * Math.PI / 180)');
        display = display.replace(/cos\(([^)]+)\)/g, 'Math.cos(($1) * Math.PI / 180)');
        display = display.replace(/tan\(([^)]+)\)/g, 'Math.tan(($1) * Math.PI / 180)');

        // Logarithmic and Exponential Functions
        display = display.replace(/Math.log10\(/g, 'Math.log10(');
        display = display.replace(/Math.log\(/g, 'Math.log(');

        // Replace Square Root Symbol with Function
        display = display.replace(/√/g, 'Math.sqrt(');

        // Constants
        display = display.replace(/π/g, 'Math.PI');
        display = display.replace(/e/g, 'Math.E');

        // Factorial Function Handling
        display = display.replace(/fact\((\d+)\)/g, 'factorial($1)');

        // Evaluate the Expression
        document.getElementById('display').value = eval(display);
    } catch (error) {
        alert("Invalid Expression");
    }
}
