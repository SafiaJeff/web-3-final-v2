
var safiParagraphYPercent = 10;

//"whether its the superbowl.."

if(safiChecker){

    var safiParagraphTimeline = gsap.timeline();

    safiParagraphTimeline.from("#honors-01-p", {alpha:0, yPercent:safiParagraphYPercent})

    ScrollTrigger.create({
        trigger: "#honors-01-p",
        start: "top 80%",
        end: "bottom 50%",
        animation: safiParagraphTimeline,
        // markers: true,
        toggleActions: "play play none none"
       
    });
}

//"because a logo.."

if(safiChecker){

    var safiParagraph2Timeline = gsap.timeline();

    safiParagraph2Timeline.from("#bc-a-logo", {alpha:0, yPercent:safiParagraphYPercent})

    ScrollTrigger.create({
        trigger: "#bc-a-logo",
        start: "top 80%",
        end: "bottom 50%",
        animation: safiParagraph2Timeline,
        // markers: true,
        toggleActions: "play play none none"
       
    });
}

//"given the amount of thought.."

if(safiChecker){

    var safiParagraph3Timeline = gsap.timeline();

    safiParagraph3Timeline.from("#honors-critics-p1", {alpha:0, yPercent:safiParagraphYPercent})

    ScrollTrigger.create({
        trigger: "#honors-critics-p1",
        start: "top 80%",
        end: "bottom 50%",
        animation: safiParagraph3Timeline,
        // markers: true,
        toggleActions: "play play none none"
       
    });
}

//"but jibes about.."

if(safiChecker){

    var safiParagraph4Timeline = gsap.timeline();

    safiParagraph4Timeline.from("#honors-critics-p2", {alpha:0, yPercent:safiParagraphYPercent})

    ScrollTrigger.create({
        trigger: "#honors-critics-p2",
        start: "top 80%",
        end: "bottom 50%",
        animation: safiParagraph4Timeline,
        // markers: true,
        toggleActions: "play play none none"
       
    });
}