document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);
  
  gsap.to(".gsap-intro", {
    duration: 3,
    scrambleText: {
      text: "Learning web development from scratch, step by step.",
      chars: "-",
      revealDelay: 0.5,
      speed: 0.1,
      newClass: "myClass"
    }
  });

  gsap.from(".gsap-nav", {
    duration: 1,
    y: "-150%",
    ease: "bounce",
    delay: 3
  });

  gsap.fromTo(
    ".gsap-info",
    {
      opacity: 0,
      scale: 0
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 3
    }
  );

  const popup = gsap.timeline({default: {opacity: 0}});
  popup
    .fromTo(
      ".gsap-button",
      {
        scale: 0
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 3
      }
    )

    .fromTo(
      ".gsap-button",
      {
        scale: 0
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 3
      }
    );

  gsap.to(".gsap-title1", {
    scrollTrigger: {
      trigger: ".gsap-title1",
      toggleActions: "restart pause restart pause"
    }, // start the animation when ".box" enters the viewport (once)
    x: 0,
    duration: 1
  });
  gsap.to(".gsap-title2", {
    scrollTrigger: {
      trigger: ".gsap-title2",
      toggleActions: "restart pause restart pause"
    }, // start the animation when ".box" enters the viewport (once)
    x: 0,
    duration: 0.5
  });
  gsap.to(".gsap-title3", {
    scrollTrigger: {
      trigger: ".gsap-title3",
      toggleActions: "restart pause restart pause"
    }, // start the animation when ".box" enters the viewport (once)
    x: 0,
    duration: 0.5
  });
  gsap.to(".gsap-title4", {
    scrollTrigger: {
      trigger: ".gsap-title4",
      toggleActions: "restart pause restart pause"
    }, // start the animation when ".box" enters the viewport (once)
    x: 0,
    duration: 0.5
  });
  gsap.to(".gsap-title5", {
    scrollTrigger: {
      trigger: ".gsap-title5",
      toggleActions: "restart pause restart pause"
    }, // start the animation when ".box" enters the viewport (once)
    x: 0,
    duration: 1
  });


  gsap.to(".gsap-educ1", {
    scrollTrigger: {
      trigger: ".gsap-educ1",
      toggleActions: "restart pause restart pause"
    }, // start the animation when ".box" enters the viewport (once)
    x: 0,
    duration: 0.5
  });
  gsap.to(".gsap-educ2", {
    scrollTrigger: {
      trigger: ".gsap-educ2",
      toggleActions: "restart pause restart pause"
    }, // start the animation when ".box" enters the viewport (once)
    x: 0,
    duration: 0.4
  });
  gsap.to(".gsap-educ3", {
    scrollTrigger: {
      trigger: ".gsap-educ3",
      toggleActions: "restart pause restart pause"
    }, // start the animation when ".box" enters the viewport (once)
    x: 0,
    duration: 0.3
  });
});





// gsap.to(".ghost", {
//   scrollTrigger: {
//     trigger: ".c",
//     start: "top center",
//     end: "top 100px",
//     scrub: true,
//     markers: true
//   },
//   x: 400,
//   rotation: 360,
//   ease: "none",
//   duration: 3
// });
