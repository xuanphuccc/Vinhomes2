
// ========== OPEN AND CLOSE SIDE BAR ============
var getNavMenu = document.querySelector('#nav .menu');
var getSideBarBG = document.querySelector('.container-side-bar .side-bar-bg');
var getSideBar = document.querySelector('.container-side-bar .side-bar');
var getTimeIcon = document.querySelector('.container-side-bar .side-bar-exit-icon');

function openSideBar () {
    getSideBar.classList.toggle('open-bar');
    getSideBarBG.classList.toggle('open-bg');
}

getNavMenu.addEventListener('click', openSideBar);
getSideBarBG.addEventListener('click', openSideBar);
getTimeIcon.addEventListener('click', openSideBar);


// ========== OPEN AND CLOSE SIDE BAR drop down============
var getDropHead = document.querySelectorAll('.side-bar-menu-wraper .drop-head');
var getDropContainer = document.querySelectorAll('.side-bar-menu-wraper .drop-container');

function openDrop () {
    getDropContainer[0].classList.toggle('open-drop');
}
function openDrop1 () {
    getDropContainer[1].classList.toggle('open-drop');
}
function openDrop2 () {
    getDropContainer[2].classList.toggle('open-drop');
}

getDropHead[0].addEventListener('click', openDrop);
getDropHead[1].addEventListener('click', openDrop1);
getDropHead[2].addEventListener('click', openDrop2);
