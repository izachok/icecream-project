const linkmap = document.querySelectorAll('.products__btn');
linkmap.forEach(function (entry) {
  entry.addEventListener('click', function (event) {
    if (event.currentTarget.id === 'btn-1') {
      document.getElementById('icecream-overlay').classList.toggle('overlay-show');
      document.getElementById('icon-1').classList.toggle('products__icon--rotated');
    }
    if (event.currentTarget.id === 'btn-2') {
      document.getElementById('icecofee-overlay').classList.toggle('overlay-show');
      document.getElementById('icon-2').classList.toggle('products__icon--rotated');
    }
    if (event.currentTarget.id === 'btn-3') {
      document.getElementById('milkshakes-overlay').classList.toggle('overlay-show');
      document.getElementById('icon-3').classList.toggle('products__icon--rotated');
    }
    if (event.currentTarget.id === 'btn-mobile-1') {
      document.getElementById('icecream-overlay-mobile').classList.toggle('overlay-show');
      document.getElementById('icon-mobile-1').classList.toggle('products__icon--rotated');
    }
    if (event.currentTarget.id === 'btn-mobile-2') {
      document.getElementById('icecofee-overlay-mobile').classList.toggle('overlay-show');
      document.getElementById('icon-mobile-2').classList.toggle('products__icon--rotated');
    }
    if (event.currentTarget.id === 'btn-mobile-3') {
      document.getElementById('milkshakes-overlay-mobile').classList.toggle('overlay-show');
      document.getElementById('icon-mobile-3').classList.toggle('products__icon--rotated');
    }
  });
});
