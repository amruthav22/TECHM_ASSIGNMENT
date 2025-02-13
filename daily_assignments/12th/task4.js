const a = parseInt(prompt("Enter year:"));

if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
    console.log(`Leap Year`);
}
else {
    console.log(`Not a Leap Year`);
}