(function () {

  const selectors = {
    btnShow: '[data-btn-menu-show]',
    btnHide: '[data-btn-menu-hide]',
    menu: '[data-menu]',
    menuLink: '[data-menu] a'
  };

  const init = () => {
    const btnShow = document.querySelector(selectors.btnShow);
    btnShow.addEventListener('click', show);

    const btnHide = document.querySelector(selectors.btnHide);
    btnHide.addEventListener('click', hide);

    const menuLinks = document.querySelectorAll(selectors.menuLink);
    menuLinks.forEach(link => {
      link.addEventListener('click', hide);
    });
  };

  const show = () => {
    const menu = document.querySelector(selectors.menu);
    menu.classList.add('is-visible');
  };

  const hide = () => {
    const menu = document.querySelector(selectors.menu);
    menu.classList.remove('is-visible');
  };

  init();
  
})();