var indexSlider = document.getElementsByClassName('index-slider');
if(indexSlider.length > 0){
  tns({
    container: '.index-slider',
    items: 1,
    gutter: 15,
    edgePadding: 50,
    nav: false,
    controlsPosition: "bottom",
    navPosition: "bottom",
    mouseDrag: true,
     responsive: {
          "350": {
            "items": 1
          },
          "768": {
            "items": 3,
            gutter:50
          },
          "1040": {
            "items": 3,
            gutter:50
          }
    }
   
});
}

// tns({
//     container: '.index-slider',
//     items: 1,
//     gutter: 15,
//     edgePadding: 50,
//     controls: false,
//     controlsPosition: "bottom",
//     navPosition: "bottom",
//      responsive: {
//           "350": {
//             "items": 1
//           },
//           "768": {
//             "items": 3,
//             gutter:50
//           },
//           "1040": {
//             "items": 4,
//             gutter:100
//           }
//     }
   
// }