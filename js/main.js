// 헤더 색상 변하기

$(function(){
  var $header = $('.header-nav'); //헤더를 변수에 넣기
  var $page = $('.block'); //색상이 변할 부분
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
      $(this).children(".sub").stop().slideDown(380);
  });
  $("#num > li").mouseleave(function(){
      $(this).children(".sub").stop().slideUp(300);
  });
  // speed: 2500
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



// companies 
// $(".companies-img").mouseleave(
//   function () {
//     $(this).removeClass("companies-img");
//   }
// );

$(document).ready(function() {
  /* 1 */
  $(window).scroll( function(){
      /* 2 */
      $('img').each( function(i){
          var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* 3 */
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1'},700);
          }
      }); 
  });
});





var swiperContent = new Swiper('.swiper-content', {
    slidesPerView: 3,
    spaceBetween: 5,
    autoplay: {
      delay: 2000,
  },
    speed: 3000,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 10
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 100
      },

      800: {
        slidesPerView: 2,
        spaceBetween: 100
      },
      820: {
        slidesPerView: 2,
        spaceBetween: 100
      },

      880: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      920: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      1350: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      

      1420: {
        slidesPerView: 3,
        spaceBetween: 2
      }
    }
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
  // verticalSwiping: true,
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
const menu = document.querySelector('.header-menu > #num > li > a');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})

$(document).ready(function(){
  $(".toggleBtn").click(function(){
      $(".header-menu > #num > li > a").slideToggle(1000)
  })
})
