// const navbar = document.querySelector('.right');

// function handleResize() {
//     if (window.innerWidth >= 340 && window.innerWidth <= 540) {
//         navbar.classList.add('mobile-nav');
//     } else {
//         navbar.classList.remove('mobile-nav');
//     }
// }

// window.addEventListener('resize', handleResize);
// handleResize(); // call on page load

// const navbar = document.querySelector('right');

// function handleResize() {
//     if (window.innerWidth <= 600) {
//         navbar.style.display = 'none';
//     } else {
//         navbar.style.display = 'block';
//     }
// }

const navbar = document.querySelector(".right");
const bars = document.querySelector('.fa-bars')

// document.addEventListener("click", resize)
// function resize (){
//     if (window.innerWidth <=1200){
//         navbar.style.display = "block"
//     }
//     else {
//         navbar.style.display = "none"
//     }
// }
// window.addEventListener('click', toggle)
// function toggle(){
//     if (navbar.style.display = "block")
//     navbar.style.display = "none"
// }
// bars.addEventListener("click", resize)
// function resize (){

//        navbar.classList.toggle('right') 
//     }

    
// let hamburger = document.getElementById("hamburger");
// let navMenu = document.getElementById("nav-menu");

// hamburger.addEventListener("click", function() {
//   hamburger.classList.toggle("open");
//   if (navMenu.style.height === "0px") {
//     navMenu.style.height = "auto";
//   } else {
//     navMenu.style.height = "0px";
//   }
// });
// let hamburger = document.getElementById("hamburger");
// let navMenu = document.getElementById("nav-menu");

// hamburger.addEventListener("click", function() {
//   hamburger.classList.toggle("open");
//   navMenu.classList.toggle("open");
// });

let hamburger = document.getElementById("hamburger");
let navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("open");
  if (navMenu.style.height === "0px" || navMenu.style.height === "") {
    navMenu.style.height = "100%";
    navMenu.style.width = "70%"
  } else {
    navMenu.style.height = "0px";
    navMenu.style.width = "0px"
  }
});

document.getElementById("hamburger").addEventListener("click", function() {
  var nav = document.getElementById("nav-menu");
  var body = document.querySelector("body");
  nav.classList.toggle("open");
  body.classList.toggle("backdrop-blur");
});



const triangle = document.querySelector('.triangle')
var acc = document.querySelector('.acc-log')
document.querySelector('.user').addEventListener('click', function(){
 acc.classList.toggle('open')
})
const user = document.querySelector('.user-acc')
user.addEventListener('click', function (){
  const accountLog = document.querySelector('.acc-log');
  accountLog.classList.toggle('short')
  triangle.classList.toggle('short')
  // if (accountLog.classList.contains('short')){
    
  // }
  // else{
  //   user.classList.remove('user-style')
  // }
})