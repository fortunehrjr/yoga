const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};

const slideOptions = {
  threshold: 0,
  rootMargin: "0px 0px -500px 0px",
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const slideOnScroll = new IntersectionObserver(function (
  entries,
  slideOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      slideOnScroll.unobserve(entry.target);
    }
  });
},
slideOptions);

sliders.forEach((slider) => {
  slideOnScroll.observe(slider);
});
