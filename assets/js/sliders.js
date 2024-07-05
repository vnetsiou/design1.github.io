var swiper = new Swiper('.swiper-container.one', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: '2',
    loop:true,
    coverflowEffect: {
        rotate: -10,
        depth: 150,
        modifier: 1.5,
        slideShadows: true
    },
    breakpoints: {  
        '0': {
          slidesPerView: 1.3,
        },
        '768': {
          slidesPerView: 2,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }, autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }, navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});





var swiper = new Swiper('.swiper-container.three', {
    effect: 'cube',
    cubeEffect: {
        slideShadows: false,
    },
    slidesPerView: '1',
    loop:true,
    autoplay: true,
    direction:'horizontal',
    delay: 3000,
    speed:2000

});
var swiper = new Swiper('.swiper-container.four', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
      },
    slidesPerView: '1',
    loop:true,
    autoplay: true,
    direction:'horizontal',
    delay: 3000,
    speed:2000

});





$('.top-bar-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay:true,

    slidesToShow: 1,
  });

  $('.widget-4-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        }
    ]
  });
      
$('.select-dropdown__button').on('click', function(){
	$('.select-dropdown__list').toggleClass('active');
});
$('.select-dropdown__list-item').on('click', function(){
	var itemValue = $(this).data('value');
	console.log(itemValue);
	$('.select-dropdown__button span').text($(this).text()).parent().attr('data-value', itemValue);
	$('.select-dropdown__list').toggleClass('active');
});
