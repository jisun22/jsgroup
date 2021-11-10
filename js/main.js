// 헤더 색상 변하기

$(function(){
  var $header = $('.header-nav'); //헤더를 변수에 넣기
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

$(document).ready(function(){
  $("#num > li").mouseover(function(){
      $(this).children(".sub").stop().slideDown(350);
  });
  $("#num > li").mouseleave(function(){
      $(this).children(".sub").stop().slideUp(350);
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
// 헤더 슬라이드 모바일
var swiperHeader = new Swiper('.swiper-head-mobile', {
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
    slidesPerView: 3,
    spaceBetween: 5,
    // centeredSlides: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    // effect:'coverflow'
});

$('#prev_youtube').click(function(){
  swiperContent.slidePrev();
});

$('#next_youtube').click(function(){
  swiperContent.slideNext();
});



var swiperRecruit = new Swiper('.swiper-recruit', {
    mousewheel: false,
    keyboard: false,
    autoplay: {
        delay: 3000,
    },
    speed: 2500
});


$('#recruit_prev').click(function(){
  swiperRecruit.slidePrev();
});

$('#recruit_next').click(function(){
  swiperRecruit.slideNext();
});



const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.header-menu li');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    links.classList.toggle('active');
})
