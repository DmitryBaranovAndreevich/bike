const allParagraph = document.getElementsByTagName('p');
const allLinks = document.getElementsByTagName('a');
const allTitle = document.getElementsByTagName('h3');
const content = document.querySelector('.content');
const header = document.querySelector('.header');
const headerButton = header.querySelector('.header__button');
const footer = document.querySelector('.footer');
const footerLabel = footer.querySelector('.footer__label');
const footerInput = footer.querySelector('.footer__input');
const footerAutor = footer.querySelector('.footer__autor');
const footerButton = footer.querySelector('.footer__button');
const button = document.querySelector('.button');
const buttonChangeThemeBig = button.querySelector('.button__swith');
const lightIcon = button.querySelector('.button__icon-light');
const darkIcon = button.querySelector('.button__icon-dark');
const bicyclesNav = bycicles.querySelector('#bicycles-select');
const buttonChangeThemeSmall = document.querySelector('.button__icon-dark-light');


const arr = [content, header, footer,footerLabel];

buttonChangeThemeBig.addEventListener('click', function() {
  chageTheme();
    });

function toggleClass(elem) {
  elem.classList.toggle('content_theme_dark');
}

function chageTheme() {
  buttonChangeThemeBig.classList.toggle('button__swith_theme_dark');
  lightIcon.classList.toggle('button__icon-light_theme_dark');
  darkIcon.classList.toggle('button__icon-dark_theme_dark');
  bicyclesNav.classList.toggle('bicycles__menu-list_theme_dark');
  btnPrev.classList.toggle('slider__button-prev_theme_dark');
  btnNext.classList.toggle('slider__button-next_theme_dark');
  headerButton.classList.toggle('header__button_theme_dark');
  popup.classList.toggle('content_theme_dark');
  buttonClosePopup.classList.toggle('popup__close-button_theme_dark');
  popupButtonChangeTheme.classList.toggle('button__swith_theme_dark');
  popupIconLight.classList.toggle('button__icon-light_theme_dark');
  popupIconDark.classList.toggle('button__icon-dark_theme_dark');

  Array.from(allParagraph).forEach((element) => {
    toggleClass(element);
  });

  Array.from(allLinks).forEach((element) => {
    toggleClass(element);
  });

  Array.from(allTitle).forEach((element) => {
    toggleClass(element);
  });

  arr.forEach((element) => {
    toggleClass(element);
  });

  footerInput.classList.toggle('footer__input_theme_dark');
  footerLabel.classList.toggle('footer__label_theme_dark');
  footerAutor.classList.toggle('footer__autor_theme_dark');
  footer.classList.toggle('footer_theme_dark');
  footerButton.classList.toggle('footer__button_theme_dark');
}

