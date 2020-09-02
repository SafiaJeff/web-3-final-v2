//animates headers from 0 opacity


//"get involved and use design for good"
if(employmentChecker){
    var empHeaderTimeline = gsap.timeline();

    empHeaderTimeline.from("#emp-header", {alpha:0})

    ScrollTrigger.create({
        trigger: "#emp-header",
        start: "top 80%",
        end: "bottom 50%",
        animation: empHeaderTimeline,
        toggleActions: "play play none none",
        // markers: true,
        id:"emp-header"
    });
  
}


//"designers wanted"
if(employmentChecker){

    var empHeader2Timeline = gsap.timeline();

    empHeader2Timeline.from("#designers-wanted", {alpha:0})

    ScrollTrigger.create({
        trigger: "#designers-wanted",
        start: "top 60%",
        end: "bottom 50%",
        animation: empHeader2Timeline,
        toggleActions: "play play none none",
        // markers: true,
        id:"emp-header2"
    });
}
