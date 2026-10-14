const now = new Date();

console.log(now);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(Date.now());

/*
setInterval(function () {
    console.log("Hello");
}, 1000);*/

const swapButton = document.querySelectorAll(".swap button");
const clock = document.querySelector("#clock");
const clockTime = clock.querySelector(".time");
const stopwatch = document.querySelector("#stopwatch");

swapButton.forEach(function (button) {
    button.addEventListener("click", function () {
        const current = button.textContent;

        if (current === "Clock") {
            clock.classList.remove("hidden");
            stopwatch.classList.add("hidden");
        } else if (current === "Stopwatch") {
            clock.classList.add("hidden");
            stopwatch.classList.remove("hidden");
        }

        swapButton.forEach(function (btn){
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });
});

function updateClock () {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clockTime.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);

/*
const startTime = Date.now();

const elapsed = Date.now() - startTime;
console.log(elapsed);
*/

const stopwatchDisplay = stopwatch.querySelector(".time");
const stopwatchButton = document.querySelectorAll(".control button");

let startTime = 0;
let elapsedBeforeStart = 0;
let stopwatchInterval = null;

function displayElapsed (elapsed) {
    const totalCentiseconds = Math.floor(elapsed/10);

    const hours = Math.floor(totalCentiseconds/360000);
    const minutes = Math.floor(totalCentiseconds/6000) % 60;
    const seconds = Math.floor(totalCentiseconds/100) % 60;
    const milliSeconds = totalCentiseconds % 100 ;

    stopwatchDisplay.textContent = `${String(hours).padStart(2, "0")}:` + 
                                    `${String(minutes).padStart(2, "0")}:` + 
                                    `${String(seconds).padStart(2, "0")}:.` +
                                    `${String(milliSeconds).padStart(2, "0")}:`; 
}


function startStopwatch () {
    if (stopwatchInterval !== null) {
        return;
    }
    
    startTime = Date.now();
    stopwatchInterval = setInterval( function () {
            const elapsed = elapsedBeforeStart + (Date.now() - startTime);
            displayElapsed(elapsed); 
    }, 10);
}

function stopStopwatch () {
    if (stopwatchInterval === null) {
        return;
    }

    elapsedBeforeStart += Date.now() - startTime;
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    displayElapsed(elapsedBeforeStart);
}

function resetStopwtach () {
    if (stopwatchInterval !== null) {
        clearInterval(stopwatchInterval);
    }

    stopwatchInterval = null;
    startTime = 0;
    elapsedBeforeStart = 0;

    displayElapsed(0);
}

stopwatchButton.forEach(function (button) {
    button.addEventListener("click", function () {

    if (button.textContent === "Start") {
        return startStopwatch();
    } else if (button.textContent === "Stop") {
        return stopStopwatch();
    } else if (button.textContent === "Reset") {
        return resetStopwtach();
    }
    });
});

