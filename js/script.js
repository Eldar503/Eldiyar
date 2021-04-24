//Variables for setup

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('.hero__content');
const social = intro.querySelector('.social');
                         // END
const section  = document.querySelector('section');
const end = section.querySelector('h2');

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration:180000,
    triggerElement:intro,
    triggerHook:0
})
.setPin(intro)
.addTo(controller);

const animation = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity:0});
const animation2 = TweenMax.fromTo(social,3, {opacity: 1}, {opacity:0})

let scene2 = new ScrollMagic.Scene({
    duration:500,
    triggerElement:intro,
    triggerHook:0
})
.setTween(animation)
.addTo(controller);
let scene3 = new ScrollMagic.Scene({
    duration:500,
    triggerElement:intro,
    triggerHook:0
})
.setTween(animation2)
.addTo(controller)
//vicdeo animation 
let accelamount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on('update', e => {
    scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollPos - delay) * accelamount;
    video.currentTime = delay;
}, 33.33);


