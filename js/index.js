// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar && login button
const navbar = document.querySelector(".navbar");
const loginBtn = document.querySelector(".loginBtn");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    loginBtn.classList.add("loginBtnOnScroll");
    loginBtn.classList.remove("loginBtn");
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    loginBtn.classList.remove("loginBtnOnScroll");
    loginBtn.classList.add("loginBtn");
  }
}

// Getting hamburgur Icon
const hamburgur = document.getElementById("hamburgur");
const rightContent = document.querySelector(".rightContent");
hamburgur.addEventListener("click", () => {
  rightContent.classList.add("active");
  cross.classList.add("active");
  hamburgur.classList.remove("active");
  body.classList.add("body");
});

// cross
cross.addEventListener("click", () => {
  rightContent.classList.remove("active");
  cross.classList.remove("active");
  body.classList.remove("body");
  hamburgur.classList.add("active");
});

// geting show all features
const more_list = document.querySelector(".more_list");
const pricing_heading = document.querySelector(
  ".pricing_center_content_heading"
);
showFeatures.addEventListener("click", () => {
  if (showFeatures.innerHTML === "See All Feautures") {
    more_list.classList.add("show");
    pricing_heading.classList.add("show");
    showFeatures.innerHTML = "See Less";
  }else {
    more_list.classList.remove("show");
    pricing_heading.classList.remove("show");
    showFeatures.innerHTML = "See All Feautures";
  }
});

