document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const nav = document.querySelector(".nav");

  // Menu mobile
  menuButton?.addEventListener("click", () => {
    nav.classList.toggle("menu-open");
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("menu-open");
    });
  });

  // Animação suave ao entrar nas seções
  const elements = document.querySelectorAll(
    ".service-card, .process-item, .about-content, .about-visual, .cta-box"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  elements.forEach((element) => {
    element.classList.add("fade-element");
    observer.observe(element);
  });

  // Pequeno efeito no terminal
  const cursor = document.querySelector(".cursor");

  setInterval(() => {
    if (cursor) {
      cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
    }
  }, 500);
});
