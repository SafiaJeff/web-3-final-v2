//pins pink quote box momentarily on scroll 
if(experimentChecker){
      
      ScrollTrigger.create({
        toggleActions: "play none none none",
        trigger:"#section-3-experiment",
        pin: true,
        pinSpacing: false,
            start: "top top",
            end: "bottom top",
            id:"afterObama2"
      });  
      
} 
// pins "as a result" section with photo
if(experimentChecker){
    
    gsap.to("#section-2-experiment",{ease: "none", scrollTrigger:{
        trigger:"#section-2-experiment",
        pin: true,
        pinSpacing: false,
        start: "top 76",
        end: "bottom 76",
        id:"as-result-2"
    }})
}
