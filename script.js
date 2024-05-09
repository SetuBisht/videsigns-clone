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
    scrub: 0.8,
  },
});

timeLine
  .to(".image1", 3, {
    yPercent: "-300",
  })
  .to(".image2", 3, {
    yPercent: "-300",
  });
