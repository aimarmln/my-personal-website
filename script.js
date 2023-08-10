// toggle sidebar menu
const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".nav-list");

const setSidebar = action => {
  switch (action) {
    case "toggle":
      menu.classList.toggle("menu-active");
      sidebar.classList.toggle("sidebar-active");
      break;
    case "remove":
      menu.classList.remove("menu-active");
      sidebar.classList.remove("sidebar-active");
      break;
    default:
      console.error("argument is not valid");
      break;
  }
}

const toggleSidebar = () => setSidebar("toggle");
const removeSidebar = () => setSidebar("remove");

sidebar.addEventListener("click", toggleSidebar);

// nav menu scroll to sections
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const headerHeight = document.querySelector(".header").offsetHeight;
    const targetSection = document.querySelector(link.getAttribute("href"));

    if (targetSection) {
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: targetPosition - headerHeight
      });

      setTimeout(toggleSidebar, 200);
    }
  });
});

// handle sidebar close on window resize (bug fix)
window.addEventListener("resize", () => {
  const isMenuActive = menu.classList.contains("menu-active");
  const isSidebarActive = sidebar.classList.contains("sidebar-active");

  if (window.innerWidth <= 768 && isMenuActive && isSidebarActive) {
    removeSidebar();
  }
});


// scroll to top functionality
const toTopEls = [
  document.querySelector(".logo"), 
  document.querySelector(".to-top")
];

toTopEls.forEach(element => {
  element.addEventListener("click", () => {
    window.scrollTo(0, 0);
    removeSidebar();
  });
});

// handle form onsubmit
const form = document.getElementById("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  form.reset();
  alert("Form submitted!");
})

// typed animation
const typed = new Typed(".hello", {
  strings: [
    "Hello",           
    "Hola",
    "Bonjour",
    "Ciao",           
    "Hallo",
    "Olá",
    "Hej",
    "Привет",
    "你好",
    "こんにちは",     
    "여보세요",        
    "Halo"           
  ],
  typeSpeed: 50,
  backSpeed: 25,
  startDelay: 500,
  backDelay: 2000,
  loop: true
});
