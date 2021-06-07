var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__item");
    var dots = document.getElementsByClassName("slider-dots__item");
    var text = document.getElementsByClassName("customer-reviews__text");
    var address = document.getElementsByClassName("customer-reviews__address");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        text[i].style.display = "none";
       address[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    text[slideIndex - 1].style.display = "block";
    address[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var listElements = document.querySelectorAll('.dots');
var sliderNext = document.querySelector('.sliderNext');
var sliderPrev = document.querySelector('.sliderPrev');

listElements.forEach(function(item) {
  item.addEventListener('click', function(event) {
    showSlides(slideIndex = event.currentTarget.getAttribute('data-number'))
  })
})

sliderNext.addEventListener('click', function(event) {
  showSlides(slideIndex = slideIndex + 1)
})

sliderPrev.addEventListener('click', function(event) {
  showSlides(slideIndex = slideIndex - 1)
})