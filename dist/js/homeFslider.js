// let slideIndex = 1;
// const slides = document.getElementsByClassName("mySlides");

// // Next/previous controls

// const showSlides = n => {
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// };
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }
// showSlides(slideIndex);

// document.querySelector(".prev").addEventListener("click", () => {
//   plusSlides(-1);
// });
// document.querySelector(".next").addEventListener("click", () => {
//   plusSlides(1);
// });
// });
// document.querySelector(".next").addEventListener("click");
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
