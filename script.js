// for offer section 
var offer=document.querySelector(".offer")
var offer_close=document.getElementById("offer_close")
offer_close.addEventListener("click",function(){
    offer.style.display="none"
})
//for menu open
var menubar=document.getElementById("menubar")
var menu_open = document.querySelector(".menu_open");
menubar.addEventListener("click",function(){
  menu_open.style.display="block"
})
// for menu close
var menu_close=document.getElementById("menu_close")

menu_close.addEventListener("click",function(){
  menu_open.style.display="none"
})
//for slide container

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}


function changeSlide(step) {
  currentSlide += step;
  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  showSlide(currentSlide);
}

// Show the first slide by default
showSlide(currentSlide);

//For most wanted
function toggleHeart(element) {
  element.classList.toggle("liked");
}