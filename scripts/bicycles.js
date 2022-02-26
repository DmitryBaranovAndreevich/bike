const bycicles = document.querySelector('.bicycles');
const bicyclesSlider = bycicles.querySelector('.bicycles__slider');
const bicyclesContent = bycicles.querySelectorAll('.bicycles__content');
const items = bycicles.querySelectorAll('.bicycles__menu-item');
const contents = bycicles.querySelectorAll('.bicycles__content');
const byciclesBtnPrev = bicyclesSlider.querySelector('.bicycles__button-prev');
const byciclesBtnNext = bicyclesSlider.querySelector('.bicycles__button-next');
const dotContainer = bycicles.querySelector('.bicycles__dot-container');
const allDots = dotContainer.querySelectorAll('.dot');
let startPosition = 0;
let windowWidth = bicyclesSlider.clientWidth;

if (bicyclesSlider.clientWidth <=550){
  bicyclesSetWidth();
  bicyclesContent.forEach((elem) => {
    elem.style.transform = `translateX(0)`;
    elem.style.gap = `0`;
  });
}


window.addEventListener("resize", function () {
  if (bicyclesSlider.clientWidth <=550){
    bicyclesContent.forEach((elem) => {
      elem.style.transform = `translateX(0)`;
      elem.style.gap = `0`;
    });
    allDots.forEach(dot => {
      dot.classList.remove('dot_active');
    });
    allDots[0].classList.add('dot_active');
    startPosition = 0;
    bicyclesSetWidth();
    bicycleCheck();
    } else {
      contents.forEach((elem) => {
        elem.style.gap = `10px`;
        const allFotos = elem.querySelectorAll('.bicycles__foto-container');
        allFotos.forEach((fotos) => {
          fotos.style.width = `auto`;
          const foto = fotos.querySelector('.bicycles__foto');
          foto.style.width = `100%`;
          foto.style.height = `auto`;
          bicycleCheck();
        });
      });
    }
  });

  byciclesBtnNext.addEventListener("click", function () {
    windowWidth = bicyclesSlider.clientWidth;
    startPosition += windowWidth;
    bicyclesContent.forEach((elem) => {
      elem.style.transform = `translateX(${startPosition}px)`;
    });
    let i = 3;
    allDots.forEach((dot,index) => {
      if(dot.classList.contains('dot_active')){
        dot.classList.remove('dot_active');
        i = index;
      }
    });
    allDots[i - 1].classList.add('dot_active');
    bicycleCheck();
  });

  byciclesBtnPrev.addEventListener('click', function () {
    windowWidth = bicyclesSlider.clientWidth;
    startPosition -= windowWidth;
    bicyclesContent.forEach((elem) => {
      elem.style.transform = `translateX(${startPosition}px)`;
    });
    let i = 0;
    allDots.forEach((dot, index) => {
      if (dot.classList.contains('dot_active')) {
        dot.classList.remove('dot_active');
        i = index;
      }
    });
    allDots[i + 1].classList.add('dot_active');
    bicycleCheck();
  });

items.forEach(item => {
  const link = item.querySelector('.bicycles__link');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');

    items.forEach(item => {
      const link = item.querySelector('.bicycles__link');
      link.classList.remove('bicycles__link_active');
    });

    contents.forEach(content => {
      content.classList.remove('bicycles__content_active');
    });

    link.classList.add('bicycles__link_active');
    bycicles.querySelector(`${id}`).classList.add('bicycles__content_active');
  });
});

bycicles.querySelector('.bicycles__link').click();


function bicyclesSetWidth() {
  windowWidth = bicyclesSlider.clientWidth;
  contents.forEach(elem => {
    const allFotos = elem.querySelectorAll('.bicycles__foto-container');
    allFotos.forEach(fotos => {
      fotos.style.width = `${windowWidth}px`;
      const foto = fotos.querySelector('.bicycles__foto');
       foto.style.width = `${windowWidth}px`;
       foto.style.height = `${windowWidth}px`;
    });
  });
}

function bicycleCheck() {
  if (startPosition === 0) {
    byciclesBtnNext.setAttribute('disabled', true);
  } else {
    byciclesBtnNext.removeAttribute('disabled');
  }

  if (startPosition <= -windowWidth * (bicyclesContent.length - 1)) {
    byciclesBtnPrev.setAttribute('disabled', true);
  } else {
    byciclesBtnPrev.removeAttribute('disabled');
  }
}
