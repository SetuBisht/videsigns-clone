//scroll
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);
document.addEventListener("DOMContentLoaded", function () {
  let div = document.querySelectorAll(".bg");

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
    end: () => "+=" + innerHeight * 2,
    pin: ".desktop",
    scrub: 1,
  },
});

timeLine
  .to(".image1", {
    yPercent: "-300",
    duration: 2,
  })
  .to(".image2", 3, {
    yPercent: "-300",
    duration: 2,
  });
