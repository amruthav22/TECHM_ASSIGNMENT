const now = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = days[now.getDay()];
const time = now.toLocaleTimeString();
console.log(`Today is : ${day}.`);
console.log(`Time: ${time}`);