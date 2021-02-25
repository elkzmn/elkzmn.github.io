$(function(){
$('.slider').slick({
nextArrow: "<button class='slick__arrow slick-next'><img src='img/next.svg'></button>",
prevArrow: "<button class='slick__arrow slick-prev'><img src='img/prev.svg'></button>",
fade:true,
responsive: [
    {
    breakpoint: 530,
    settings:{
        arrows: false,
    }
    }

]

});
});

