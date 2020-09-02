if(impactChecker){
    var impactQuotesTimeline = gsap.timeline();

    impactQuotesTimeline.from("#impact-thesis-p", {alpha:0, xPercent: -10, duartion: 1})

    ScrollTrigger.create({
        trigger: "#impact-thesis-p",
        start: "top 50%",
        end: "bottom 50%",
        animation: impactQuotesTimeline,
        toggleActions: "play play none none",
        // markers: true,
        id:"impact-thesis"
    });
  
}

if(impactChecker){
    var impact2QuotesTimeline = gsap.timeline();

    impact2QuotesTimeline.from("#hero-1-quote", {alpha:0, xPercent: 10, duartion: 1})

    ScrollTrigger.create({
        trigger: "#hero-1-quote",
        start: "top 50%",
        end: "bottom 50%",
        animation: impact2QuotesTimeline,
        toggleActions: "play play none none",
        // markers: true,
        id:"impact-thesis"
    });
  
}

if(impactChecker){
    var impact3QuotesTimeline = gsap.timeline();

    impact3QuotesTimeline.from("#hero-1-name", {alpha:0, xPercent: 10, duartion: 1})

    ScrollTrigger.create({
        trigger: "#hero-1-name",
        start: "top 50%",
        end: "bottom 50%",
        animation: impact3QuotesTimeline,
        toggleActions: "play play none none",
        // markers: true,
        id:"impact-thesis"
    });
  
}