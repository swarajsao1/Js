let greeting = "Hello, ";
const name = "JavaScript.";

console.log(greeting + name);

greeting = "Hi! ";
console.log(greeting + name);    /*No DOM*/


function sayHello() {
    console.log("I am learning JavaScript.");
}

sayHello();

const paragraph = document.getElementById("message");  /*DOM*/
console.log(paragraph);   /* DOM has live pointor in memory no snapshot*/

paragraph.textContent = "Welcome! Click the the button below.";


const button = document.getElementById("changeButton");

button.addEventListener("click", function() {
    console.log("The button was clicked.");            /*function -> Callback function executes followed by click.*/
});

button.addEventListener("click", function(){
    button.textContent = "Clicked";
});


let count = 0;

const countDisplay = document.getElementById("counter");
const countButton = document.getElementById("countButton");
const resetButton = document.getElementById("resetButton");

countButton.addEventListener("click", function() {
    count++;
    countDisplay.textContent = count; 
});

resetButton.addEventListener("click", function() {
    count = 0;
    countDisplay.textContent = count;
});


