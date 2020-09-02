if(experimentChecker){
    const galleryTimeline = gsap.timeline();

    galleryTimeline.from(".g-photos", {duration: 2, yPercent:100, stagger:.5});
    
    ScrollTrigger.create({
        animation: galleryTimeline,
        toggleActions: "play none none none",
        trigger:"#section-5-experiment",
        pin: true,
            pinSpacing: true,
            start: "top top",
            end: "bottom top"
        //scrub: 1
    });
}