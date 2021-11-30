import "./style.scss";

const addMouseListener = function addHoverListener(item) {
  item.addEventListener("mouseenter", (ev) => {
    console.log(ev);
    item.classList.toggle("visible");
  });
  item.addEventListener("mouseleave", (ev) => {
    console.log(ev);
    item.classList.toggle("visible");
  });
};

(function addListenerToNavItems() {
  const navItems = document.querySelectorAll(".menu-item");
  console.log(navItems);
  navItems.forEach((item) => addMouseListener(item));
})();
