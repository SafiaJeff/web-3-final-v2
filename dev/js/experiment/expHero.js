var experimentChecker = document.querySelector("#experimentation");

if(experimentChecker){
    const needsDesigners = gsap.timeline();
    needsDesigners.from(".subHeaderSlide", {xPercent:-10});
    
    ScrollTrigger.create({
        animation: needsDesigners,
        toggleActions: "play none none none",
        trigger:"#hero-image-experiment",
        start: "top 10%"

    });
} 

