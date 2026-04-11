
tl = gsap.timeline();

tl.from(".about",{
    opacity:0,
    x:30,
    duration:1,
}).from(".content01",{
    opacity:0,
    x:30,
    duration:2,
    
}).from(".imG",{
     opacity:0,
     x:30,
     duration:3,
    

}).from("#div",{
      opacity:0,
      x:-10,
      duration:3,
     


})
.from("footer",{
    opacity:0,
     x :50,
    duration:3,

})

