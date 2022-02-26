const popup = document.querySelector('.popup');
const buttonClosePopup = popup.querySelector('.popup__close-button');
const allHeaderLinks = popup.querySelectorAll('.navigation__link');
const popupButtonChangeTheme = popup.querySelector('.button__swith');
const popupIconLight = popup.querySelector('.button__icon-light');
const popupIconDark = popup.querySelector('.button__icon-dark');
const buttonOpenPopup = header.querySelector('.header__button');


buttonOpenPopup.addEventListener('click' , function() {
  popup.classList.add('popup_open');
});

buttonClosePopup.addEventListener('click', function() {
  popup.classList.remove('popup_open');
});


allHeaderLinks.forEach(link => {
  link.addEventListener('click', function() {
    popup.classList.remove('popup_open');
  });
});

popupButtonChangeTheme.addEventListener('click', function() {
  chageTheme();
});
