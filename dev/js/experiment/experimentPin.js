//pins pink quote box momentarily on scroll 

if(experimentChecker){
    // const afterObama = gsap.timeline();
    // afterObama.from(".para-3-experiment", {alpha: 1});
    
    // ScrollTrigger.create({
    //     animation: afterObama,
    //     toggleActions: "play none none none",
    //     trigger:"#para-section-3",
    //     pin: true,
    //     pinSpacing: false,
    //         start: "top top",
    //         end: "bottom 50%",
    //         markers: true,
    //         //scrub: 1
    //         id:"afterObama"
    // });
    // ScrollTrigger.matchMedia({
	
    //     // up to tablet size, use this info
    //     "(max-width: 1024px)": function() {
    //   const afterObama = gsap.timeline();
    
    //   afterObama.from(".para-3-experiment", {alpha: 1});
      
    //   ScrollTrigger.create({
    //     animation: afterObama,
    //     toggleActions: "play none none none",
    //     trigger:"#para-section-3",
    //     pin: true,
    //     pinSpacing: false,
    //         start: "top top",
    //         end: "bottom 50%",
    //         //markers: true,
    //         //scrub: 1
    //         id:"afterObama"
    //   });  
      
    //     }
    //   }); 
      //on desktop, use this info
      //ScrollTrigger.matchMedia({
        
        // desktop
       //"(min-width: 1025px)": function() {
      //const afterObama = gsap.timeline();
    
      //afterObama.from(".para-3-experimentLg", {alpha: 1});
      
      ScrollTrigger.create({
        toggleActions: "play none none none",
        trigger:"#section-3-experiment",
        pin: true,
        pinSpacing: false,
            start: "top top",
            end: "bottom top",
            markers: true,
            //scrub: 1
            id:"afterObama2"
      });  
      
       // }
      //}); 
} 
// pins "as a result" section with photo
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
