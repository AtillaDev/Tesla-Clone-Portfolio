// gsap.registerPlugin(ScrollTrigger);

// const arrow = document.querySelector(".down-icon");

// ScrollTrigger.create({
//   start: "top top",
//   end: "max",
//   onUpdate: Hide,
// });

// function Hide() {
//   if (ScrollTrigger.isInViewport(document.querySelector(".three"))) {
//     arrow.style.opacity = "0";
//   } else {
//     arrow.style.opacity = "100";
//   }
// }
// Hide();

gsap.to(".down-icon", {
  scrollTrigger: {
    trigger: ".two",
    end: "top center",
    toggleActions: "restart none none none",
    scrub: true,
  },
  opacity: 0,
});
