if(experimentChecker){
    const expParaTimeline = gsap.timeline();

expParaTimeline.from(".para1", {yPercent:30, alpha:0});

ScrollTrigger.create({
    animation: expParaTimeline,
    toggleActions: "play play none none",
    trigger:"#pullquote-section-1",
    pin: true,
        pinSpacing: true,
        start: "top top"
        //end: "bottom top",
        //scrub: 1
});
}
if(experimentChecker){
    const expPara2Timeline = gsap.timeline();

expPara2Timeline.from(".para2", {yPercent:10});

ScrollTrigger.create({
    animation: expPara2Timeline,
    toggleActions: "play play none none",
    trigger:"#image-section-4",
        start: "top top"
        //end: "bottom top",
        //scrub: 1
});
}