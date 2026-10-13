const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// Keep the demo's internal navigation local and show a gentle note for unfinished article links.
document.querySelectorAll('.news-body > a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert("This is a student-made recreation. This sample news item is for demonstration only.");
  });
});
