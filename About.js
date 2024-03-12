const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".container"),
  smooth: true,
});

Shery.makeMagnet(".magnet", {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.set(".img", { y: 500 });
  gsap.set(".loader-imgs", { x: 400 });

  let t1 = gsap.timeline({ delay: 0 });
  t1.to(".img", {
    y: 0,
    duration: 1.5,
    stagger: 0.05,
    ease: "power3.inOut",
  })
    .to(
      ".loader-imgs",
      {
        x: "0%",
        duration: 3,
        ease: "power3.inOut",
        opacity: 1,
      },
      "-=2.5"
    )
    .to(
      ".loader",
      {
        duration: 1,
        ease: "power3.inOut",
      },
      "-=-1"
    )
    .to(
      ".loader",
      {
        y: "-100%",
        opacity: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.inOut",
        stagger: 1,
      },
      "-=.1"
    );
});

function pageitems(){
let tl = gsap.timeline({ delay: 2 });

tl.from(".logo",{
  y: "-100",
  duration:1,
  stagger:1,
  delay:.2
})

tl.from(".nav-links",{
  y: "-100",
  duration:1,
  stagger:1
})

tl.from(".upper-container",{
  scale:1,
  opacity:0
})
}
pageitems()



function time() {
  let time=document.querySelector('.time')
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();
  time.textContent = 
    ("0" + h) + ":" + ("0" + m).substr(-2);
}
time()