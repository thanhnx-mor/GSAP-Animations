// gsap.from("img", {x: 800, y: 400, duration: 3, rotation: 360,  repeat: -1, yoyo: true});

let path = document.querySelectorAll('#logo path');
console.log(path)
for (let i = 0; i < path.length; i++) {
    console.log(`path ${i}: ${path[i].getTotalLength()}`)
}

gsap.timeline()
    .from('#input', { opacity: 1, duration: 0.5 })
    .from('#text', { y: 160, duration: 1 })
    .from('#box', {opacity: 0})
    .from('#icon', { opacity: 0, scale: 2, ease: "back.out(1.7)", x: 5 })


// GSDevTools.create();

// var tl = gsap.timeline({onUpdate:updateSlider, defaults: {duration: 1}}),
//     circle = document.getElementById("circle");

// tl.to(circle, {morphSVG:"#hippo"}, "+=1")
//   .to(circle, {morphSVG:"#star"}, "+=1")
//   .to(circle, {morphSVG:"#elephant"}, "+=1")
//   .to(circle, {morphSVG:circle}, "+=1");








// /* controls */

// $("#slider").slider({
//   range: false,
//   min: 0,
//   max: 1,
//   step:.001,
//   slide: function ( event, ui ) {
//     tl.progress( ui.value ).pause();
//   },
//   stop: function () {
//     tl.play();
//   }
// }); 

// function updateSlider() {
//   $("#slider").slider("value", tl.progress());
// } 