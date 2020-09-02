
if(experimentChecker){
    const asAResult = gsap.timeline();
    asAResult.from(".pq1", {duration: 1, xPercent:-10});
    
    ScrollTrigger.create({
        animation: asAResult,
        toggleActions: "play none none none",
        trigger:"#section-2-experiment",
        // pin: true,
        //     pinSpacing: true,
            start: "top 10%"
            //end: "bottom 60%",
            //scrub: 1
    });
}


if(experimentChecker){
    const whoCanForget = gsap.timeline();
    whoCanForget.from(".pq2", {duration: 1, xPercent:-10});
    
    ScrollTrigger.create({
        animation: whoCanForget,
        toggleActions: "play none none none",
        trigger:"#section-4-experiment",
        // pin: true,
        //     pinSpacing: true,
            start: "top 10%"
            //end: "bottom 60%",
            //scrub: 1
    });
}