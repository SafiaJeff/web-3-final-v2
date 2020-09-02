if(indexChecker){
    const indexParaTimeline = gsap.timeline();

indexParaTimeline.from(".indexPara1", {alpha:0, yPercent:10});

ScrollTrigger.create({
    trigger: ".indexPara1",
    start: "top 70%",
    end: "bottom 50%",
    animation: indexParaTimeline,
    toggleActions: "play play none none",
    // markers: true,
    id:"paragraph"
    // scrub: 2
});
}


if(indexChecker){
    const indexParaTimeline2 = gsap.timeline();

indexParaTimeline2.from(".indexPara2", {alpha:0, yPercent:10});

ScrollTrigger.create({
    trigger: ".indexPara2",
    start: "top 70%",
    end: "bottom 50%",
    animation: indexParaTimeline2,
    toggleActions: "play play none none",
    // markers: true,
    id:"paragraph"
    // scrub: 2
});
}


if(indexChecker){
    const indexParaTimeline3 = gsap.timeline();

indexParaTimeline3.from(".indexPara3", {alpha:0, yPercent:10});

ScrollTrigger.create({
    trigger: ".indexPara3",
    start: "top 70%",
    end: "bottom 50%",
    animation: indexParaTimeline3,
    toggleActions: "play play none none",
    // markers: true,
    id:"paragraph"
    // scrub: 2
});
}


if(indexChecker){
    const indexParaTimeline4 = gsap.timeline();

indexParaTimeline4.from(".indexPara4", {alpha:0, yPercent:10});

ScrollTrigger.create({
    trigger: ".indexPara4",
    start: "top 50%",
    end: "bottom 50%",
    animation: indexParaTimeline4,
    toggleActions: "play play none none",
    // markers: true,
    id:"paragraph"
    // scrub: 2
});
}

