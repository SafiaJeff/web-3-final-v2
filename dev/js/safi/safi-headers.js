var safiChecker = document.querySelector("#honors-page");

//"Logo design 101"
if(safiChecker){
    var safiHeaderTimeline = gsap.timeline();

    safiHeaderTimeline.from("#logo-design-101", {alpha:0})

    ScrollTrigger.create({
        trigger: "#logo-design-101",
        start: "top 80%",
        end: "bottom 50%",
        animation: safiHeaderTimeline,
        // markers: true,
        toggleActions: "play play none none"
        

    });
  
}

//"The Critics"
if(safiChecker){
    var safiHeader2Timeline = gsap.timeline();

    safiHeader2Timeline.from("#the-critics", {alpha:0})

    ScrollTrigger.create({
        trigger: "#the-critics",
        start: "top 80%",
        end: "bottom 50%",
        animation: safiHeader2Timeline,
        // markers: true,
        toggleActions: "play play none none"
        

    });
  
}