// document.addEventListener("DOMContentLoaded", function () {
//     const sliders = document.querySelectorAll(".image-slider");

//     sliders.forEach((slider) => {
//         const sliderWrapper = slider.querySelector(".slider-wrapper");
//         const sets = slider.querySelectorAll(".slider-set");
//         const prevButton = slider.querySelector(".prev-btn");
//         const nextButton = slider.querySelector(".next-btn");

//         let currentIndex = 0;
//         const totalSets = sets.length;

//         function changeSlide() {
//             sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
//             prevButton.disabled = currentIndex === 0;
//             nextButton.disabled = currentIndex === totalSets - 1;
//         }

//         prevButton.addEventListener("click", () => {
//             if (currentIndex > 0) {
//                 currentIndex--;
//                 changeSlide();
//             }
//         });

//         nextButton.addEventListener("click", () => {
//             if (currentIndex < totalSets - 1) {
//                 currentIndex++;
//                 changeSlide();
//             }
//         });

//         changeSlide(); // Initialize the slider state
//     });
// });




const navMenu = document.getElementById('nav'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}