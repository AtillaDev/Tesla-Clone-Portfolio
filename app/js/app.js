const fullpageEl = document.getElementById("fullpage");
const closeBtn = document.getElementById("closeBtn");
const navigation = document.getElementById("nav");
const blurOverlay = document.getElementById("blur");
const menuBtn = document.getElementById("menuBtn");
const footer = document.getElementById("footer");
const secondSection = document.getElementById("section-two");

new fullpage("#fullpage", {
  autoScrolling: true,
  scrollBar: true,
  scrollingSpeed: 400,
});

// $("#fullpage").fullpage({
//   anchors: ["section1", "section2", "section3", "section4"],
// });

const toggleNavigation = () => {
  navigation.classList.toggle("is--active");
  blurOverlay.classList.toggle("is--active");
  // fullpageEl.classList.toggle("no-scroll");
};

menuBtn.addEventListener("click", toggleNavigation);
closeBtn.addEventListener("click", toggleNavigation);
blurOverlay.addEventListener("click", toggleNavigation);

// closeBtn.addEventListener("click", () => {
//   secondSection.classList.add("active");
// });

// $("#fullpage").fullpage({
//   onLeave: function (index, nextIndex, direction) {
//     var idx = Math.abs(index - nextIndex) * 1000;
//     $.fn.fullpage.setScrollingSpeed(idx * 700);
//   },
// });

console.log(footer.style.height);
