// =======================
// KSB Web Studio
// Premium Script Part 1
// =======================

// Navbar Blur on Scroll

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 30){

navbar.style.background = "rgba(5,8,22,.85)";

navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";

}else{

navbar.style.background = "rgba(8,12,30,.55)";

navbar.style.boxShadow = "none";

}

});

// Button Animation

const buttons = document.querySelectorAll("a");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-3px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});

console.log("KSB Web Studio Loaded Successfully 🚀");
// Mobile Menu

const menuBtn = document.getElementById("menu-btn");

const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});
// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach(section=>{

const windowHeight = window.innerHeight;

const revealTop = section.getBoundingClientRect().top;

const revealPoint = 120;

if(revealTop < windowHeight - revealPoint){

section.classList.add("active");

}

});

}

window.addEventListener("scroll", revealSections);

revealSections();
