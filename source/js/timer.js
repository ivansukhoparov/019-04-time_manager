const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
const timer = document.querySelector('#timer');

let counter = 0;
let sessionTime = 0;
let start = false;
let startTime, currentTime, pauseTime;

// function creating a delay for the specified number of milliseconds
const sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// function added '0' before 0-9 digits 
const addZero = function (value) {
    if (value < 10) {
        return '0' + value;
    }
    return value;
}

// function transforming milliseconds interval to HH:MM:SS format
const printTime = function (value) {
    const seconds = value % 60; // get seconds
    const minutes = Math.floor(value / 60 % 60); // get minutes
    const hour = Math.floor(value / 60 / 60 % 60); // get hours
    return addZero(hour) + ':' + addZero(minutes) + ':' + addZero(seconds);
}


const countingTime = async function () {
    let timerValue;
    while (start) {
        currentTime = new Date();
        counter = Math.round((currentTime - startTime) / 1000)
        timerValue = sessionTime + counter;
        timer.textContent = printTime(timerValue);
        await sleep(1000);
    };
    sessionTime=timerValue;
}


// add events to START button
startButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    startTime = new Date();
    if (!start) {
        start = true;
        countingTime();
        startButton.textContent = 'PAUSE'
    } else {
        start = false;
        startButton.textContent = 'START'
    }
})

// add events to STOP button
stopButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    sessionTime=0;
    timer.textContent = printTime(0);
})