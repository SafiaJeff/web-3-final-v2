var experimentChecker = document.querySelector("#experimentation");

if(experimentChecker){
    const expHeaderTimeline = gsap.timeline();

    expHeaderTimeline.from(".headerSlide", {yPercent:-100, alpha:0});
    
    ScrollTrigger.create({
        animation: expHeaderTimeline,
        toggleActions: "play none none none",
        trigger:"#hero-experiment",
            start: "top top"
            //end: "bottom top",
            //scrub: 1
    });
} 
if(experimentChecker){
    const needsDesigners = gsap.timeline();
    needsDesigners.from(".subHeaderSlide", {xPercent:-10});
    
    ScrollTrigger.create({
        animation: needsDesigners,
        toggleActions: "play none none none",
        trigger:"#hero-image-experiment",
        // pin: true,
        //     pinSpacing: true,
            start: "top 10%"
            //end: "bottom 60%",
            //scrub: 1
    });
} 

