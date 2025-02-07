debugger
let counter = 0;

const intervalId = setInterval(() => {

    console.log(counter);

    counter++;

    if (counter === 5) clearInterval(intervalId);

}, 1000);

console.log("Hello")