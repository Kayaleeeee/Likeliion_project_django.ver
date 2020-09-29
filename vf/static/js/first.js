// window.onscroll = function () {
//   myFunction();
// };

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

let navbar = document.getElementById("navbar");
let introduction = document.getElementsByClassName("introduction");
let f_img = document.getElementsByClassName("feature-img");
let menu = document.getElementById("menu");

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  this.scrollFunction();
  this.scrollTwo();
  // this.scrollThird();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = "15px 10px";
    document.getElementById("logo").style.width = "40px";
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = "white";
    navbar.style.position = "fixed";
    navbar.classList.add("shadow");
    navbar.style.color = "gray";
  } else {
    navbar.style.padding = "60px 10px";
    document.getElementById("logo").style.width = "70px";
    navbar.style.color = "rgba(1, 1, 1, 0.1)";
    navbar.style.background = "transparent";
    navbar.classList.remove("shadow");
  }
}

function scrollTwo() {
  let keyword = document.getElementById("key_animation");

  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    keyword.classList.add("key_class_ani");
    console.log("TLFGO 실행");
  } else {
    keyword.classList.remove("key_class_ani");
    console.log("out");
  }
}

let review = document.querySelectorAll("ol");
let current = 0;
function interval() {
  reset();
  setInterval(function slideRight() {
    reset();
    if (current == review.length - 1) {
      startReview();
    } else {
      current++;
      review[current].style.display = "block";
    }
  }, 3000);
}

function reset() {
  for (let i = 0; i < review.length; i++) {
    review[i].style.display = "none";
  }
}
function startReview() {
  review[0].style.display = "block";
  current = 0;
}

interval();
