var indexChecker = document.querySelector("#index-background");

if(indexChecker){
    const indexHeaderTimeline = gsap.timeline();

    indexHeaderTimeline.from("#index-campaign", {alpha:0});
    
    ScrollTrigger.create({
        trigger: "#index-campaign",
        start: "top 50%",
        end: "bottom 50%",
        animation: indexHeaderTimeline,
        toggleActions: "play play none none"
        // markers: true
        
        
    });
}

if(indexChecker){
    const indexHeaderTimeline2 = gsap.timeline();

    indexHeaderTimeline2.from("#index-impact-h", {alpha:0});
    
    ScrollTrigger.create({
        trigger: "#index-impact-h",
        start: "top 60%",
        end: "bottom 50%",
        animation: indexHeaderTimeline2,
        toggleActions: "play play none none"
        // markers: true
        
        
    });
}

if(indexChecker){
    const indexHeaderTimeline3 = gsap.timeline();

    indexHeaderTimeline3.from("#get-pub", {alpha:0});
    
    ScrollTrigger.create({
        trigger: "#get-pub",
        start: "top 60%",
        end: "bottom 50%",
        animation: indexHeaderTimeline3,
        toggleActions: "play play none none"
        // markers: true
        
        
    });
}


if(indexChecker){
    const indexHeaderTimeline4 = gsap.timeline();

    indexHeaderTimeline4.from("#history-h", {alpha:0});
    
    ScrollTrigger.create({
        trigger: "#history-h",
        start: "top 60%",
        end: "bottom 50%",
        animation: indexHeaderTimeline4,
        toggleActions: "play play none none"
        // markers: true
        
        
    });
}