function burgerAnimation() {
    const burger = document.querySelector(".hamburger");
    const links = document.querySelector(".nav-menu");
    const link = document.querySelectorAll(".nav-li");

    function click() {
        links.classList.toggle("hamburger-active");
    }

    burger.addEventListener("click", click);
}

burgerAnimation();


function burgerLinks() {
    const link = document.querySelectorAll(".nav-link");
    const navMenu = document.querySelector(".nav-menu");

    function close() {
        navMenu.classList.remove("hamburger-active");
    }

    for(let i = 0; i < link.length; i++) {
        var each = i;
        link[each].addEventListener("click", close);
    }
}

burgerLinks();


var value = 1;
const rightBTN = document.querySelector(".sec-1-carusel-btn-right");
const leftBTN = document.querySelector(".sec-1-carusel-btn-left");
const carusel = document.querySelector(".sec-1-carusel-content");

if(value == 1) {
    leftBTN.classList.add("carusel-display");
}

function rightClick() {
    value = value + 1;

    if(value > 1) {
        leftBTN.classList.remove("carusel-display")
    } if(value == 10) {
        rightBTN.classList.add("carusel-display")
    }

    console.log(value)
}

rightBTN.addEventListener("click", rightClick)

function leftClick() {
    value = value - 1;

    if(value == 1) {
        leftBTN.classList.add("carusel-display")
    } if (value < 10) {
        rightBTN.classList.remove("carusel-display")
    }

    console.log(value)
}

leftBTN.addEventListener("click", leftClick)


function skip() {
    if(value == 1) {
        carusel.classList.add("one")
    } else {
        carusel.classList.remove("one")
    }
    if(value == 2) {
        carusel.classList.add("two")
    } else {
        carusel.classList.remove("two")
    }
    if(value == 3) {
        carusel.classList.add("three")
    } else {
        carusel.classList.remove("three")
    }
    if(value == 4) {
        carusel.classList.add("four")
    } else {
        carusel.classList.remove("four")
    }
    if(value == 5) {
        carusel.classList.add("five")
    } else {
        carusel.classList.remove("five")
    }
    if(value == 6) {
        carusel.classList.add("six")
    } else {
        carusel.classList.remove("six")
    }
    if(value == 7) {
        carusel.classList.add("seven")
    } else {
        carusel.classList.remove("seven")
    }
    if(value == 8) {
        carusel.classList.add("eigth")
    } else {
        carusel.classList.remove("eigth")
    }
    if(value == 9) {
        carusel.classList.add("nine")
    } else {
        carusel.classList.remove("nine")
    }
    if(value == 10) {
        carusel.classList.add("ten")
    } else {
        carusel.classList.remove("ten")
    }
}

leftBTN.addEventListener("click", skip)
rightBTN.addEventListener("click", skip)