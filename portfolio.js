const eyebrow = document.getElementById("eyebrow");
// give a blink to the eyebrow text
setInterval(() => {
  eyebrow.style.opacity = eyebrow.style.opacity === "0.5" ? "1" : "0.5";
}, 500);