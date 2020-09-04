// animates paragraph next to obama photo to move 30% upwards on scroll

if(experimentChecker){
const expParaTimeline = gsap.timeline();

expParaTimeline.from(".para1", {yPercent:30, alpha:0});

ScrollTrigger.create({
    animation: expParaTimeline,
    toggleActions: "play play none none",
    trigger:"#section-1-experiment",
    start: "top 10%"
});
}

// animates paragraph under logos and "who can forget" pq to move 30% upwards on scroll
if(experimentChecker){
    const expPara2Timeline = gsap.timeline();

expPara2Timeline.from(".para2", {yPercent:10});

ScrollTrigger.create({
    animation: expPara2Timeline,
    toggleActions: "play play none none",
    trigger:"#image-section-4",
        start: "top top"
});
}