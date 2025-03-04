function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Initial check
});
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typing-text");
  const words = ["Frontend Developer", "Data Analyst"];
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    let currentWord = words[wordIndex];

    if (isDeleting) {
      textElement.textContent = currentWord.substring(0, letterIndex--);
    } else {
      textElement.textContent = currentWord.substring(0, letterIndex++);
    }

    if (!isDeleting && letterIndex === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // Pause before deleting
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500); // Pause before typing next word
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
    }
  }

  typeEffect();
});

