let tl2 = gsap.timeline();


gsap.to(".box", {
  duration: 2,
  ease: "linear",
  yoyo: true,
  repeat: -1,
  borderRadius: 32,
})

gsap.from("#illustration path", {
  duration: 1,
  ease: "back.out(1.5)",
  yoyo: true,
  repeat: -1,
  repeatDelay: 0.5,
  scale: 0,
  transformOrigin: "center center",
  stagger: 0.15,
});

tl2
  .to("#features-phone", {
    duration: 2.5,
    ease: "linear",
    yoyo: true,
    repeat: -1,
    rotation: 3,
  })
  .to("#features-phone", {
    duration: 2.5,
    ease: "linear",
    yoyo: true,
    repeat: -1,
    rotation: -3,
  });

// gsap.to("#logo", {
//   duration: 2,
//   ease: "linear",
//   yoyo: true,
//   repeat: -1,
//   transformOrigin: "center",
//   rotation: -180,
// });
