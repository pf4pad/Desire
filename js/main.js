$(function () {

  $('.header__btn').on('click', function(){
    $('.rightside-menu').removeClass('rightside-menu--close');

  });
  $('.header__btn-menu').on('click', function(){
    $('.menu').toggleClass('menu--open');

  });

  $('.rightside-menu__close').on('click', function(){
    $('.rightside-menu').addClass('rightside-menu--close');
   
  });

  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

$('.contact-slider').slick({
  slidesToShow: 10,
  slidesToScroll: 10,
  dots: true,
  arrows: false,
  responsive: [
      {
      breakpoint: 1700,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8
      }
    },
      {
      breakpoint: 1511,
      settings: {
       slidesToShow: 6,
       slidesToScroll: 6
      }
    },
    {
      breakpoint: 1200,
      settings: {
       slidesToShow: 5,
       slidesToScroll: 5
      }
    },
        {
      breakpoint: 992,
      settings: {
       slidesToShow: 4,
       slidesToScroll: 4
      }
    },
      {
      breakpoint: 768,
      settings: {
       slidesToShow: 3,
       slidesToScroll: 3
      }
    },
    {
      breakpoint: 540,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      }
    }
    ]
  });

$('.article-slider-box').slick({
      
    nextArrow:'<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/blog/slider-arrow-left.svg" alt="arrow-left"></button>',
    prevArrow:'<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/blog/slider-arrow-right.svg" alt="arrow-right"></button>',
  });

  if ($(window).width() < 769) {

    $(".works-path__item--measurments").appendTo($(".works-path__items-box"));

  } else {

    $(".works-path__item--measurments").appendTo($(".works-path__items"));

  };

  
  var mixer = mixitup('.gallery__inner', {
  load: {
  filter: '.living'
  }
  });
  
})

