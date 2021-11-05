// 헤더 색상 변하기

$(function(){
    var $header = $('#header'); //헤더를 변수에 넣기
    var $page = $('.companies-text'); //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
    
    $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
      pageOffsetTop = $page.offset().top;
    });
    
    $window.on('scroll', function(){ //스크롤시
      var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
      $header.toggleClass('down', scrolled); //클래스 토글
    });
  });



  // 헤더 슬라이드
var swiper = new Swiper('#header .swiper-container', {
    pagination: {
        el: '.swiper-pagination',
	    loop : true
    },
    mousewheel: false,
    keyboard: false,
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
    },
    speed: 3000,
    effect : 'fade'
    
});

var swiper = new Swiper('.youtube-slide .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // effect:'coverflow'
  });


var swiper = new Swiper('#recruit .swiper-container', {
    pagination: {
        el: '.swiper-pagination',
	    loop : true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    mousewheel: false,
    keyboard: false,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
    },
    speed: 4000,
    
});