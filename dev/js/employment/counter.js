//animates # of positions like a counter

//tweenlite code
// var TweenLite = gsap.timeline();

// var Cont={val:0} , NewVal = 23 ;

// TweenLite.to(Cont,5,{val:NewVal,roundProps:"val",onUpdate:function(){
//   document.getElementById("count-tween").innerHTML=Cont.val
// }});


var employmentChecker = document.querySelector("#employment-page");

if(employmentChecker){
  //tweenlite code
  var TweenLite = gsap.timeline();
  var Cont={val:0} , NewVal = 23 ;
  TweenLite.to(Cont,5,{val:NewVal,roundProps:"val",onUpdate:function(){
    document.getElementById("count-tween").innerHTML=Cont.val
  }});

  //triggered by scroll
  
  ScrollTrigger.create({
    trigger: "#counter",
    start: "top 50%",
    end: "bottom 50%",
    animation: TweenLite,
    toggleActions: "play none none none",
    // markers: true,
    id:"counter"
});
}

// var changeBodyChecker = document.querySelector("#employment-page");
// if(changeBodyChecker){
  
// }