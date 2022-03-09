console.log("test");

var slideIndex = 3;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("quote");
  var dots = document.getElementsByClassName("quote__dots");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("quote__dots--selected", "quote__dots");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " quote__dots--selected";
}

