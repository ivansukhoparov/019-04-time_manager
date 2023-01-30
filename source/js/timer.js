const startStopButton = document.querySelector('#start-stop-button');
const timer = document.querySelector('#timer');

let counter = 0;
let start = false;
let startTime, currentTime,stopTime;


const sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const addZero = function (value) {
    if (value < 10) {
        return '0' + value;
    }
    return value;
}

const printTime = function (value) {
    const seconds = value % 60; // get seconds
    const minutes = Math.floor(value / 60 % 60); // get minutes
    const hour = Math.floor(value / 60 / 60 % 60); // get hours
    return addZero(hour) + ':' + addZero(minutes) + ':' + addZero(seconds);
}

const goTimer = async function () {
    let timerValue;
    while (start) {
        currentTime = new Date();
        counter=Math.round((currentTime-startTime)/1000)
        timerValue = printTime(counter);
        timer.textContent = timerValue;
        await sleep(1000);
    }
}

startStopButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    startTime = new Date();
    if (!start) {
        start = true;
        goTimer();
    } else {
        stopTime = new Date();
        start = false;
    }
})