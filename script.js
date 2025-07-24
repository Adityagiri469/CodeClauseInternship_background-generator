const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const direction = document.getElementById("direction");
const preview = document.getElementById("preview");
const cssCode = document.getElementById("css-code");

function updateBackground() {
  const gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  preview.style.background = gradient;
  cssCode.textContent = `background: ${gradient};`;
}

function copyCode() {
  navigator.clipboard.writeText(cssCode.textContent).then(() => {
    alert("CSS code copied to clipboard!");
  });
}

// Event listeners
color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
direction.addEventListener("change", updateBackground);

// Initialize on load
updateBackground();
