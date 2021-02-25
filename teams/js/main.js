$(function(){
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    dots: true,
    responsive: [
        {
          breakpoint: 910,
          settings: {
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 560,
            settings: {
              slidesToShow: 1,
            }
        }
    ],
});
$('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
})
});