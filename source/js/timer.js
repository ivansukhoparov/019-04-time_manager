const startStopButton = document.querySelector('#start-stop-button');
const timer = document.querySelector('#timer');

let counter = 0;
let start = false;
let startTime, currentTime, stopTime;


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
        counter = Math.round((currentTime - startTime) / 1000)
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

// block of code that hide and show additional sections -
// list of projects, add project and project info and also 
// toggle light and dark theme

// variables contain buttons
const buttonList = document.querySelector('.button--list');
const buttonAdd = document.querySelector('.button--add');
const buttonEnter = document.querySelector('.button--enter');
const buttonTheme = document.querySelector('.button--theme');

//variables contain sections needed hidding and showing
const sectionList = document.querySelector('.page__projects-list');
const sectionAdd = document.querySelector('.page__add');
const sectionInfo = document.querySelector('.page__details');
const sectionMenu = document.querySelector('.page__menu');
const sectionMain = document.querySelector('.page__main');
// place for more constants contain othe sections


const toggleMain = function(){
    sectionMenu.classList.toggle('hidden--mobile-only')
    sectionMain.classList.toggle('hidden--mobile-only')
}

//functions for add adn remove event to close button
const setCloseButton = function (section) {
    const buttonClose = section.querySelector('.button--close');
    buttonClose.addEventListener('click', (evt) => {
        evt.preventDefault();
        toggleMain();
        section.classList.add('hidden');
    })
}


// functions for show same section
const showList = function () {
    buttonList.addEventListener('click', (evt) => {
        evt.preventDefault();
        toggleMain();
        sectionList.classList.toggle('hidden');
        setCloseButton(sectionList);
    });
}

const showAdd = function () {
    buttonAdd.addEventListener('click', (evt) => {
        evt.preventDefault();
        toggleMain();
        sectionAdd.classList.toggle('hidden');
        sectionInfo.classList.add('hidden');
        setCloseButton(sectionAdd)
    });
}

const showInfo = function () {
    buttons = sectionList.querySelectorAll('.projects-list__info');
    buttons.forEach((element) => {
        element.addEventListener('click', (evt) => {
            evt.preventDefault();
            toggleMain();

            sectionInfo.classList.remove('hidden');
            sectionAdd.classList.add('hidden');
 
            setCloseButton(sectionInfo)
        })
    });
}

showList();
showAdd();
showInfo();

