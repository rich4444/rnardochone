//Dark theme button
const darkButton = document.getElementsByClassName("darktheme--button")[0];
const darkTheme = document.querySelectorAll(".main-color, .secondary-color, .highlight, .waves-main-color, .waves-secondary-color");
const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");

darkButton.addEventListener("click", changeDarkMode)

function changeDarkMode (){
    moonIcon.classList.toggle("animout");
    sunIcon.classList.toggle("animout");
    darkTheme.forEach(el => {
        el.classList.toggle("light");
    })
}


//Scroll down icon
const scrollIcon = document.getElementsByClassName("scroll-icon")[0];

window.onscroll = function (e) {
    if(window.scrollY > 200){
        scrollIcon.classList.add("scrolled");
    }
};