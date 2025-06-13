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

  const titles = [1, 2, 3, 4, 5];
  titles.forEach((num, i) => {
    gsap.to(`.gsap-title${num}`, {
      scrollTrigger: {
        trigger: `.gsap-title${num}`,
        toggleActions: "restart pause restart pause"
      },
      x: 0,
      duration: num === 1 || num === 5 ? 1 : 0.5
    });
  });


  const educs = [
    {selector: ".gsap-educ1", duration: 0.5},
    {selector: ".gsap-educ2", duration: 0.4},
    {selector: ".gsap-educ3", duration: 0.3}
  ];

  educs.forEach(({selector, duration}) => {
    gsap.to(selector, {
      scrollTrigger: {
        trigger: selector,
        toggleActions: "restart pause restart pause"
      },
      x: 0,
      duration,
      ease: "power2.out" // optional: smoother motion
    });
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
