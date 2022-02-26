let position = 0;
const carusel = document.querySelector('.slider');
const container = carusel.querySelector('.slider__container');
const slaider = carusel.querySelector('.slider__content');
const cards = slaider.querySelectorAll('.way');
let cardWidth = container.clientWidth;
const btnPrev = carusel.querySelector('.slider__button-prev');
const btnNext = carusel.querySelector('.slider__button-next');

setWidth();

window.addEventListener("resize", function () {
slaider.style.transform = `translateX(0)`;
position = 0;
cardWidth = container.clientWidth;
setWidth();
check();
});


btnPrev.addEventListener('click', function() {

  position += cardWidth;
  slaider.style.transform = `translateX(${position}px)`;
  check();
});

btnNext.addEventListener('click', function () {

  position -= cardWidth;
 slaider.style.transform = `translateX(${position}px)`;

 check();
});

function check() {
  if (position === 0) {
    btnPrev.setAttribute('disabled', true);
  } else {
    btnPrev.removeAttribute('disabled');}

  if(position <= -cardWidth*(cards.length - 1)) {
    btnNext.setAttribute("disabled", true);
  } else{
    btnNext.removeAttribute("disabled");
  }
}

function setWidth() {
  cards.forEach((card) => {
    card.style.minWidth = `${cardWidth}px`;
    const fotos = card.querySelectorAll('.way__foto');
    fotos.forEach((foto) => {
      if (cardWidth > 688) {
        foto.style.width = `${(cardWidth - 20) / 2}px`;
        foto.style.height = `${((cardWidth - 20) / 2) * 0.6153}px`;
      } else {
        foto.style.width = `${cardWidth}px`;
        foto.style.height = `${cardWidth * 0.6153}px`;
      }
    });
  });
}

check();
