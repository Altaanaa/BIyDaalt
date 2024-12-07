// Get all images and dots
const images = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');

// Initial setup
let currentIndex = 0;
images[currentIndex].classList.add('active');

// Function to change image
function changeImage(newIndex) {
    // Remove active class from current image and dot
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    // Update current index
    currentIndex = newIndex;

    // Add active class to new image and dot
    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// Automatic image changing function
function autoChangeImage() {
    // Calculate next index, wrapping around to 0 if at the end
    let nextIndex = (currentIndex + 1) % images.length;
    changeImage(nextIndex);
}

// Set up interval to change image every 3 seconds
let imageInterval = setInterval(autoChangeImage, 3000);

// Add click event listeners to dots for manual navigation
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        // Get the index from the data attribute
        const newIndex = parseInt(dot.getAttribute('data-index'));
        
        // Reset the interval when manually changing image
        clearInterval(imageInterval);
        imageInterval = setInterval(autoChangeImage, 3000);
        
        // Change to clicked image
        changeImage(newIndex);
    });
});