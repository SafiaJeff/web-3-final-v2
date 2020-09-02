// pinning my pull quote
if(impactChecker){
    gsap.to("#impact-hero-1",{ease: "none", scrollTrigger:{
        trigger:"#impact-hero-1",
        pin: true,
        pinSpacing: false,
        start: "top top",
        end: "bottom top",
        // markers:true,
        id:"quote-pin"
    }})
}
// pinning my hero
if(impactChecker){
    gsap.to("#impact-hero-2",{ease: "none", scrollTrigger:{
        trigger:"#impact-hero-2",
        pin: true,
        pinSpacing: false,
        start: "top top",
        end: "bottom top",
        // markers:true,
        id:"hero-pin"
    }})
}
// pinning my obama
if(impactChecker){
    gsap.to("#sway-img",{ease: "none", scrollTrigger:{
        trigger:"#sway-img",
        pin: true,
        start: "top top",
        end: "bottom 10",
        // markers:true,
        id:"obama-pin"
        // scrub: true
    }})
}
// pinning thesis
if(impactChecker){
    gsap.to("#impact-thesis",{ease: "none", scrollTrigger:{
        trigger:"#impact-thesis",
        pin: true,
        pinSpacing: false,
        start: "top top",
        end: "bottom top",
        // markers:true
        id:"obama-pin"
    }})
}

if(impactChecker){
    gsap.to("#change-img",{scrollTrigger:{
        trigger:"#change-img",
        pin: true,
        pinSpacing: false,
        start: "top top",
        end: "bottom top",
        // markers:true,
        id:"change-pin"
    }})
}

