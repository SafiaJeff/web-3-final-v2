//pins pull quote so next section overlaps on top of it
//make following section z-index:200; and position:relative; so it goes on top, not below

// gsap.to("#emp-quote",{scrollTrigger:{
//     trigger:"#emp-quote",
//     pin: true,
//     pinSpacing: false,
//     start: "top 76",
//     end: "bottom 76",
//     // markers:true,
//     id:"quote-pin"
// }})

// var empBodyChecker = document.querySelector("#emp-quote");
// if(empBodyChecker){
//     gsap.to("#emp-quote",{scrollTrigger:{
//         trigger:"#emp-quote",
//         pin: true,
//         pinSpacing: false,
//         start: "top 76",
//         end: "bottom 76",
//         // markers:true,
//         id:"quote-pin"
//     }})
// }
//animates quote in from side **KEEPS MOVING... ASK JOSH?

// var pullQuoteTimeline = gsap.timeline();

// pullQuoteTimeline.from("#emp-quote-text", {alpha:0, xPercent:5})

// ScrollTrigger.create({
//     trigger: "#emp-quote-text",
//     start: "top 80%",
//     end: "bottom 70%",
//     animation: pullQuoteTimeline,
//     toggleActions: "play pause play stop",
//     // markers: true,
//     scrub: true,
//     id:"pull-quote"
// });

