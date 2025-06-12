const mobileNav = document.querySelector(".hamburger");
const menubar = document.querySelector(".menubar");

const toggleNav = () => {
  menubar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Loading
document.addEventListener("DOMContentLoaded", () => {
  const greetings = ["Hello", "Hola", "Bonjour", "こんにちは", "안녕하세요"];
  const greetingText = document.getElementById("greeting-text");
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  const loaderAlreadyShown = localStorage.getItem("loaderShown");

  if (loaderAlreadyShown) {
    // Skip loader: Hide it immediately
    loader.style.display = "none";
    mainContent.style.opacity = 1;
    document.body.classList.remove("loading");
    document.body.style.overflow = "auto";
    return;
  }

  // Mark loader as shown
  localStorage.setItem("loaderShown", "true");

  let index = 0;
  const speed = 800;
  const fadeDuration = 300;

  function showNextGreeting() {
    if (index >= greetings.length) {
      loader.classList.add("fade-out");

      setTimeout(() => {
        loader.style.display = "none";
        mainContent.style.opacity = 1;
        document.body.classList.remove("loading");
        document.body.style.overflow = "auto";
      }, 1000);

      return;
    }

    greetingText.textContent = greetings[index];
    greetingText.style.opacity = 1;
    index++;

    setTimeout(() => {
      greetingText.style.opacity = 0;
      setTimeout(showNextGreeting, fadeDuration);
    }, speed);
  }

  // Start the greeting sequence
  showNextGreeting();
});

// Dark mode
const btn1 = document.getElementById("toggle-btn1");
const text1 = document.getElementById("toggle-btn1");
const btn2 = document.getElementById("toggle-btn2");
const text2 = document.getElementById("toggle-btn2");

btn1.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    text1.src = "icon/dark_mode.svg";
  } else {
    text1.src = "icon/light_mode.svg";
  }
});

btn2.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    text2.textContent = "Dark Mode";
  } else {
    text2.textContent = "Light Mode";
  }
});

// Scroll to top
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// Disable Animation
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".animation-toggle");
  const icon = toggleBtn.querySelector("img");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("no-animation");

    const animationsOff = document.body.classList.contains("no-animation");

    // Update icon
    icon.src = animationsOff ? "icon/aniOff.svg" : "icon/ani.svg";
    icon.alt = animationsOff ? "Animation Off" : "Animation On";

    // 🛠 Fix: tooltip should say what clicking will do next
    toggleBtn.setAttribute(
      "data-social",
      animationsOff ? "Animation Off" : "Animation On"
    );
  });
});

// Hide nav when scroll to bottom and when scroll to top it will show up 
var lastScrollTop = 0;
var navbar_c = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar_c.style.top = "-80px";
  } else {
    navbar_c.style.top = "15px";
  }

  lastScrollTop = scrollTop;
});

// Kursor.js (lib)
new kursor({
  type: 2,
  color: "#000080",
  removeDefaultCursor: true
});
