const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
});

close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
});

const scene = new ScrollMagic.Scene({
    triggerElement: ".more-info",
    triggerHook: "onLeave",
    duration: "100%"
})
  .setPin(".more-info")
  .setTween(tl)
    .addTo(controller);

// Calculates percentage of a timeline
function updatePercentage() {
    tl.progress();
    console.log(tl.progress());
}


