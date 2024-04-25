const toggleHeaderScrollClass = () => {
  const header = document.querySelector(".header");

  if (!header) return;

  function checkScrollPosition() {
    if (window.scrollY > 0) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  }

  checkScrollPosition();

  window.addEventListener("scroll", () => {
    checkScrollPosition();
  });
};

export default toggleHeaderScrollClass;
