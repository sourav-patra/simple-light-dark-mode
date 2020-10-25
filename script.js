const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const DARK_THEME = "dark";
const LIGHT_THEME = "light";

/**
 * Toggle element styles based on theme
 * @param {boolean} isDark 
 */
function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  if (isDark) {
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  } else {
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-usn');
  }
  toggleImageSourcesAccordingToMode(isDark ? DARK_THEME : LIGHT_THEME);
}

/**
 * Change the image sources based on theme
 * @param {string} mode 
 */
function toggleImageSourcesAccordingToMode(mode) {
  image1.src = `assets/img/undraw_proud_coder_${mode}.svg`;
  image2.src = `assets/img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `assets/img/undraw_conceptual_idea_${mode}.svg`; 
}

/**
 * Change event listener on the input switch
 * @param {HTMLEvent} event 
 */
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", DARK_THEME);
    localStorage.setItem("theme", DARK_THEME);
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", LIGHT_THEME);
    localStorage.setItem("theme", LIGHT_THEME);
    toggleDarkLightMode();
  }
}

// Adding event listener for the input switch
toggleSwitch.addEventListener("change", switchTheme);

// Check local storage and set dark theme if required
const currentTheme = localStorage.getItem("theme");
if (currentTheme && currentTheme === DARK_THEME) {
  document.documentElement.setAttribute("data-theme", DARK_THEME);
  toggleSwitch.checked = true;
  toggleDarkLightMode(true);
}

