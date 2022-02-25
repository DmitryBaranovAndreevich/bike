const form = footer.querySelector('.footer__form');

footerInput.onclick = function() {
  footerButton.style.display = 'block';
  footerInput.value = '';
  footerInput.placeholder = '';
};

form.onsubmit = function(e) {
  e.preventDefault();
  footerButton.style.display = 'none';
  footerInput.value = 'Круто!';
};


