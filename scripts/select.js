const select = bycicles.querySelector('.bicycles__menu-list');
const allOption = select.querySelectorAll('.bicycles__item-list');



  select.addEventListener("change", (e) => {
    const id = e.target.value;
    contents.forEach((content) => {
      content.classList.remove("bicycles__content_active");
    });

    bycicles.querySelector(`${id}`).classList.add("bicycles__content_active");
  });
