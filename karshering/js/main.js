$(function(){
    $('.top__slider').slick({
        arrows:false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                dots: false,
              }
            }
        ]
    });

    $('.reviews__slider').slick({
        arrows:false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1140,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
                breakpoint: 846,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 545,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
              
        ]
    });
    // $('.menu__btn').on('click', function(){
    //     $('.menu__list').toggleClass('menu__list--active')
    // })
});

let menu = document.getElementsByClassName('menu__btn');
menu[0].addEventListener('click', f);
function f(){
  let list = document.getElementsByClassName('menu__list');
  let menu_active = list[0].classList.toggle('menu__list--active');
}


