const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
const timer = document.querySelector('#timer');

let counter = 0;
let sessionTime = 0;
let start, stopTimer = false;
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
    const hours = Math.floor(value / 60 / 60 % 60); // get hours
    const days = Math.floor(value / 60 / 60 / 60 % 24);
    return days + ':' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
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
    sessionTime = timerValue;
    if (stopTimer) {
        sessionTime = 0;
    }
}


// add events to START button
startButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    startTime = new Date();
    if (!start) {
        stopTimer = false;
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

    start = false;
    stopTimer = true;


    startButton.textContent = 'START'

})