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
const sectionMain = document.querySelector('.page__main');
// place for more constants contain othe sections


const toggleMain = function(){

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


// execute functions added events to buttons
showList();
showAdd();
showInfo();

