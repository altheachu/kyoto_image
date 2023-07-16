window.onload = function () {
    let intervalId;
    
    intervalId = setInterval(function () {
        plusSlides();
    }, 10000);

    let slideIndex = 1;
    showSlide(slideIndex);
  
    let prev = document.getElementById("prev");
    prev.addEventListener("click", divideSlides, false);
  
    let next = document.getElementById("next");
    next.addEventListener("click", plusSlides, false);
  
    const selectdot = document.querySelectorAll(".dot");
    for (let i = 0; i < selectdot.length; i++) {
      selectdot[i].addEventListener("click", function (e) {
        showSlide((slideIndex = i + 1));
      });
    }

    function plusSlides() {
      showSlide((slideIndex += 1));
      clearInterval(intervalId);
      intervalId = setInterval(function () {
        plusSlides();
      }, 10000);
    }
  
    function divideSlides() {
      showSlide((slideIndex -= 1));
      clearInterval(intervalId);
      intervalId = setInterval(function () {
        plusSlides();
      }, 10000);
    }
  
    function showSlide(num) {
      let slides = document.getElementsByClassName("slide__item");
      let dots = document.getElementsByClassName("dot");
      let descriptions = document.getElementsByClassName("slide__content");

      if (num > slides.length) {
        slideIndex = 1;
      }
  
      if (num < 1) {
        slideIndex = slides.length;
      }
      /*hide all slides display setting*/
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      /*clear all dots active setting*/
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }
      /*clear all dots descriptions*/
      for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = "none";
      }
  
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      descriptions[slideIndex - 1].style.display = "flex";
    }
  };