const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// Code for the circle which moves along with the cursor
window.addEventListener("mousemove", (dets)=>{
        document.querySelector("#miniCircle").style.transform =`translate(${dets.clientX}px, ${dets.clientY}px)`
})

// code for the moving pictures in the divs
document.querySelectorAll(".elem").forEach((elem)=>{
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove",(dets)=>{
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate
        rotate = dets.clientX
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot*.5),
        })
    });
    elem.addEventListener("mouseleave",(dets)=>{
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
        })
    });
});
