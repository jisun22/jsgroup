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

// 헤더 서브메뉴 드롭다운
// $("#num1").hover(function(){
//     $(this).children('sub').stop().slideToggle(500);
// });

// $("#num2").hover(function(){
//   $(this).children('sub').stop().slideToggle(500);
// });

$(document).ready(function(){
  $("#num>li").mouseover(function(){
      $(this).children(".sub").stop().slideDown(200);
  });
  $("#num>li").mouseleave(function(){
      $(this).children(".sub").stop().slideUp(200);
  });
});





  // 헤더 슬라이드
var swiperHeader = new Swiper('.swiper-head', {
    mousewheel: false,
    keyboard: false,
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
    },
    speed: 3000,
    effect : 'fade'
});

var swiperContent = new Swiper('.swiper-content', {
    slidesPerView: 4,
    spaceBetween: 10,
    centeredSlides: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    // effect:'coverflow'
});

$('#test_prev_youtube').click(function(){
  swiperContent.slidePrev();
});

$('#test_next_youtube').click(function(){
  swiperContent.slideNext();
});



var swiperRecruit = new Swiper('.swiper-recruit', {
    mousewheel: false,
    keyboard: false,
    autoplay: {
        delay: 3000,
    },
    speed: 4000
});


$('#test_prev').click(function(){
  swiperRecruit.slidePrev();
});

$('#test_next').click(function(){
  swiperRecruit.slideNext();
});




