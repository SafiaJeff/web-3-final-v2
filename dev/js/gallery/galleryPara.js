if(galleryChecker){
    //"vote for your favorite" animating right to left
    gsap.from("#gallery-animate-text", {
        duration: 1, xPercent:10,
        scrollTrigger: {
            //scrub:true,
            toggleActions: "restart reverse restart reverse",
            trigger:"#gallery-form",
            start: "top 50%"
        }
    })
    //animating pull-quote-1 from right to left
    gsap.from("#gallery-animate-quote", {
        duration: 0.5, xPercent:10, alpha: 0,
        scrollTrigger: {
            //scrub:true,
            toggleActions: "restart reverse restart reverse",
            trigger:"#gallery-content-1",
            start: "top 50%"
        }
    })
    //animating pull-quote-2: fades in from bottom up
    gsap.from("#pin-pull-quote", {
        duration: 0.5, yPercent:10, alpha: 0,
        scrollTrigger: {
            //scrub:true,
            toggleActions: "restart reverse restart reverse",
            trigger:"#gallery-quote-2",
            start: "top 50%"
        }
    })
    
}