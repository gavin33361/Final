$(document).ready(function() {
  var timer;
  var timer1;
  var slideIndex = 1;
  showSlides(slideIndex);
  function addIndex(){
    slideIndex+=1;
  };
  // n represents which slide to show
  // ie what slide # the user is expecting
  function showSlides(n) {
    // this is an ARRAY of all HTML elements with class name mySlides
    var slides = $(".mySlides");
    var dots = $(".dot");
    if (slideIndex > slides.length)
    {
      slideIndex = 1;
    }
    // if user clicked next when on last image
    if (n > slides.length) {
      slideIndex = 1;
    } 
    // if user clicked previous when on 1st image
    if (n < 1) {
      slideIndex = slides.length;
    }
    // looping through my slides and 'clearing' it out  
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
    console.log(slideIndex);
    timer = setTimeout(addIndex, 4000);
    timer1 = setTimeout(showSlides, 4000);
  }
  $(".prev").click(function(){
    clearTimeout(timer);
    clearTimeout(timer1);
    slideIndex -= 1;
    showSlides(slideIndex);
  });
  
  $(".next").click(function(){
    clearTimeout(timer);
    clearTimeout(timer1);
    slideIndex += 1;
    showSlides(slideIndex);
  });
  $(".dot").click(function(){
    clearTimeout(timer);
    clearTimeout(timer1);
      // index will be 0, 1, 2, or 3
      var index = $(".dot").index(this);
      slideIndex = index + 1;
      showSlides(slideIndex);
    });
});