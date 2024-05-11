//scroll
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);
document.addEventListener("DOMContentLoaded", function () {
  let div = document.querySelectorAll(".bg");
  let vim = document.querySelectorAll(".vim");
  let spiral = document.querySelectorAll(".spiral");
  let button = document.querySelectorAll(".button-container");
  let sticky = document.querySelectorAll(".sticky-content");
  div.forEach((div1) => {
    div1.style.opacity = 0;
    div1.style.transition = "opacity 0.5s ease , transform 0.5s ease";
  });
  sticky.forEach((div1) => {
    div1.style.opacity = 0;
    div1.style.transform = "translate3d(0px, 104px, 0px)";
    div1.style.transition = "opacity 0.5s ease , transform 0.5s ease";
  });
  spiral[0].style.transition = "opacity 0.5s ease, transform 0.5s ease";
  spiral[0].style.opacity = 0;
  spiral[0].style.transform = "scale(0.7)";
  button[0].style.transition = "opacity 0.5s ease, transform 0.5s ease";
  button[0].style.opacity = 0;
  button[0].style.transform = `translate3d(-50px, 0, 0)`; // Adjusted translation value

  vim[0].style.transition = "opacity 0.5s ease, transform 0.5s ease";
  vim[0].style.opacity = 0;
  vim[0].style.transform = `translate3d(-50px, 0, 0)`; // Adjusted translation value

  setTimeout(() => {
    vim[0].style.opacity = 1;
    vim[0].style.transform = `translate3d(0, 0, 0)`;

    // Reset translation
  }, 900); // Adjust timing to match the transition duration
  setTimeout(() => {
    button[0].style.opacity = 1;
    button[0].style.transform = `translate3d(0, 0, 0)`; // Reset translation
  }, 1200);
  setTimeout(() => {
    spiral[0].style.opacity = 1;
    spiral[0].style.transform = "scale(1)";
    div.forEach((div1) => {
      div1.style.opacity = 0.21;
    });
  }, 1400);
  document.addEventListener("mousemove", function (e) {
    let newX = e.clientX - div[0].offsetWidth / 2; // New X position
    let newY = e.clientY - div[0].offsetHeight / 2; // New Y position

    // Calculate scaling factor based on mouse position
    let scale = (newX / 100) * 0.085; // If newX is positive, scale up; otherwise, scale down
    if (scale < 0.8) {
      scale = 0.8;
    }
    if (scale > 1.5) {
      scale = 1.4;
    }
    div.forEach((div1) => {
      div1.style.transform = `translate(${newX * 0.09}px, ${
        -newY * 0.09
      }px) scale(${scale})`;
    });
  });
});

let backImage = document.querySelectorAll(".mobile-back");
backImage.forEach((element) => {
  element.style.transform = "scale(0.97)";
});
const timeLine = gsap.timeline({
  scrollTrigger: {
    trigger: ".desktop",
    start: "top top",
    end: () => "+=" + innerHeight * 3,
    pin: ".desktop",
    markers: true,
    scrub: 1,
  },
});

timeLine
  .to(".image1", {
    yPercent: "-150",
    duration: 1,
    delay: 2,
  })
  .to(".image2", 3, {
    yPercent: "-200",
    duration: 1,
  });

// const timeLineSticky = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".desktop",
//     start: "top top",
//     end: () => "+=" + innerHeight * 5,
//     pin: ".desktop",
//     scrub: 1,
//   },
// });
// const timeLineCircle = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".desktop",
//     start: "top top",
//     end: () => "+=" + innerHeight * 5,
//     pin: ".desktop",
//     scrub: 1,
//   },
// });
