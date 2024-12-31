// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Select all sliders
    const sliders = document.querySelectorAll('.image-slider');

    sliders.forEach((slider, index) => {
        let currentIndex = 0;
        const sets = slider.querySelectorAll('.slider-set');
        const totalSets = sets.length;
        const prevButton = slider.querySelector(`#prevBtn${index + 1}`);
        const nextButton = slider.querySelector(`#nextBtn${index + 1}`);
        const sliderWrapper = slider.querySelector('.slider-wrapper');

        // Function to change slide
        function changeSlide() {
            // Adjust the transform to move the slider set
            sliderWrapper.style.transform = `translateX(-${currentIndex * 180}px)`; // Adjust as per your card size

            // Disable/enable buttons based on the current index
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === totalSets - 1;
        }

        // Show the previous set of images
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                changeSlide();
            }
        });

        // Show the next set of images
        nextButton.addEventListener('click', () => {
            if (currentIndex < totalSets - 1) {
                currentIndex++;
                changeSlide();
            }
        });

        // Initialize the slider on page load
        changeSlide();
    });
});
