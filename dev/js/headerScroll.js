
var headerHeight = $("header").outerHeight();

//move the header off screen on the Y axis
gsap.set("header", {
    y: -headerHeight
})

var headerTimeline = gsap.timeline()
headerTimeline.to("header", {
    duration: 0.4,
    y: 0
})

//animation of header sliding up when scrolling down-sliding down when scrolling up
$(function () {

    var CurrentScroll = 200;
    $(window).scroll(function () {
        if (canYouSeeTheMenu === false) {
            var NextScroll = $(this).scrollTop();
            var position = jQuery(window).scrollTop();
            if (position >= 200 && NextScroll >= CurrentScroll) {
                //write the codes related to down-ward scrolling here
                headerTimeline.reverse();
            } else {
                //write the codes related to upward-scrolling here
                headerTimeline.play();
            }

            CurrentScroll = NextScroll; //Updates current scroll position
        }

    });
});

