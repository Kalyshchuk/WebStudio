(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    })

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
    
//   window
//     .matchMedia('(min-width: 600px)')
//     .addEventListener(
//       'change',
//       e => e.matches && menuContainer.classList.remove('is-open'),
//     );
// })();