// 스크롤 이벤트
const header = document.querySelector("#header");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav_link");

function handleHeader() {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

function handleActiveMenu() {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

function initScroll() {
  handleHeader();
  handleActiveMenu();

  window.addEventListener("scroll", () => {
    handleHeader();
    handleActiveMenu();
  });
}

initScroll();
