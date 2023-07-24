const sliderImages = document.querySelectorAll(".slider-img");
let currentIndex = 0;

function showImage(index) {
    if (index < 0) {
        currentIndex = sliderImages.length - 1;
    } else if (index >= sliderImages.length) {
        currentIndex = 0;
    }
    
    sliderImages.forEach((image, i) => {
        image.style.display = i === currentIndex ? "block" : "none";
    });
}

function nextImage() {
    currentIndex++;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex--;
    showImage(currentIndex);
}

// Automatically advance the slider (optional)
setInterval(nextImage, 3000); // Change image every 3 seconds

showImage(currentIndex);
