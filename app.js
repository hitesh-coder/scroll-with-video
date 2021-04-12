const intro = document.querySelector(".intro")
const video = intro.querySelector("video")

let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 30000,
    triggerElement: intro,
    triggerHook: 0
})
.addTo(controller)
.setPin(intro)

let easing = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e =>{
    scrollpos = e.scrollPos /1000;
})

setInterval(()=>{
    delay += (scrollpos - delay) * easing;
    console.log(scrollpos,delay)

    video.currentTime = delay;
},33.33)
