//Get the button:
let mybutton = document.getElementById("button-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

mybutton.onclick = topFunction;

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
    
  document.body.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
  });
    
  document.documentElement.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
}