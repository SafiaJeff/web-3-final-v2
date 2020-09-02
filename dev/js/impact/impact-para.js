var impactChecker = document.querySelector("#impact");

var paragraphYPercent = 10;


if(impactChecker){
    var paragraphTimeline = gsap.timeline();

paragraphTimeline.from("#moral-para-1", {alpha:0, yPercent:paragraphYPercent})

ScrollTrigger.create({
    trigger: "#moral-para-1",
    start: "top 50%",
    end: "bottom 50%",
    animation: paragraphTimeline,
    toggleActions: "play play none none",
    // markers: true,
    id:"paragraph"
    // scrub: 2
});
}

if(impactChecker){
    var paragraph2Timeline = gsap.timeline();

paragraph2Timeline.from("#moral-para-2", {alpha:0, yPercent:paragraphYPercent})

ScrollTrigger.create({
    trigger: "#moral-para-2",
    start: "top 50%",
    end: "bottom 50%",
    animation: paragraph2Timeline,
    toggleActions: "play play none none",
    // markers: true,
    id:"paragraph"
    // scrub: 2
});
}

if(impactChecker){
    var calloutTimeline = gsap.timeline();

calloutTimeline.from("#moral-callout", {alpha:0, xPercent:20})

ScrollTrigger.create({
    trigger: "#moral-callout",
    start: "top 50%",
    end: "bottom 50%",
    animation: calloutTimeline,
    toggleActions: "play play none none",
    // markers: true,
    id:"callout"
    // scrub: 2
});
}

if(impactChecker){
    var paragraph3Timeline = gsap.timeline();

paragraph3Timeline.from("#change-body-1", {alpha:0, yPercent:paragraphYPercent})

ScrollTrigger.create({
    trigger: "#change-body-1",
    start: "top 50%",
    end: "bottom 50%",
    animation: paragraph3Timeline,
    toggleActions: "play play none none",
    // markers: true,
    id:"paragraph"
    // scrub: 2
});
}

if(impactChecker){
    var paragraph4Timeline = gsap.timeline();

paragraph4Timeline.from("#change-body-2", {alpha:0, yPercent:paragraphYPercent})

ScrollTrigger.create({
    trigger: "#change-body-2",
    start: "top 50%",
    end: "bottom 50%",
    animation: paragraph4Timeline,
    toggleActions: "play play none none",
    // markers: true,
    id:"paragraph"
    // scrub: 2
});
}

if(impactChecker){
    var paragraph5Timeline = gsap.timeline();

paragraph5Timeline.from("#sway-body", {alpha:0, yPercent:paragraphYPercent})

ScrollTrigger.create({
    trigger: "#sway-body",
    start: "top 50%",
    end: "bottom 50%",
    animation: paragraph5Timeline,
    toggleActions: "play play none none",
    // markers: true,
    id:"paragraph"
    // scrub: 2
});
}