/* Carousel Slider */

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,            /*Set this property to true*/
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    animateOut:'fadeOut',
    margin:80,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})