//can you see the menu?
var canYouSeeTheMenu = false;

var navWidth = $("#nav-menu").outerWidth();
var navHeight = $("#nav-img").outerHeight();
//move the nav off screen on the Y axis
gsap.set("#nav-menu", {
    x: navWidth
})
gsap.set("#nav-img", {
    y: -navHeight
})


var mainNavTimeline = gsap.timeline({
    paused: true
})

mainNavTimeline.to("#nav-menu", {
        duration: 0.5,
        x: 0
    })
    .to("#nav-img", {
        duration: 0.5,
        y: 0
    })

function hideShowMainNav() {
    //console.log("hide or show nav");
    //toggles the css display property
    if (canYouSeeTheMenu === false) {

        burgerAnimationTimeline.play("burgerToX");

        //play the main nav animation into view; pull it down
        mainNavTimeline.play();
        //reset it back to true so menu will go away
        canYouSeeTheMenu = true;
    } else {

        burgerAnimationTimeline.reverse("burgerToXReverse");

        //reverse the animation of main nav out of view; push it up
        mainNavTimeline.reverse();
        //reset it back to false so menu will be back
        canYouSeeTheMenu = false;
    }
}

var menuBackground = document.querySelector("#nav-menu");
window.onclick = function (event) {
    if (event.target == menuBackground) {
        hideShowMainNav();
    }
}

function reportWindowSize() {
    //console.log("test");
    if (canYouSeeTheMenu === false) {
        //console.log("can't see the main nav");
        //console.log($("#main-nav").outerHeight());
        navWidth = $("#nav-menu").outerWidth();
        navHeight = $("#nav-img").outerHeight();
        gsap.set("#nav-menu", {
            x: navWidth
        })
        gsap.set("#nav-img", {
            y: -navHeight
        })
    }
}

// add a listener to the window for everytime it's resized
window.addEventListener('resize', reportWindowSize);