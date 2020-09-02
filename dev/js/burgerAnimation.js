var burgerAnimationSpeed = 0.25;

// reset transformOrigin point for each time
gsap.set(".lines",{transformOrigin:"center"});

var burgerAnimationTimeline = gsap.timeline({paused:true});

$("#burger").on("mouseenter", function () {

    if (canYouSeeTheMenu === false) {
        burgerAnimationTimeline.play("burgerToX");
    } else {

        burgerAnimationTimeline.play("xRotate");
    }
});
$("#burger").on("mouseleave", function () {
    if (canYouSeeTheMenu === false) {
        burgerAnimationTimeline.reverse("burgerToXReverse");
    } else {
        burgerAnimationTimeline.reverse("xRotateReverse");
    }
});

burgerAnimationTimeline.addLabel("burgerToX")
                        .to("#top",{duration: burgerAnimationSpeed, y:12, rotation:-45}, "burgerToX")  
                        .to("#bottom",{duration: burgerAnimationSpeed, y:-12, rotation:45}, "burgerToX")  
                        .to("#middle",{duration: burgerAnimationSpeed, alpha:0}, "burgerToX") 
                        
                        .addLabel("burgerToXReverse")
                        .addPause()

                        .addLabel("xRotate")
                        .to("#top",{duration: burgerAnimationSpeed, rotation:45}, "xRotate")  
                        .to("#bottom",{duration: burgerAnimationSpeed, rotation:135}, "xRotate") 

                        .addLabel("xRotateReverse")
                        .addPause()