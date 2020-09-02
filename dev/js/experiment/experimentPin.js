//pins pink quote box momentarily on scroll 

if(experimentChecker){
    
    const afterObama = gsap.timeline();
    afterObama.from(".para-3-experiment", {alpha: 1});
    
    ScrollTrigger.create({
        animation: afterObama,
        toggleActions: "play none none none",
        trigger:"#para-section-3",
        pin: true,
        pinSpacing: false,
            start: "top 76",
            end: "bottom 76",
            //scrub: 1
            id:"afterObama"
    });
} 

if(experimentChecker){
    
    gsap.to("#section-2-experiment",{ease: "none", scrollTrigger:{
        trigger:"#section-2-experiment",
        pin: true,
        pinSpacing: false,
        start: "top 76",
        end: "bottom 76",
        // markers:true
        id:"as-result-2"
    }})
}


