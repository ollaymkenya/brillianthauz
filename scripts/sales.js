gsap.registerPlugin(ScrollTrigger);

const horizontalBackgrounds = gsap.utils.toArray(
  '.image-background__horizontal'
);

horizontalBackgrounds.forEach((hB) => {
  gsap.to(hB, {
    scrollTrigger: {
      trigger: hB,
      start: 'top 50%',
      toggleClass: 'active',
      toggleActions: 'restart pause resume reset',
      duration: 2,
    },
  });
});
