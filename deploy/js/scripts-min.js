gsap.to("#progress",{value:100,ease:"none",scrollTrigger:{scrub:.3}}),$('[data-fancybox="gallery"]').fancybox({touch:{vertical:!0},buttons:[]});var indexSlider=document.getElementsByClassName("index-slider");indexSlider.length>0&&tns({container:".index-slider",items:1,gutter:15,edgePadding:50,nav:!1,controlsPosition:"bottom",navPosition:"bottom",mouseDrag:!0,responsive:{350:{items:1},768:{items:3,gutter:50},1040:{items:3,gutter:50}}}),gsap.registerPlugin(ScrollTrigger,TweenLite);var headerHeight=$("header").outerHeight();gsap.set("header",{y:-headerHeight});var headerTimeline=gsap.timeline();headerTimeline.to("header",{duration:.4,y:0}),$((function(){var e=200;$(window).scroll((function(){if(!1===canYouSeeTheMenu){var t=$(this).scrollTop();jQuery(window).scrollTop()>=200&&t>=e?headerTimeline.reverse():headerTimeline.play(),e=t}}))}));var burgerAnimationSpeed=.25;gsap.set(".lines",{transformOrigin:"center"});var burgerAnimationTimeline=gsap.timeline({paused:!0});$("#burger").on("mouseenter",(function(){!1===canYouSeeTheMenu?burgerAnimationTimeline.play("burgerToX"):burgerAnimationTimeline.play("xRotate")})),$("#burger").on("mouseleave",(function(){!1===canYouSeeTheMenu?burgerAnimationTimeline.reverse("burgerToXReverse"):burgerAnimationTimeline.reverse("xRotateReverse")})),burgerAnimationTimeline.addLabel("burgerToX").to("#top",{duration:burgerAnimationSpeed,y:12,rotation:-45},"burgerToX").to("#bottom",{duration:burgerAnimationSpeed,y:-12,rotation:45},"burgerToX").to("#middle",{duration:burgerAnimationSpeed,alpha:0},"burgerToX").addLabel("burgerToXReverse").addPause().addLabel("xRotate").to("#top",{duration:burgerAnimationSpeed,rotation:45},"xRotate").to("#bottom",{duration:burgerAnimationSpeed,rotation:135},"xRotate").addLabel("xRotateReverse").addPause();var canYouSeeTheMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){!1===canYouSeeTheMenu?(mainNavTimeline.play(),canYouSeeTheMenu=!0):(burgerAnimationTimeline.reverse("burgerToXReverse"),mainNavTimeline.reverse(),canYouSeeTheMenu=!1)}mainNavTimeline.to("#main-nav",{duration:.5,y:0});var menuBackground=document.querySelector("#main-nav");function reportWindowSize(){console.log("test"),!1===canYouSeeTheMenu&&(console.log("can't see the main nav"),console.log($("#main-nav").outerHeight()),navHeight=$("#main-nav").outerHeight(),gsap.set("#main-nav",{y:-navHeight}))}window.onclick=function(e){e.target==menuBackground&&hideShowMainNav()},window.addEventListener("resize",reportWindowSize),$("#main-nav li").on("click",hideShowMainNav),$("#burger").on("click",hideShowMainNav);var indexChecker=document.querySelector("#index-background");if(indexChecker){const e=gsap.timeline();e.from("#index-campaign",{alpha:0}),ScrollTrigger.create({trigger:"#index-campaign",start:"top 50%",end:"bottom 50%",animation:e,toggleActions:"play play none none"})}if(indexChecker){const e=gsap.timeline();e.from("#index-impact-h",{alpha:0}),ScrollTrigger.create({trigger:"#index-impact-h",start:"top 60%",end:"bottom 50%",animation:e,toggleActions:"play play none none"})}if(indexChecker){const e=gsap.timeline();e.from("#get-pub",{alpha:0}),ScrollTrigger.create({trigger:"#get-pub",start:"top 60%",end:"bottom 50%",animation:e,toggleActions:"play play none none"})}if(indexChecker){const e=gsap.timeline();e.from("#history-h",{alpha:0}),ScrollTrigger.create({trigger:"#history-h",start:"top 60%",end:"bottom 50%",animation:e,toggleActions:"play play none none"})}if(indexChecker&&ScrollTrigger.create({trigger:"#index-impact",pin:!0,pinSpacing:!1,start:"top top",end:"bottom 1"}),indexChecker){const e=gsap.timeline();e.from(".indexPara1",{alpha:0,yPercent:10}),ScrollTrigger.create({trigger:".indexPara1",start:"top 70%",end:"bottom 50%",animation:e,toggleActions:"play play none none",id:"paragraph"})}if(indexChecker){const e=gsap.timeline();e.from(".indexPara2",{alpha:0,yPercent:10}),ScrollTrigger.create({trigger:".indexPara2",start:"top 70%",end:"bottom 50%",animation:e,toggleActions:"play play none none",id:"paragraph"})}if(indexChecker){const e=gsap.timeline();e.from(".indexPara3",{alpha:0,yPercent:10}),ScrollTrigger.create({trigger:".indexPara3",start:"top 70%",end:"bottom 50%",animation:e,toggleActions:"play play none none",id:"paragraph"})}if(indexChecker){const e=gsap.timeline();e.from(".indexPara4",{alpha:0,yPercent:10}),ScrollTrigger.create({trigger:".indexPara4",start:"top 50%",end:"bottom 50%",animation:e,toggleActions:"play play none none",id:"paragraph"})}var employmentChecker=document.querySelector("#employment-page");if(employmentChecker){var TweenLite=gsap.timeline(),Cont={val:0},NewVal=23;TweenLite.to(Cont,5,{val:NewVal,roundProps:"val",onUpdate:function(){document.getElementById("count-tween").innerHTML=Cont.val}}),ScrollTrigger.create({trigger:"#counter",start:"top 50%",end:"bottom 50%",animation:TweenLite,toggleActions:"play none none none",id:"counter"})}if(employmentChecker&&ScrollTrigger.create({trigger:"#emp-quote",pin:!0,pinSpacing:!1,start:"top top",end:"bottom 1",id:"emp-quote-pin"}),employmentChecker){var pullQuoteTimeline=gsap.timeline();pullQuoteTimeline.from("#emp-quote-text",{alpha:0,xPercent:5}),ScrollTrigger.create({trigger:"#emp-quote-text",start:"top 60%",end:"bottom 70%",animation:pullQuoteTimeline,toggleActions:"play none none none",id:"pull-quote"})}employmentChecker&&$(window).width()>=1024&&ScrollTrigger.create({trigger:"#emp-map",pin:!0,pinSpacing:!1,start:"top top",end:"bottom 1",id:"emp-map-pin"});var empParagraphYPercent=10;if(employmentChecker){var empParagraphTimeline=gsap.timeline();empParagraphTimeline.from("#emp-p1",{alpha:0,yPercent:empParagraphYPercent}),ScrollTrigger.create({trigger:"#emp-p1",start:"top 50%",end:"bottom 50%",animation:empParagraphTimeline,toggleActions:"play play none none",id:"paragraph"})}if(employmentChecker){var empParagraph2Timeline=gsap.timeline();empParagraph2Timeline.from("#emp-p2",{alpha:0,yPercent:empParagraphYPercent}),ScrollTrigger.create({trigger:"#emp-p2",start:"top 80%",end:"bottom 50%",animation:empParagraph2Timeline,toggleActions:"play play none none",id:"paragraph2"})}if(employmentChecker){var empParagraph3Timeline=gsap.timeline();empParagraph3Timeline.from("#emp-p3",{alpha:0,yPercent:empParagraphYPercent}),ScrollTrigger.create({trigger:"#emp-p3",start:"top 80%",end:"bottom 50%",animation:empParagraph3Timeline,toggleActions:"play play none none",id:"paragraph3"})}if(employmentChecker){var empParagraph4Timeline=gsap.timeline();empParagraph4Timeline.from("#emp-end-p",{alpha:0,yPercent:empParagraphYPercent}),ScrollTrigger.create({trigger:"#emp-end-p",start:"top 80%",end:"bottom 50%",animation:empParagraph4Timeline,toggleActions:"play play none none",id:"paragraph4"})}if(employmentChecker){var empCardsTimeline=gsap.timeline();gsap.set(".emp-card",{alpha:0,yPercent:100}),empCardsTimeline.to(".emp-card",{duration:.5,alpha:1,yPercent:0,stagger:.25}),ScrollTrigger.create({animation:empCardsTimeline,toggleActions:"play none none none",trigger:"#emp-cards",start:"top 50%",end:"bottom 50%",id:"emp-cards"})}if(employmentChecker){var empHeaderTimeline=gsap.timeline();empHeaderTimeline.from("#emp-header",{alpha:0}),ScrollTrigger.create({trigger:"#emp-header",start:"top 80%",end:"bottom 50%",animation:empHeaderTimeline,toggleActions:"play play none none",id:"emp-header"})}if(employmentChecker){var empHeader2Timeline=gsap.timeline();empHeader2Timeline.from("#designers-wanted",{alpha:0}),ScrollTrigger.create({trigger:"#designers-wanted",start:"top 60%",end:"bottom 50%",animation:empHeader2Timeline,toggleActions:"play play none none",id:"emp-header2"})}var experimentChecker=document.querySelector("#experimentation");if(experimentChecker){const e=gsap.timeline();e.from(".headerSlide",{yPercent:-100,alpha:0}),ScrollTrigger.create({animation:e,toggleActions:"play none none none",trigger:"#experimentation",start:"top top"})}if(experimentChecker){const e=gsap.timeline();e.from(".subHeaderSlide",{xPercent:-10}),ScrollTrigger.create({animation:e,toggleActions:"play none none none",trigger:"#hero-image-experiment",start:"top 10%"})}if(experimentChecker){const e=gsap.timeline();e.from(".para1",{yPercent:30,alpha:0}),ScrollTrigger.create({animation:e,toggleActions:"play play none none",trigger:"#pullquote-section-1",pin:!0,pinSpacing:!0,start:"top top%"})}if(experimentChecker){const e=gsap.timeline();e.from(".para2",{yPercent:10}),ScrollTrigger.create({animation:e,toggleActions:"play play none none",trigger:"#image-section-4",start:"top top"})}if(experimentChecker){const e=gsap.timeline();e.from(".pq1",{xPercent:-10}),ScrollTrigger.create({animation:e,toggleActions:"play none none none",trigger:"#section-2-experiment",start:"top 10%"})}if(experimentChecker){const e=gsap.timeline();e.from(".pq2",{alpha:0,xPercent:-10}),ScrollTrigger.create({animation:e,toggleActions:"play none none none",trigger:"#section-4-experiment",start:"top 10%"})}if(experimentChecker){const e=gsap.timeline();e.from(".para-3-experiment",{alpha:1}),ScrollTrigger.create({animation:e,toggleActions:"play none none none",trigger:"#para-section-3",pin:!0,pinSpacing:!1,start:"top top",end:"bottom bottom",id:"afterObama"})}if(experimentChecker&&gsap.to("#section-2-experiment",{ease:"none",scrollTrigger:{trigger:"#section-2-experiment",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"as-result-2"}}),experimentChecker){const e=gsap.timeline();e.from(".g-photos",{yPercent:100,stagger:.5}),ScrollTrigger.create({animation:e,toggleActions:"play none none none",trigger:"#section-5-experiment",pin:!0,pinSpacing:!0,start:"top top",end:"bottom top"})}var impactChecker=document.querySelector("#impact"),paragraphYPercent=10;if(impactChecker){var paragraphTimeline=gsap.timeline();paragraphTimeline.from("#moral-para-1",{alpha:0,yPercent:paragraphYPercent}),ScrollTrigger.create({trigger:"#moral-para-1",start:"top 50%",end:"bottom 50%",animation:paragraphTimeline,toggleActions:"play play none none",id:"paragraph"})}if(impactChecker){var paragraph2Timeline=gsap.timeline();paragraph2Timeline.from("#moral-para-2",{alpha:0,yPercent:paragraphYPercent}),ScrollTrigger.create({trigger:"#moral-para-2",start:"top 50%",end:"bottom 50%",animation:paragraph2Timeline,toggleActions:"play play none none",id:"paragraph"})}if(impactChecker){var calloutTimeline=gsap.timeline();calloutTimeline.from("#moral-callout",{alpha:0,xPercent:20}),ScrollTrigger.create({trigger:"#moral-callout",start:"top 50%",end:"bottom 50%",animation:calloutTimeline,toggleActions:"play play none none",id:"callout"})}if(impactChecker){var paragraph3Timeline=gsap.timeline();paragraph3Timeline.from("#change-body-1",{alpha:0,yPercent:paragraphYPercent}),ScrollTrigger.create({trigger:"#change-body-1",start:"top 50%",end:"bottom 50%",animation:paragraph3Timeline,toggleActions:"play play none none",id:"paragraph"})}if(impactChecker){var paragraph4Timeline=gsap.timeline();paragraph4Timeline.from("#change-body-2",{alpha:0,yPercent:paragraphYPercent}),ScrollTrigger.create({trigger:"#change-body-2",start:"top 50%",end:"bottom 50%",animation:paragraph4Timeline,toggleActions:"play play none none",id:"paragraph"})}if(impactChecker){var paragraph5Timeline=gsap.timeline();paragraph5Timeline.from("#sway-body",{alpha:0,yPercent:paragraphYPercent}),ScrollTrigger.create({trigger:"#sway-body",start:"top 50%",end:"bottom 50%",animation:paragraph5Timeline,toggleActions:"play play none none",id:"paragraph"})}if(impactChecker&&gsap.to("#impact-hero-1",{ease:"none",scrollTrigger:{trigger:"#impact-hero-1",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"quote-pin"}}),impactChecker&&gsap.to("#impact-hero-2",{ease:"none",scrollTrigger:{trigger:"#impact-hero-2",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"hero-pin"}}),impactChecker&&gsap.to("#sway-img",{ease:"none",scrollTrigger:{trigger:"#sway-img",pin:!0,pinSpacing:!1,start:"top top",end:"bottom 10",id:"obama-pin"}}),impactChecker&&gsap.to("#impact-thesis",{ease:"none",scrollTrigger:{trigger:"#impact-thesis",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"obama-pin"}}),impactChecker&&gsap.to("#change-img",{scrollTrigger:{trigger:"#change-img",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"change-pin"}}),impactChecker){var impactHeaderTimeline=gsap.timeline();impactHeaderTimeline.from("#moral-title",{alpha:0}),ScrollTrigger.create({trigger:"#moral-title",start:"top 80%",end:"bottom 50%",animation:impactHeaderTimeline,toggleActions:"play play none none",id:"impact-header"})}if(impactChecker){var impact2HeaderTimeline=gsap.timeline();impact2HeaderTimeline.from("#change-title",{alpha:0}),ScrollTrigger.create({trigger:"#change-title",start:"top 80%",end:"bottom 50%",animation:impact2HeaderTimeline,toggleActions:"play play none none",id:"impact-header"})}if(impactChecker){var impact3HeaderTimeline=gsap.timeline();impact3HeaderTimeline.from("#sway-title",{alpha:0}),ScrollTrigger.create({trigger:"#sway-title",start:"top 80%",end:"bottom 50%",animation:impact3HeaderTimeline,toggleActions:"play play none none",id:"impact-header"})}if(impactChecker){var impactTitleTimeline=gsap.timeline();impactTitleTimeline.from("#impact-title",{duration:1,alpha:0,yPercent:-20})}if(impactChecker){var impact2TitleTimeline=gsap.timeline();impact2TitleTimeline.from("#impact-sup",{duration:1,alpha:0,xPercent:-20})}if(impactChecker){var impactQuotesTimeline=gsap.timeline();impactQuotesTimeline.from("#impact-thesis-p",{alpha:0,yPercent:-10,duartion:1}),ScrollTrigger.create({trigger:"#impact-thesis-p",start:"top 50%",end:"bottom 50%",animation:impactQuotesTimeline,toggleActions:"play play none none",id:"impact-thesis"})}if(impactChecker){var impact2QuotesTimeline=gsap.timeline();impact2QuotesTimeline.from("#hero-1-quote",{alpha:0,yPercent:10,duartion:1}),ScrollTrigger.create({trigger:"#hero-1-quote",start:"top 50%",end:"bottom 50%",animation:impact2QuotesTimeline,toggleActions:"play play none none",id:"impact-thesis"})}if(impactChecker){var impact3QuotesTimeline=gsap.timeline();impact3QuotesTimeline.from("#hero-1-name",{alpha:0,yPercent:10,duartion:1}),ScrollTrigger.create({trigger:"#hero-1-name",start:"top 50%",end:"bottom 50%",animation:impact3QuotesTimeline,toggleActions:"play play none none",id:"impact-thesis"})}var galleryChecker=document.querySelector("#gallery-page");if(galleryChecker){const e=gsap.timeline({paused:!0});var galleryMain=$("#gallery-main"),galleryMainWidth=$("#gallery-main").width(),theseItems=galleryMain.find(".gallery-slider"),theseItemsWidth=theseItems.width(),scrollWidth=theseItemsWidth*theseItems.length,windowWidth=$(window).innerWidth(),fromValue=0,toValue=-(scrollWidth-windowWidth+325);e.to("#gallery-container",{ease:"none",scrollTrigger:{trigger:"#gallery-container",pin:!0,pinSpacing:!0,end:"+="+galleryMainWidth,id:"gallery-pin"}},"gallerySwipe").to("#gallery-main",{x:toValue,scrollTrigger:{trigger:"#gallery-container",scrub:!0,start:"top top",end:"+="+galleryMainWidth,id:"gallery-swipe"}},"gallerySwipe")}galleryChecker&&(gsap.to("#gallery-quote-1",{ease:"none",scrollTrigger:{trigger:"#gallery-quote-1",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"quote-1-pin"}}),ScrollTrigger.matchMedia({"(min-width: 1025px)":function(){gsap.to("#gallery-content-2",{ease:"none",scrollTrigger:{trigger:"#gallery-content-2",pin:!0,pinSpacing:!0,start:"top top",end:"bottom top",id:"content-2-pin"}},"content2Scroll"),gsap.from("#content-2-header",{xPercent:10,alpha:0,duration:.5,scrollTrigger:{trigger:"#gallery-content-2",start:"top 50%",toggleActions:"play none none none",id:"content-3-text"}},"content2Scroll"),gsap.from("#content-2-quote",{yPercent:100,alpha:0,scrollTrigger:{trigger:"#gallery-content-2",start:"top 75%",scrub:1,toggleActions:"play none none none",id:"content-3-text"}})},"(max-width: 1024px)":function(){gsap.from("#content-2-header",{xPercent:10,alpha:0,duration:.5,scrollTrigger:{trigger:"#gallery-content-2",start:"top 30%",toggleActions:"play none none none",id:"content-3-text"}}),gsap.from("#content-2-quote",{yPercent:100,alpha:0,duration:.5,scrollTrigger:{trigger:"#gallery-content-2",start:"top 50%",toggleActions:"play none none none",id:"content-3-text"}})}}),gsap.to("#gallery-quote-2",{ease:"none",scrollTrigger:{trigger:"#gallery-quote-2",pin:"#pin-pull-quote",start:"top top",end:"bottom top",id:"quote-2-pin"}})),galleryChecker&&(gsap.from("#gallery-header",{duration:1,yPercent:-80,scrollTrigger:{toggleActions:"play none none none",trigger:"#gallery-page"}}),gsap.from("#gallery-animate-text",{duration:1,xPercent:10,scrollTrigger:{toggleActions:"restart reverse restart reverse",trigger:"#gallery-form",start:"top 50%"}}),gsap.from("#gallery-animate-quote",{duration:.5,xPercent:10,alpha:0,scrollTrigger:{toggleActions:"restart reverse restart reverse",trigger:"#gallery-content-1",start:"top 50%"}}),gsap.from("#pin-pull-quote",{duration:.5,yPercent:10,alpha:0,scrollTrigger:{toggleActions:"restart reverse restart reverse",trigger:"#gallery-quote-2",start:"top 50%"}}),gsap.from(".gallery-para-animate",{duration:.5,yPercent:10,alpha:0,scrollTrigger:{toggleActions:"play none none none",trigger:".gallery-para-animate",start:"top 50%"}}),gsap.from(".gallery-para-animate2",{duration:.5,yPercent:10,alpha:0,scrollTrigger:{toggleActions:"play none none none",trigger:"#gallery-logo-1",start:"top 50%"}}),gsap.from(".gallery-para-animate3",{duration:.5,yPercent:10,alpha:0,scrollTrigger:{toggleActions:"play none none none",trigger:"#gallery-logo-2",start:"top 50%"}}));var safiChecker=document.querySelector("#honors-page");if(safiChecker){var safiHeaderTimeline=gsap.timeline();safiHeaderTimeline.from("#logo-design-101",{alpha:0}),ScrollTrigger.create({trigger:"#logo-design-101",start:"top 80%",end:"bottom 50%",animation:safiHeaderTimeline,toggleActions:"play play none none"})}if(safiChecker){var safiHeader2Timeline=gsap.timeline();safiHeader2Timeline.from("#the-critics",{alpha:0}),ScrollTrigger.create({trigger:"#the-critics",start:"top 80%",end:"bottom 50%",animation:safiHeader2Timeline,toggleActions:"play play none none"})}var safiParagraphYPercent=10;if(safiChecker){var safiParagraphTimeline=gsap.timeline();safiParagraphTimeline.from("#honors-01-p",{alpha:0,yPercent:safiParagraphYPercent}),ScrollTrigger.create({trigger:"#honors-01-p",start:"top 80%",end:"bottom 50%",animation:safiParagraphTimeline,toggleActions:"play play none none"})}if(safiChecker){var safiParagraph2Timeline=gsap.timeline();safiParagraph2Timeline.from("#bc-a-logo",{alpha:0,yPercent:safiParagraphYPercent}),ScrollTrigger.create({trigger:"#bc-a-logo",start:"top 80%",end:"bottom 50%",animation:safiParagraph2Timeline,toggleActions:"play play none none"})}if(safiChecker){var safiParagraph3Timeline=gsap.timeline();safiParagraph3Timeline.from("#honors-critics-p1",{alpha:0,yPercent:safiParagraphYPercent}),ScrollTrigger.create({trigger:"#honors-critics-p1",start:"top 80%",end:"bottom 50%",animation:safiParagraph3Timeline,toggleActions:"play play none none"})}if(safiChecker){var safiParagraph4Timeline=gsap.timeline();safiParagraph4Timeline.from("#honors-critics-p2",{alpha:0,yPercent:safiParagraphYPercent}),ScrollTrigger.create({trigger:"#honors-critics-p2",start:"top 80%",end:"bottom 50%",animation:safiParagraph4Timeline,toggleActions:"play play none none"})}if(safiChecker&&ScrollTrigger.create({trigger:"#honors-rand",pin:!0,pinSpacing:!1,start:"top top",end:"bottom 1"}),safiChecker&&ScrollTrigger.create({trigger:"#honors-obama",pin:!0,pinSpacing:!1,start:"top top",end:"bottom 1"}),safiChecker){var hnrsPullQuote2Timeline=gsap.timeline();hnrsPullQuote2Timeline.from("#rand-txt",{alpha:0,xPercent:5}),ScrollTrigger.create({trigger:"#rand-txt",start:"top 70%",end:"bottom 70%",animation:hnrsPullQuote2Timeline,toggleActions:"play none none none"})}if(safiChecker){var hnrsPullQuote3Timeline=gsap.timeline();hnrsPullQuote3Timeline.from("#obama-txt",{alpha:0,xPercent:-5}),ScrollTrigger.create({trigger:"#obama-txt",start:"top 70%",end:"bottom 70%",animation:hnrsPullQuote3Timeline,toggleActions:"play none none none"})}if(safiChecker){var hnrsPullQuoteTimeline=gsap.timeline();hnrsPullQuoteTimeline.from("#hnrs-pull-quote",{alpha:0,xPercent:5}),ScrollTrigger.create({trigger:"#hnrs-pull-quote",start:"top 60%",end:"bottom 70%",animation:hnrsPullQuoteTimeline,toggleActions:"play none none none"})}if(indexChecker)var options={strings:["Campaign work provides a multitude of opportunities to the designer","Scroll down to see more!"],typeSpeed:5,backSpeed:5,startDelay:3e3,backDelay:2e3,fadeOut:!0,loop:!0,showCursor:!1},typed=new Typed(".typejs",options);if(galleryChecker)var typedName=new Typed("#form-name",{strings:["your name"],typeSpeed:20,backSpeed:20,startDelay:400,backDelay:4e3,attr:"placeholder",loop:!0,showCursor:!1,bindInputFocusEvents:!0}),typedWork=new Typed("#form-work",{strings:["your favorite work"],typeSpeed:10,backSpeed:10,startDelay:400,backDelay:4e3,attr:"placeholder",loop:!0,showCursor:!1,bindInputFocusEvents:!0}),typedEmail=new Typed("#form-email",{strings:["your email"],typeSpeed:20,backSpeed:20,startDelay:400,backDelay:4e3,attr:"placeholder",loop:!0,showCursor:!1,bindInputFocusEvents:!0}),typedComment=new Typed("#form-comments",{strings:["Comments"],typeSpeed:25,backSpeed:25,startDelay:400,backDelay:4e3,attr:"placeholder",loop:!0,showCursor:!1,bindInputFocusEvents:!0});