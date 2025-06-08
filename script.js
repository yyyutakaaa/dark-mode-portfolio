// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "all 0.6s ease";
  observer.observe(section);
});

// Dynamic GitHub repos loading (optional - requires GitHub API)
async function loadGitHubStats() {
  try {
    const response = await fetch("https://api.github.com/users/yyyutakaaa");
    const data = await response.json();
    // You can add GitHub stats here if needed
  } catch (error) {
    console.log("GitHub API not available");
  }
}

// Type writer effect for hero subtitle
const subtitle = document.querySelector(".subtitle");
const text = subtitle.textContent;
subtitle.textContent = "";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    subtitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// Start typewriter after page load
window.addEventListener("load", () => {
  setTimeout(typeWriter, 500);
});

// Add hover effect to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Console Easter egg
console.log(
  "%c🚀 Hey daar, nieuwsgierige developer!",
  "font-size: 20px; color: #8b5cf6;"
);
console.log(
  "%cAls je de code interessant vindt, check dan zeker mijn GitHub!",
  "font-size: 14px; color: #10b981;"
);
console.log(
  "%chttps://github.com/yyyutakaaa",
  "font-size: 12px; color: #3b82f6;"
);
