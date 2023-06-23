const navmenuBtn = document.querySelector(".menu-btn");
const navmanuIcon = document.querySelector("#menu-icon");
const navLink = document.querySelector(".nav-bars");

navmenuBtn.addEventListener("click", () => {
  if (navmanuIcon.classList.contains("fa-bars")) {
    navmanuIcon.classList.remove("fa-bars");
    navmanuIcon.classList.add("fa-xmark");
    navLink.style.display = "flex";
  } else {
    navmanuIcon.classList.remove("fa-xmark");
    navmanuIcon.classList.add("fa-bars");

    navLink.style.display = "none";
  }
});
