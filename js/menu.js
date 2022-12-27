(() => {
  const refs = {
    openMenuBtn: document.querySelector(".button-menu"),
    closeMenuBtn: document.querySelector(".main-nav__menu__cross"),
    menu: document.querySelector(".main-nav__menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
