//scroll
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);
document.addEventListener("DOMContentLoaded", function () {
  let div = document.querySelectorAll(".bg");
  let vim = document.querySelectorAll(".vim");
  let spiral = document.querySelectorAll(".spiral");
  let button = document.querySelectorAll(".button-container");
  let sticky = document.querySelectorAll(".sticky-content");
  let cbutton = document.querySelectorAll(".clone-button");
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
  button[0].style.transform = `translate3d(-50px, 0, 0)`;
  cbutton[0].style.transition = "opacity 0.5s ease, transform 0.5s ease";
  cbutton[0].style.opacity = 0;
  cbutton[0].style.transform = `translate3d(-50px, 0, 0)`;
  // Adjusted translation value

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
    cbutton[0].style.opacity = 1;
    cbutton[0].style.transform = `translate3d(0, 0, 0)`; // Reset translation
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
const buttonContainerTimeline = gsap.timeline();

document
  .getElementById("button-container")
  .addEventListener("mouseenter", function () {
    document.querySelector(".fill-button").style.opacity = "1";
    buttonContainerTimeline.to(".fill-button", {
      y: 0,
      duration: 0.3,
    });
    buttonContainerTimeline.to(
      ".cloneitnow",
      {
        color: "white",
        duration: 0.3,
      },
      0
    );
  });
document
  .getElementById("button-container")
  .addEventListener("mouseleave", function () {
    buttonContainerTimeline.to(".fill-button", {
      y: -180, // Move back to original position
      duration: 0.5,
      onComplete: function () {
        document.querySelector(".fill-button").style.opacity = "0";
        document.querySelector(".fill-button").style.transform =
          "translate(0px,90px)"; // Reset transform property
      },
    });
    buttonContainerTimeline.to(
      ".cloneitnow",
      {
        color: "#0b0931",
        duration: 0.3,
      },
      0
    );
    // Reset the position of the fill button
    buttonContainerTimeline.to(".fill-button", {
      y: 90,
      duration: 0.01, // Set a very short duration to ensure the reset happens immediately
    });
  });

const timeLine = gsap.timeline({
  scrollTrigger: {
    trigger: ".desktop",
    start: "top top",
    end: () => "+=" + innerHeight * 3.2,
    pin: ".desktop",
    scrub: 2,
  },
});

timeLine
  .to(".sticky1, .c1", {
    yPercent: "-20", // Start from the bottom
    opacity: 1,
  })
  .to(".image1", {
    yPercent: "-150",
    duration: 5,
    delay: 2,
  })
  .to(
    ".sticky1, .c1",
    {
      yPercent: "-20", // Move up
      opacity: 0,
    },
    "<" // Play this animation before the previous one ends
  )
  .to(".image2", {
    yPercent: "-200",
    duration: 3,
  })
  .to(
    ".sticky2, .c2",
    {
      yPercent: "-20", // Start from the bottom
      opacity: 1,
      duration: 5,
    },
    6
  ) // Start after 6 seconds
  .to(
    ".sticky2, .c2",
    {
      yPercent: "-20", // Move up
      opacity: 0,
      duration: 5,
    },
    11
  )
  .to(".sticky3, .c3", {
    yPercent: "-100", // Start from the bottom
    opacity: 1,
    duration: 5,
  })
  .to(".sticky3, .c3", {
    yPercent: "-200", // Move up
    opacity: 0,
    duration: 5,
  })
  .to(".sticky4, .c4", {
    yPercent: "-100", // Start from the bottom
    opacity: 1,
    duration: 5,
  })
  .to(".sticky4, .c4", {
    yPercent: "-200", // Move up
    opacity: 0,
    duration: 5,
  })
  .to(".sticky5, .c5", {
    yPercent: "-100", // Start from the bottom
    opacity: 1,
    duration: 5,
  })
  .to(".sticky5, .c5", {
    yPercent: "-200", // Move up
    opacity: 0,
    duration: 5,
  });
