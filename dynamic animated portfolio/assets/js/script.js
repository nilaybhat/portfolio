/*
  Main interactive behaviors for the portfolio:
  - Navigation scrolling + active link highlight
  - Typing effect
  - Intersection animations
  - Theme toggle (dark/light)
  - Back-to-top button
  - Smooth page transitions
  - Simple form feedback
*/

const root = document.documentElement;
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = Array.from(document.querySelectorAll(".nav__link"));
const backToTop = document.getElementById("backToTop");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const typingText = document.getElementById("typing");
const pageTransition = document.getElementById("pageTransition");
const yearEl = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

const typingPhrases = [
  "Web Developer",
  "Cybersecurity Learner",
  "Future Bug Bounty Hunter",
];

const preferences = {
  theme: localStorage.getItem("theme") || "dark",
  navOpen: false,
};

const setTheme = (theme) => {
  document.body.classList.toggle("dark", theme === "dark");
  themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("theme", theme);
};

const updateYear = () => {
  const year = new Date().getFullYear();
  yearEl.textContent = year;
};

const smoothScrollTo = (target) => {
  const element = document.querySelector(target);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

const closeMobileNav = () => {
  nav.classList.remove("open");
  navToggle.classList.remove("open");
  preferences.navOpen = false;
};

const openMobileNav = () => {
  nav.classList.add("open");
  navToggle.classList.add("open");
  preferences.navOpen = true;
};

const toggleMobileNav = () => {
  if (nav.classList.contains("open")) {
    closeMobileNav();
  } else {
    openMobileNav();
  }
};

const updateActiveNav = () => {
  const scrollPos = window.scrollY + window.innerHeight / 4;
  navLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (!section) return;

    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

const handleBackToTop = () => {
  if (window.scrollY > 600) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
};

const prepareIntersectionAnimations = () => {
  const animatedElements = document.querySelectorAll(".animate");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay ? parseInt(entry.target.dataset.delay, 10) : 0;
          entry.target.style.animationDelay = `${delay}ms`;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedElements.forEach((el) => observer.observe(el));
};

const animateProgressBars = () => {
  const progressBars = document.querySelectorAll(".progress__bar");
  progressBars.forEach((bar) => {
    const progress = bar.style.getPropertyValue("--progress") || "0%";
    requestAnimationFrame(() => {
      bar.style.width = progress;
    });
  });
};

const typeWriter = (phrases, element) => {
  let currentPhraseIndex = 0;
  let letterIndex = 0;
  let direction = 1; // 1 for typing, -1 for deleting
  let waitTimer = null;

  const setText = (text) => {
    element.textContent = text;
  };

  const tick = () => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (direction === 1) {
      const nextText = currentPhrase.slice(0, letterIndex + 1);
      setText(nextText);
      letterIndex += 1;

      if (letterIndex > currentPhrase.length) {
        direction = -1;
        waitTimer = setTimeout(tick, 1500);
        return;
      }
    } else {
      const nextText = currentPhrase.slice(0, letterIndex - 1);
      setText(nextText);
      letterIndex -= 1;

      if (letterIndex < 0) {
        direction = 1;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        waitTimer = setTimeout(tick, 600);
        return;
      }
    }

    const delay = direction === 1 ? 100 : 50;
    waitTimer = setTimeout(tick, delay);
  };

  tick();
  return () => {
    clearTimeout(waitTimer);
  };
};

const setUpForm = () => {
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formFeedback.textContent = "Please fill in all fields before sending.";
      return;
    }

    formFeedback.textContent = "Thanks! Your message was captured (demo only).";
    contactForm.reset();

    setTimeout(() => {
      formFeedback.textContent = "";
    }, 4200);
  });
};

const init = () => {
  setTheme(preferences.theme);
  updateYear();
  prepareIntersectionAnimations();
  animateProgressBars();
  setUpForm();

  // Typing animation
  typeWriter(typingPhrases, typingText);

  // Smooth scroll for nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const hash = link.getAttribute("href");
      smoothScrollTo(hash);
      closeMobileNav();
    });
  });

  // Mobile nav toggle
  navToggle.addEventListener("click", () => {
    toggleMobileNav();
  });

  // Close mobile nav when clicking outside
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
      closeMobileNav();
    }
  });

  // Theme toggle
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
    setTheme(nextTheme);
  });

  // Back to top
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Scroll listeners
  window.addEventListener("scroll", () => {
    updateActiveNav();
    handleBackToTop();
  });

  // Page transition animation
  window.addEventListener("load", () => {
    pageTransition.classList.add("hidden");
    setTimeout(() => pageTransition.remove(), 800);
  });

  // Trigger initial active nav
  updateActiveNav();
  handleBackToTop();
};

init();
