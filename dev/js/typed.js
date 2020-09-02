// Can also be included with a regular script tag
//import Typed from 'typed.js';
if(indexChecker){
  var options = {
    strings: ['Campaign work provides a multitude of opportunities to the designer', 'Scroll down to see more!'],
    typeSpeed: 5,
    backSpeed: 5,
    startDelay: 3000,
    backDelay: 2000,
    fadeOut: true,
    loop: true,
    showCursor: false
  };

  var typed = new Typed('.typejs', options);
}

if(galleryChecker){

  var typedName = new Typed('#form-name', {
    strings: ['your name'],
    typeSpeed: 20,
    backSpeed: 20,
    startDelay: 400,
    backDelay: 4000,
    attr: 'placeholder',
    loop: true,
    showCursor: false,
    bindInputFocusEvents: true
  });

  var typedWork = new Typed('#form-work', {
    strings: ['your favorite work'],
    typeSpeed: 10,
    backSpeed: 10,
    startDelay: 400,
    backDelay: 4000,
    attr: 'placeholder',
    loop: true,
    showCursor: false,
    bindInputFocusEvents: true
  });

  var typedEmail = new Typed('#form-email', {
    strings: ['your email'],
    typeSpeed: 20,
    backSpeed: 20,
    startDelay: 400,
    backDelay: 4000,
    attr: 'placeholder',
    loop: true,
    showCursor: false,
    bindInputFocusEvents: true
  });

  var typedComment = new Typed('#form-comments', {
    strings: ['Comments'],
    typeSpeed: 25,
    backSpeed: 25,
    startDelay: 400,
    backDelay: 4000,
    attr: 'placeholder',
    loop: true,
    showCursor: false,
    bindInputFocusEvents: true
  });
}