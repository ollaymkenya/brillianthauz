gsap.registerPlugin(ScrollTrigger);

gsap.to('iframe', {
  scrollTrigger: {
    trigger: '.video-container',
    start: 'top 30%',
    end: 'bottom 90%',
    scrub: true,
    toggleActions: 'restart pause resume reset',
    toggleClass: 'active'
  },
  width: '70%',
});
