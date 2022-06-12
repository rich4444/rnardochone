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
  moonIcon.classList.toggle("anim");
  sunIcon.classList.toggle("anim");
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
const header = document.querySelector("header");

backButton.addEventListener("click", () => {
  header.scrollIntoView();
  closeNavBar();
});

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

//Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar li");

//Navbar links
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    closeNavBar();
    goToSection(link.getAttribute("id"));
  })
);

function goToSection(id) {
  target = [...sections].find((x) => x.getAttribute("id") + "Nav" == id);
  target.scrollIntoView();
}

//Scroll Spy
scrollSpy();
window.onscroll = () => {
  hideScrollIcon();
  scrollSpy();
};

function scrollSpy() {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset - 150 && top < offset + height - 150) {
      navLinks.forEach((link) => {
        let ref = link.getAttribute("id");
        if (ref.includes(id)) {
          link.classList.add("highlight");
        } else {
          link.classList.remove("highlight");
        }
      });
    }
  });
  if (window.scrollY < 300) {
    navLinks.forEach((link) => link.classList.remove("highlight"));
  }
}

//Language button
const langButton = document.getElementsByClassName("language--button")[0];
const engIcon = document.getElementById("engIcon");
const espIcon = document.getElementById("espIcon");
const engText = document.querySelectorAll(".eng");
const espText = document.querySelectorAll(".esp");
langButton.addEventListener("click", (e) => {
  changeLanguage();
});

var userLang = navigator.language || navigator.userLanguage;

if (/^es\b/.test(navigator.language)) {
  languageSpanish();
}

function languageSpanish() {
  engIcon.classList.remove("anim");
  espIcon.classList.add("anim");
  engText.forEach((e) => {
    e.classList.add("hideText");
  });
  espText.forEach((e) => {
    e.classList.remove("hideText");
  });
}
function languageEnglish() {
  engIcon.classList.add("anim");
  espIcon.classList.remove("anim");
  engText.forEach((e) => {
    e.classList.remove("hideText");
  });
  espText.forEach((e) => {
    e.classList.add("hideText");
  });
}

function changeLanguage() {
  if (espIcon.classList.contains("anim")) {
    languageEnglish();
  } else {
    languageSpanish();
  }
}

//Sandwich navbar
const openButton = document.getElementById("showNav");
const closeButton = document.getElementById("hideNav");
const openCloseButtons = document.getElementsByClassName("navBarButtons")[0];
const ulList = document.getElementById("navbar");

window.addEventListener("resize", () => {
  if (openCloseButtons.offsetParent === null) {
    closeNavBar();
  }
});

openButton.addEventListener("click", () => {
  closeButton.style.display = "block";
  ulList.classList.add("openNav");
  openButton.style.display = "none";
});

closeButton.addEventListener("click", () => {
  closeNavBar();
});

function closeNavBar() {
  closeButton.style.display = "none";
  ulList.classList.remove("openNav");
  openButton.style.display = "block";
}

// // Fix url bar
// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// // We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//Googlie eyes
const eye = document.getElementsByClassName("eye");
const pupil = document.querySelectorAll(".pupil");

document.addEventListener("mousemove", (e) => {
    for(let i = 0; i < pupil.length; i++){
      let distX = e.clientX-getOffset(eye[i]).left;
      let distY = e.clientY-getOffset(eye[i]).top;
      pupil[i].style.transform = `translate(${positionMouse(distX)}%, ${positionMouse(distY)}%)`;
    }
})

function positionMouse (dist){
  let newValue = (((dist + 100) * 100) / 200) -100;
  return Math.min(Math.max(newValue, -100), 0)
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX + el.clientWidth/2,
      top: rect.top + window.scrollY + el.clientHeight/2
    };
  }

  //Observer
const toload = document.querySelectorAll(".toload");

const options = {
    root: null,
    threshold: 0.05,
    rootMargin: "-100px"
};

const observer = new IntersectionObserver(
    function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("loaded");
                observer.unobserve(entry.target);
            }
        })
    }, options);

toload.forEach(section => {
    observer.observe(section)
});
