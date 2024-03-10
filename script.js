const lenis = new Lenis({
  duration:1.2,
  easing:(t)=>Math.min(1,1.001 - Math.pow(2,-10*t))
});
lenis.on("scroll", (e) => {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// ----------------- nav -------------------//

gsap.from("#logo",{
  opacity:0,
  scale:1.2,
  duration:1,
})
gsap.from("#nav-product",{
  y:"-100%",
  opacity:0,
  duration:1,
})

gsap.from("#nav-contact",{
  y:"-100%",
  opacity:0,
  duration:1,
})






// ----------------- part-1 -------------------//

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-1",
    start: "50% 50%",
    end: "250% 50%",
    scrub: true,
    pin: true,
  },
});

// tl.to(".rotate-div",{
//     rotate: -15,
//     scale: 0.8,
// },'a')
// tl.to("#row-div-2",{
//     marginTop: "5%"
// },'a')
// tl.to("#row-div-3",{
//     marginTop: "-2%"
// },'a')
// tl.to("#row-div-4",{
//     marginTop: "-8%"
// },'a')
// tl.to("#row-div-5",{
//     marginTop: "-10%"
// },'a')

tl1.to(
  ".overlay-div",
  {
    backgroundColor:"#000",
  },
  "a"
)
tl1.to(".imgs-wrapper-1",{
  y:"-40%",
  duration:1.5,
  scale:.6,
  opacity:0,
},"a")
tl1.to(".imgs-wrapper-2",{
  y:"-40%",
  duration:1.5,
  scale:.6,
  opacity:0,
},"a")
tl1.to(
  ".scrolling",
  {
    width: "100%",
    backgroundColor: "#fff",
  },
  "a"
);
tl1.to(
  ".scroll-down h3",
  {
    color: "#fff",
  },
  "a"
)



Shery.makeMagnet(".magnet-target", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

///--------------part-2/////////////
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content-2",
    start: "20% 50%",
    end: "100% 50%",
    scrub: 1,
  },
});
tl2.to(".text-area-hover h1", {
  width: "100%",
});
tl2.to(".text-area-hover h2", {
  delay: -0.2,
  width: "100%",
});

//------------------part-4-----------//
// var tl4 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".part-4",
//     start: "0% 70%",
//     end: "50% 50%",
//     scrub: true,
//   },
// });
// tl4.to(".rounded-div-wrapper", {
//   height: 0,
//   marginTop: 0,
// });

// let t1 = gsap.timeline({ delay: 0 });
// function loader() {
//   function time() {
//     let a = 0;
//     setInterval(() => {
//       a = a + Math.floor(Math.random() * 15);
//       if (a < 100) {
//         document.querySelector(".loader>h1").innerHTML = a + "%";
//       } else {
//         a = 100;
//         document.querySelector(".loader>h1").innerHTML = a + "%";
//       }
//     }, 100);
//   }

//   t1.to(".loader ", {
//     top: "-100vh",
//     delay: 1,
//     duration: 1.5,
//   });

//   t1.to(".loader h1 ", {
//     delay: 0.4,
//     onStart: time(),
//     duration: 1,
//   });
// }
// loader();

// function btn() {
//   const magneto = document.querySelector(".magneto");
//   const magnetoText = document.querySelector(".text");

//   const activateMagneto = (event) => {
//     let boundBox = magneto.getBoundingClientRect();
//     const magnetotoStrength = 100;
//     const magnetotoTextstrength = 70;

//     const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
//     const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

//     //move  the button to its new position
//     gsap.to(magneto, {
//       duration: 1,
//       x: newX * magnetotoStrength,
//       y: newY * magnetotoTextstrength,
//       ease: Power4.easeOut,
//     });
//     gsap.to(magnetoText, {
//       duration: 1,
//       x: newX * magnetotoStrength,
//       y: newY * magnetotoTextstrength,
//       ease: Power4.easeOut,
//     });
//   };

//   const resetMagneto = () => {
//     gsap.to(magneto, {
//       duration: 1,
//       x: 0,
//       y: 0,
//       ease: Elastic.easeOut,
//     });
//     gsap.to(magnetoText, {
//       duration: 1,
//       x: 0,
//       y: 0,
//       ease: Elastic.easeOut,
//     });
//   };

//   magneto.addEventListener("mousemove", activateMagneto);
//   magneto.addEventListener("mouseleave", resetMagneto);
// }
// btn();

// start function
// function star() {
//   let index = 0,
//     interval = 1000;

//   const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//   const animate = (star) => {
//     star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
//     star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

//     star.style.animation = "none";
//     star.offsetHeight;
//     star.style.animation = "";
//   };

//   for (const star of document.getElementsByClassName("magic-star")) {
//     setTimeout(
//       () => {
//         animate(star);

//         setInterval(() => animate(star), 1000);
//       },
//       index++ * (interval / 3)
//     );
//   }
// }
// star();

// img
// Shery.makeMagnet(".magnet", {
//   //Parameters are optional.
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });

// function imgeffect(){
// let hover = new hoverEffect({
//   parent: document.querySelector(".wrapper"),
//   intensity: 0.3,
//   image1: "./img/img.1.png",
//   image2: "./img/img.2.png",
//   displacementImage: "./img/4.png",
// });

// let hover2 = new hoverEffect({
//   parent: document.querySelector(".wrapper-2"),
//   intensity: 0.3,
//   image1: "./img/img.3.png",
//   image2: "./img/img.2.png",
//   displacementImage: "./img/4.png",
// });
// }
// imgeffect();

// page-2

///text animation for
// function text() {
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     let interval = null;

//     document.querySelector(".name").onmouseover = (event) => {
//       let iteration = 0;

//       clearInterval(interval);

//       interval = setInterval(() => {
//         event.target.innerText = event.target.innerText
//           .split("")
//           .map((letter, index) => {
//             if (index < iteration) {
//               return event.target.dataset.value[index];
//             }

//             return letters[Math.floor(Math.random() * 26)];
//           })
//           .join("");

//         if (iteration >= event.target.dataset.value.length) {
//           clearInterval(interval);
//         }

//         iteration += 1 / 3;
//       }, 30);
//     };
//   }
//   text();



Shery.imageEffect(".img", {
    style: 2, //Select Style
    debug: true, // Debug Panel
    config: {
      /* Config made from debug panel */
    },
    preset: "./presets/wigglewobble.json",
  });