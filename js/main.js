'use strict'

const badgeEl = document.querySelector('header .badges');
const toTopEl =document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
    if(window.scrollY > 500 ) {
        //배지 숨기기
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })
        gsap.to(toTopEl, .2, {
          x: 0
        })

    } else {
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity:1,
            display: 'block'
        })
        gsap.to(toTopEl, .2, {
          x: 100
        })
    }
}, 300));
// _.throttle(함수, 시간 추가)

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0, //화면 이동 지점 선언
  })
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(fadeEl,1,{
        delay: (index + 1) * .7,
        opacity: 1
    });
});

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: {
        delay : 3000,   // 시간 설정
        disableOnInteraction : true //스와이프 후 자동 멈춤 설정
    },
    loop: true,
});

new Swiper('.promotion .swiper-container', {
    // direction 디폴트 값은 horizontal이지만 난 잘 까먹으니깐 적어 놓자
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay : 5000,   // 시간 설정
        disableOnInteraction : true //스와이프 후 자동 멈춤 설정
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container', {
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
      prevEl: '.awards .swiper-prev',
      nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion //!: boolean타입의 값을 반대로 초기화 시킨다
    //데이터 형태에 상관없이 boolean형태로 형변환되니 참고
    if (isHidePromotion) {
        //숨김 처리!
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
})

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1, 3), {
      y: size,
      repeat: -1,
      yoyo: true, //
      ease: Power1.easeInOut,
      delay: random(0, delay),
  }) 
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
      .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
        triggerHook: .8,  // 뷰포트 세로를 0부터 1까지 소수 단위로 분할
                          // 일정한 요소가 지정된 지점까지 올라가게 된다면 발동
      })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());
});
