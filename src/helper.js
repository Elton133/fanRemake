export const nav = document.querySelector("#mainnavbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.style.backgroundColor = "#f5d9df";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});
