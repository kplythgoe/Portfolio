document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuItems = mobileMenu.querySelectorAll("a");

  burgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });

  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 0);
  });

  const exp = document.querySelectorAll(".single-about");

  exp.forEach((job) => {
    job.addEventListener("click", () => {
      job.classList.toggle("active");

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 700);
    });
  });
});
