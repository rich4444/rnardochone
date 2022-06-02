//Dark theme button
const darkButton = document.getElementsByClassName("darktheme--button")[0];
const darkTheme = document.querySelectorAll(
  ".main-color, .secondary-color, .highlight, .waves-main-color, .waves-secondary-color, #navbar a"
);
const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");

darkButton.addEventListener("click", changeDarkMode);

if (localStorage.getItem("darkTheme") == "light") {
  changeDarkMode();
}

function changeDarkMode() {
  moonIcon.classList.toggle("animout");
  sunIcon.classList.toggle("animout");
  darkTheme.forEach((el) => {
    el.classList.toggle("light");
  });
  localStorage.setItem(
    "darkTheme",
    darkTheme[0].classList.contains("light") ? "light" : "dark"
  );
}

//Scroll down icon and back to top button
const scrollIcon = document.getElementsByClassName("scroll-icon")[0];
const backButton = document.getElementById("back-button");

function hideScrollIcon() {
  if (window.scrollY > 200) {
    scrollIcon.classList.add("scrolled");
  }
  if (window.scrollY > 500) {
    backButton.classList.add("scrolled");
  } else {
    backButton.classList.remove("scrolled");
  }
}

//scroll spy
const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("#navbar a");

function scrollSpy() {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset - 150 && top < offset + height - 150) {
      navlinks.forEach((link) => {
        let ref = link.getAttribute("href");
        if (ref == id) {
          link.classList.add("highlight");
        } else {
          link.classList.remove("highlight");
        }
      });
    }
  });
  if (window.scrollY < 300) {
    navlinks.forEach((link) => link.classList.remove("highlight"));
  }
}

window.onscroll = () => {
  hideScrollIcon();
  scrollSpy();
};


//Language button
const langButton = document.getElementsByClassName("language--button")[0];
const engIcon = document.getElementById("engIcon");
const espIcon = document.getElementById("espIcon");
const engText = document.querySelectorAll(".eng");
const espText = document.querySelectorAll(".esp");

langButton.addEventListener("click", e => {
    changeLanguage()
})


var userLang = navigator.language || navigator.userLanguage;

if(/^en\b/.test(navigator.language)){
    languageEnglish();
}

function languageSpanish (){
    engIcon.classList.add("animout");
    espIcon.classList.remove("animout");
    engText.forEach((e) => {
        e.classList.add("hideText");
    })
    espText.forEach((e) => {
        e.classList.remove("hideText");
    })
}
function languageEnglish (){
    engIcon.classList.remove("animout");
    espIcon.classList.add("animout");
    engText.forEach((e) => {
        e.classList.remove("hideText");
    })
    espText.forEach((e) => {
        e.classList.add("hideText");
    })
}

function changeLanguage() {
    if(engIcon.classList.contains("animout")){
        languageEnglish();
    } else {
        languageSpanish();
    }
  }