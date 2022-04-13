const faders = document.querySelectorAll(".fade-in")
const sliders = document.querySelectorAll('.slide')

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -220px 0px"
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            (entry.target.classList.add("appear"))
            appearOnScroll.unobserve(entry.target)
        }
    })
},appearOptions )


faders.forEach(fader => {
    appearOnScroll.observe(fader)
})
//////////////////////////////////////////// sliders
sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})

