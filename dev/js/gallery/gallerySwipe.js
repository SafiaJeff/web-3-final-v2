//selector of gallery js
var galleryChecker = document.querySelector("#gallery-page");

if(galleryChecker){
    //gallery pinning and swiping timeline
    const galleryTimeline = gsap.timeline({paused:true});
    
    //calculating the gallery width, scrolling width and window width
    var galleryMain = $("#gallery-main");
    var galleryMainWidth = $("#gallery-main").width();

    var theseItems = galleryMain.find('.gallery-slider');
    var theseItemsWidth = theseItems.width();
    
    var scrollWidth = theseItemsWidth * theseItems.length;
    var windowWidth = $(window).innerWidth();

    var fromValue = 0;
    var toValue = -(scrollWidth - windowWidth + 325);

    galleryTimeline.to("#gallery-container", {
        ease: "none",
        scrollTrigger: {
            trigger: "#gallery-container",
            pin: true,
            pinSpacing: true,
            end: "+="+galleryMainWidth,
            //markers: true,
            id: "gallery-pin"
        }
    }, "gallerySwipe")
    
    .to("#gallery-main", {x:toValue, 
        scrollTrigger: {
            trigger: "#gallery-container",
            scrub: true,
            start: "top top",
            end: "+="+galleryMainWidth,
            //markers: true,
            id: "gallery-swipe"
    }}, "gallerySwipe")
    
}
