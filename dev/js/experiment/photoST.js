//animates gallery photos to move up one at a time
if(experimentChecker){
    const galleryTimeline = gsap.timeline();

    galleryTimeline.from(".g-photos", {yPercent:100, stagger:.5});
    
    ScrollTrigger.create({
        animation: galleryTimeline,
        toggleActions: "play none none none",
        trigger:"#section-5-experiment",
        pin: true,
            pinSpacing: true,
            start: "top 20%",
            end: "bottom 90%"
        //scrub: 1
    });
}