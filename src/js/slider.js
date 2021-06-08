var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var sliderContainer = document.querySelector('#customer-reviews');

  var slides = sliderContainer.querySelectorAll('.slider__item');
  var dots = sliderContainer.querySelectorAll('.slider-dots__item');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(slide => (slide.style.display = 'none'));

  dots.forEach(dot => dot.classList.remove('active'));

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

var listElements = document.querySelectorAll('.slider-dots__item');

var sliderNext = document.querySelector('.sliderNext');
var sliderPrev = document.querySelector('.sliderPrev');

listElements.forEach(function (item) {
  item.addEventListener('click', function (event) {
    let num = Number(event.currentTarget.getAttribute('data-number'));
    if (isNaN(num)) num = 1;
    showSlides((slideIndex = num));
  });
});

sliderNext.addEventListener('click', function (event) {
  showSlides((slideIndex = slideIndex + 1));
});

sliderPrev.addEventListener('click', function (event) {
  showSlides((slideIndex = slideIndex - 1));
});

//add auto turn over slides
setTimeout(function turnNext() {
  showSlides((slideIndex += 1));
  setTimeout(turnNext, 4000);
}, 4000);
