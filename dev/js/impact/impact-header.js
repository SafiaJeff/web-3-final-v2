if(impactChecker){
    var impactHeaderTimeline = gsap.timeline();

    impactHeaderTimeline.from("#moral-title", {alpha:0})

    ScrollTrigger.create({
        trigger: "#moral-title",
        start: "top 80%",
        end: "bottom 50%",
        animation: impactHeaderTimeline,
        toggleActions: "play play none none",
        // markers: true,
        id:"impact-header"
    });
  
}

if(impactChecker){
    var impact2HeaderTimeline = gsap.timeline();

    impact2HeaderTimeline.from("#change-title", {alpha:0})

    ScrollTrigger.create({
        trigger: "#change-title",
        start: "top 80%",
        end: "bottom 50%",
        animation: impact2HeaderTimeline,
        toggleActions: "play play none none",
        // markers: true,
        id:"impact-header"
    });
  
}

if(impactChecker){
    var impact3HeaderTimeline = gsap.timeline();

    impact3HeaderTimeline.from("#sway-title", {alpha:0})

    ScrollTrigger.create({
        trigger: "#sway-title",
        start: "top 80%",
        end: "bottom 50%",
        animation: impact3HeaderTimeline,
        toggleActions: "play play none none",
        // markers: true,
        id:"impact-header"
    });
  
}