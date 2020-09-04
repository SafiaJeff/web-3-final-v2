// animates "as a result" subtitle from left to right
if(experimentChecker){
    const asAResult = gsap.timeline();
    asAResult.from(".pq1", {xPercent:-10});
    
    ScrollTrigger.create({
        animation: asAResult,
        toggleActions: "play none none none",
        trigger:"#section-2-experiment",
        start: "top 10%"
    });
}

//animates "who can forget" pullquote from left to right
if(experimentChecker){
    const whoCanForget = gsap.timeline();
    whoCanForget.from(".pq2", {alpha: 0, xPercent:-10});
    
    ScrollTrigger.create({
        animation: whoCanForget,
        toggleActions: "play none none none",
        trigger:"#section-4-experiment",
        start: "top 10%"
    });
}