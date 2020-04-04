var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
const countDate = new Date("May 1, 2020 00:00:00").getTime();
const newYear = () => {
  let now = new Date().getTime();
  let gap = countDate - now;
  let secound = 1000;
  let minute = secound * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / secound);
  console.log(d);
  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("secound").innerText = s;
  document.querySelector(".day").innerHTML = `${d} Days`;
  document.querySelector(".hour").innerHTML = `${h} Hours`;
  document.querySelector(".minute").innerHTML = `${m} Mins`;
  document.querySelector(".secound").innerHTML = `${s} Sec`;
};
setInterval(function() {
  newYear();
}, 1000);
