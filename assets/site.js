const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
if (menu && sidebar) {
  menu.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });
}
