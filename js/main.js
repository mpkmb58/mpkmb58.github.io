$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});



const test = () => $(".header").toggleClass('bg-grey');;
gsap.to(".header", {
  scrollTrigger: {
    trigger: ".b",
    start: "top center",
    scrub: true,
    end: "bottom top",
    toggleClass: { targets: ".header", className: "bg-grey" }
  }, // start the animation when ".box" enters the viewport (once)
  y: -20,
});

gsap.to(".coin", {
  scrollTrigger: {
    trigger: ".b",
    scrub: 1,
    start: "top bottom",
    end: "top top"
  },
  x: -200,
  ease: "none",
  opacity: 0

});

gsap.to(".hero-mahardika", {
  scrollTrigger: {
    trigger: ".b",
    scrub: 2,
    start: "top bottom",
    end: "top top"
  },
  y: 400,
  ease: "none"
});

$('.menu').on('click', function () {
  $(this).toggleClass('open');
  $('.nav-collaps').toggleClass('show');
  $('.wrapper').toggleClass('small');
});
























