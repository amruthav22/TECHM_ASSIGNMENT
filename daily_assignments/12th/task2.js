const a = parseFloat(prompt("Enter side a:"));
const b = parseFloat(prompt("Enter side b:"));
const c = parseFloat(prompt("Enter side c:"));

const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(`The area of the triangle is: ${area.toFixed(2)}`);
