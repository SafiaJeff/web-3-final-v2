//animates quote in from side 

//rand text
if(safiChecker){
    var hnrsPullQuote2Timeline = gsap.timeline();

    hnrsPullQuote2Timeline.from("#rand-txt", {alpha:0, xPercent:5})

    ScrollTrigger.create({
        trigger: "#rand-txt",
        start: "top 70%",
        end: "bottom 70%",
        animation: hnrsPullQuote2Timeline,
        toggleActions: "play none none none"
        // markers: true
        // scrub: true,
        // id:"pull-quote"
    });
}

//obama text
if(safiChecker){
    var hnrsPullQuote3Timeline = gsap.timeline();

    hnrsPullQuote3Timeline.from("#obama-txt", {alpha:0, xPercent:-5})

    ScrollTrigger.create({
        trigger: "#obama-txt",
        start: "top 70%",
        end: "bottom 70%",
        animation: hnrsPullQuote3Timeline,
        toggleActions: "play none none none"
        // markers: true
        // scrub: true,
        // id:"pull-quote"
    });
}

//quote at bottom of page
if(safiChecker){
    var hnrsPullQuoteTimeline = gsap.timeline();

    hnrsPullQuoteTimeline.from("#hnrs-pull-quote", {alpha:0, xPercent:5})

    ScrollTrigger.create({
        trigger: "#hnrs-pull-quote",
        start: "top 60%",
        end: "bottom 70%",
        animation: hnrsPullQuoteTimeline,
        toggleActions: "play none none none"
        // markers: true
        // scrub: true,
        // id:"pull-quote"
    });
}