const intro = document.querySelector(".intro")
const video = intro.querySelector("video")

let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 6500,
    triggerElement: intro,
    triggerHook: 0
})
.addTo(controller)
.setPin(intro)

let scrollpos = 0;

scene.on('update', e =>{
    scrollpos = e.scrollPos /1000;
})

setInterval(()=>{
    video.currentTime = scrollpos;
},33.33)