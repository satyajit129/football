$(function(){
    $('.counter').counterUp({
        delay: 20,
        time: 1000,
    });
});
//owl carousel
const prevIcon = '<i class="fa-solid fa-arrow-left icon"></i>';
const nextIcon = '<i class="fa-solid fa-arrow-right icon"></i>';

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    // responsiveClass: true,
    autoplay: true,
    nav: true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


    $(".slide-up-down").owlCarousel({
      items: 1,
      loop: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      rewind: true,
      autoplay: true,
      margin: 0,
      nav: true
    });

//wow jss
new WOW().init();