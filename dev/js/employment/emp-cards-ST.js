
//animate cards staggering in

if(employmentChecker){
    var empCardsTimeline = gsap.timeline();

    gsap.set(".emp-card",{alpha:0, yPercent: 100});

    empCardsTimeline.to(".emp-card",{duration:0.5, alpha:1, yPercent: 0, stagger:0.25});

    ScrollTrigger.create({
        animation: empCardsTimeline,
        toggleActions: "play none none none",
        trigger: "#emp-cards",
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        id: "emp-cards"
        // scrub: 1
    });
}


