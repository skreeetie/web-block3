var init = false;
var swiper;

function swiperCard() {
  if (window.innerWidth < 800) {
    if (!init) {
      swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        spaceBetween: 16,
        slidesPerView: 'auto',
      });
      init = true;
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

let companyCards = document.querySelectorAll('.--hidden');
let readMoreIcon = document.querySelector('.readmore__icon');
let readMoreButton = document.querySelector('.readmore__text');
let initCondition = false;

function showCards() {
  for(var i = 0; i < companyCards.length; i++) {
    companyCards[i].classList.remove('--hidden');
  }
}

function hideCards() {
  for(var i = 0; i < companyCards.length; i++) {
    companyCards[i].classList.add('--hidden');
  }
}

readMoreButton.addEventListener('click', function() {
  if (!initCondition) {
    readMoreIcon.classList.add('--rotated');
    readMoreButton.textContent = "Скрыть";
    showCards();
    initCondition = true;
  } else if (initCondition) {
    readMoreIcon.classList.remove('--rotated');
    readMoreButton.textContent = "Показать все";
    hideCards();
    initCondition = false;
  }
})