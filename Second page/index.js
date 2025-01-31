// Slide Navigation for Courses Section
const slideset = document.querySelectorAll(".coursesslides");
const slideFront = document.querySelectorAll(".scroll1");
const slideBack = document.querySelectorAll(".scroll2");

slideset.forEach((item, i) => {
    let slideSetDimension = item.getBoundingClientRect();
    let slideWidth = slideSetDimension.width;

    slideFront[i].addEventListener('click', () => {
        item.scrollLeft += slideWidth;
    });

    slideBack[i].addEventListener('click', () => {
        item.scrollLeft -= slideWidth;
    });
});

// Slide Navigation for Students Section
const fullSlide = document.querySelectorAll(".studentsinteretslides");
const nextSlide = document.querySelectorAll(".scroll3");
const prevSlide2 = document.querySelectorAll(".scroll5");

fullSlide.forEach((item, a) => {
    const scrollDimension = item.getBoundingClientRect();
    const scrollWidth = scrollDimension.width;

    prevSlide2[a].addEventListener("click", () => {
        item.scrollLeft -= scrollWidth;
    });

    nextSlide[a].addEventListener("click", () => {
        item.scrollLeft += scrollWidth;
    });
});

// Video Play on Hover in Slides
const slides = document.querySelectorAll('.slide1');

slides.forEach(slide => {
    const video = slide.querySelector('video');
    const img = slide.querySelector('img'); // To hide the image when video plays

    slide.addEventListener('mouseenter', () => {
        video.style.display = 'block'; // Show the video
        img.style.display = 'none'; // Hide the image
        video.play();
    });

    slide.addEventListener('mouseleave', () => {
        video.style.display = 'none'; // Hide the video
        img.style.display = 'block'; // Show the image again
        video.pause();
        video.currentTime = 0; // Reset the video
    });
});

// Theme Change Feature
let modeBTN = document.querySelector("#mode");
let currMode = "light"; // Default is light mode
let body = document.querySelector("body");

// Add event listener to toggle the theme
modeBTN.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});

const toggle = document.getElementById('mode');

toggle.addEventListener('change', function() {
   
});

// check for saved user preference, if any, on load of the website
document.addEventListener('DOMContentLoaded', (event) => {
    const darkMode = localStorage.getItem('darkMode');
});
