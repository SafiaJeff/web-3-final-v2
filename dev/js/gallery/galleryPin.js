// pinning quote 1
if(galleryChecker){
    gsap.to("#gallery-quote-1", {
        ease: "none",
        scrollTrigger: {
            trigger: "#gallery-quote-1",
            pin: true,
            pinSpacing: false,
            start: "top top",
            end: "bottom top",
            //markers:true,
            id: "quote-1-pin"
        }
    })
    

    ScrollTrigger.matchMedia({
        //just desktop = NO MOBILE OR TABLET
        "(min-width: 850px)": function () {
            // pinning "what goes into a good.." and the quote runs from bottom up
            gsap.to("#gallery-content-2", {
                ease: "none",
                
                scrollTrigger: {
                    trigger: "#gallery-content-2",
                    pin: true,
                    pinSpacing: true,
                    start: "top top",
                    end: "bottom top",
                    //markers:true,
                    id: "content-2-pin"
                }
            }, "content2Scroll")
            gsap.from("#content-2-quote", {
                yPercent: 100,
                alpha: 0,
                duration:0.5,
                scrollTrigger: {
                    trigger: "#gallery-content-2",
                    start: "top 50%",
                    scrub: 1,
                    toggleActions: "play none none none",
                    //markers:true,
                    id: "content-3-text"
                }
            }, "content2Scroll")
            
        },
        //just mobile and tablet = NO DESKTOP
        "(max-width: 849px)": function () {
            //just the "what goes into a good.." moves; the section is not pinned
            
            gsap.from("#content-2-quote", {
                yPercent: 100,
                alpha: 0,
                duration:0.5,
                scrollTrigger: {
                    trigger: "#gallery-content-2",
                    start: "top 50%",
                    //scrub: 1,
                    toggleActions: "play none none none",
                    //markers:true,
                    id: "content-3-text"
                }
            })
        }}
    )

    // pinning pull-quote-2
    gsap.to("#gallery-quote-2", {
        ease: "none",
        scrollTrigger: {
            trigger: "#gallery-quote-2",
            pin: "#pin-pull-quote",
            start: "top top",
            end: "bottom top",
            //markers: true,
            id: "quote-2-pin"
        }
    })

}
