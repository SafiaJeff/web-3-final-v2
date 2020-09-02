//animate paragraphs on scroll

/* =============
#Emp-Text Section
============= */

var empParagraphYPercent = 10;

//"this past decade.."

if(employmentChecker){

    var empParagraphTimeline = gsap.timeline();

    empParagraphTimeline.from("#emp-p1", {alpha:0, yPercent:empParagraphYPercent})

    ScrollTrigger.create({
        trigger: "#emp-p1",
        start: "top 50%",
        end: "bottom 50%",
        animation: empParagraphTimeline,
        toggleActions: "play play none none",
        // markers: true,
        id:"paragraph"
        // scrub: 2
    });
}

//"political campaigns offer.."

if(employmentChecker){

    var empParagraph2Timeline = gsap.timeline();

    empParagraph2Timeline.from("#emp-p2", {alpha:0, yPercent:empParagraphYPercent})

    ScrollTrigger.create({
        trigger: "#emp-p2",
        start: "top 80%",
        end: "bottom 50%",
        animation: empParagraph2Timeline,
        toggleActions: "play play none none",
        // markers: true,
        id:"paragraph2"
        // scrub: 2
});
}

//"campaign work is certainly.."

if(employmentChecker){

    var empParagraph3Timeline = gsap.timeline();

    empParagraph3Timeline.from("#emp-p3", {alpha:0, yPercent:empParagraphYPercent})

    ScrollTrigger.create({
        trigger: "#emp-p3",
        start: "top 80%",
        end: "bottom 50%",
        animation: empParagraph3Timeline,
        toggleActions: "play play none none",
        // markers: true,
        id:"paragraph3"
        // scrub: 2
    });
}

/* =============
#Emp-cards Section
============= */

//"if you have any inclination..."

if(employmentChecker){
    var empParagraph4Timeline = gsap.timeline();

    empParagraph4Timeline.from("#emp-end-p", {alpha:0, yPercent:empParagraphYPercent})

    ScrollTrigger.create({
        trigger: "#emp-end-p",
        start: "top 80%",
        end: "bottom 50%",
        animation: empParagraph4Timeline,
        toggleActions: "play play none none",
        // markers: true,
        id:"paragraph4"
        // scrub: 2
    });
}