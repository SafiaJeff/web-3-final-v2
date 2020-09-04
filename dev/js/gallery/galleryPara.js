if (galleryChecker) {

    //"animate hero-header
    gsap.from("#gallery-header", {
        duration: 1,
        yPercent: -80,
        scrollTrigger: {
            //scrub:true,
            toggleActions: "play none none none",
            trigger: "#gallery-page"
        }
    })

    //"vote for your favorite" animating right to left
    gsap.from("#gallery-animate-text", {
        duration: 1,
        xPercent: 10,
        scrollTrigger: {
            //scrub:true,
            toggleActions: "restart reverse restart reverse",
            trigger: "#gallery-form",
            start: "top 50%"
        }
    })
    //animating pull-quote-1 from right to left
    gsap.from("#gallery-animate-quote", {
        duration: 0.5,
        xPercent: 10,
        alpha: 0,
        scrollTrigger: {
            //scrub:true,
            toggleActions: "restart reverse restart reverse",
            trigger: "#gallery-content-1",
            start: "top 50%"
        }
    })
    //animating pull-quote-2: fades in from bottom up
    gsap.from("#pin-pull-quote", {
        duration: 0.5,
        yPercent: 10,
        alpha: 0,
        scrollTrigger: {
            //scrub:true,
            toggleActions: "restart reverse restart reverse",
            trigger: "#gallery-quote-2",
            start: "top 50%"
        }
    })

    //animating content-3 paragraph "No roundup of political design..."
    gsap.from(".gallery-para-animate", {
        duration: 0.5,
        yPercent: 10,
        alpha: 0,
        scrollTrigger: {
            //scrub:true,
            toggleActions: "play none none none",
            trigger: ".gallery-para-animate",
            start: "top 50%"
        }
    })

    //animating content-4 paragraph-1 "The Clinton campaign followed suit..."
    gsap.from(".gallery-para-animate2", {
        duration: 0.5,
        yPercent: 10,
        alpha: 0,
        scrollTrigger: {
            //scrub:true,
            toggleActions: "play none none none",
            trigger: "#gallery-logo-1",
            start: "top 50%"
        }
    })

    //animating content-4 paragraph-2 "Designed by Maria Arenas, the Alexandria Ocasio..."
    gsap.from(".gallery-para-animate3", {
        duration: 0.5,
        yPercent: 10,
        alpha: 0,
        scrollTrigger: {
            //scrub:true,
            toggleActions: "play none none none",
            trigger: "#gallery-logo-2",
            start: "top 50%"
        }
    })

}