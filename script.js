//scroll
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

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
