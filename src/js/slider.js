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

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

var listElements = document.querySelectorAll('.slider-dots__item');

var sliderNext = document.querySelector('.sliderNext');
var sliderPrev = document.querySelector('.sliderPrev');

listElements.forEach(function (item) {
  item.addEventListener('click', function (event) {
    showSlides((slideIndex = event.currentTarget.getAttribute('data-number')));
  });
});

sliderNext.addEventListener('click', function (event) {
  showSlides((slideIndex = slideIndex + 1));
});

sliderPrev.addEventListener('click', function (event) {
  showSlides((slideIndex = slideIndex - 1));
});
