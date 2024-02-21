let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let images = []; // Array to hold image elements

  // Preload images
  for (let i = 0; i < slides.length; i++) {
    let img = new Image();
    img.src = slides[i].querySelector("img").src;
    images.push(img);
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000); // Change 3000 to adjust interval
}

showSlides();
