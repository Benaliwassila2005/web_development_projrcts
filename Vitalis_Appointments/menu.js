

tl = gsap.timeline();
tl.from(".right",{
    
    y:-50,
    duration:0.2,
   
   
}).from(".right",{
     x:70,
     yoyo:true,
     repeat:-1,
     opacity:0,
     duration:3,

})