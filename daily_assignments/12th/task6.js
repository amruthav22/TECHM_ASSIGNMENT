const operation = prompt("Enter 'multiplication' or 'division':").toLowerCase();
const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));

if (operation === "multiplication") {
    console.log(`Multiplication:${num1 * num2}`);
} else if (operation === "division") {
    if (num2 === 0) {
        console.log("Division by zero is not allowed.");
    } else {
        console.log(`Division: ${num1 / num2}`);
    }
} 
