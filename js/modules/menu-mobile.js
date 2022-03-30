import outsideClick from "./outsideclick.js";

export default function MenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function toggleMenu() {
    menuList.classList.toggle("active");
    menuButton.classList.toggle("active");

    outsideClick(menuList, ["click", "touchstart"], () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
  }
}
