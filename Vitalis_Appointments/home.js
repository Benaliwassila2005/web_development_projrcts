let section1 = document.querySelector(".section1");
let h2 = document.querySelector("#H2");
let btn2 = document.querySelector("#btn2");


// console.log(h2);
// console.log(btn2);
// console.log(section1);

tl = gsap.timeline();

tl.from("#H2",{
    opacity:0,
    x:50,
    duration:1,
  
   
}).from("#btn2",{
    opacity:0,
     x :-10,
    duration:1,
}).from(".div1",{

    opacity:0,
     x :-10,
    duration:1,
}).from(".image1",{
    opacity:0,
     x :-10,
    duration:1,
}).from(".content1",{
    opacity:0,
     x :-10,
    duration:1,
}).from(".div2",{
    opacity:0,
     x :-10,
    duration:1,

}).from(".right1",{
    opacity:0,
     x :-50,
    duration:1,
}).from(".left1",{
     opacity:0,
     x :-50,
    duration:1,
}).from(".div3",{
     opacity:0,
     x :-50,
    duration:1,

}).from(".content02",{
    opacity:0,
     x :-50,
    duration:1,

}).from(".content03",{
     opacity:0,
     x :-50,
    duration:1,

}).from(".image02",{
     opacity:0,
     x :-50,
    duration:1,

}).from(".div4",{
    opacity:0,
     x :-50,
    duration:1,

}).from("footer",{
    opacity:0,
     x :-50,
    duration:1,

})




