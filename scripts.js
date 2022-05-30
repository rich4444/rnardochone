//Dark theme button
const darkButton = document.getElementsByClassName("darktheme--button")[0];
const darkTheme = document.querySelectorAll(".main-color, .secondary-color, .highlight");

darkButton.addEventListener("click", changeDarkMode)

function changeDarkMode (){
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