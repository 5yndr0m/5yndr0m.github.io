document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("challenge-input");
  const submit = document.getElementById("challenge-submit");
  const result = document.getElementById("challenge-result");
  const socialLinks = document.getElementById("social-links");

  // The correct answer (decoded ROT13): "syndrom is a secret name"
  const correctAnswer = "syndrom is a secret name";

  submit.addEventListener("click", function () {
    const answer = input.value.trim().toLowerCase();
    if (answer === correctAnswer) {
      result.textContent = "Access granted!";
      result.style.color = "#94e2d5";
      socialLinks.style.display = "flex";
      // Remove hint if present
      const hint = document.getElementById("footer-hint");
      if (hint) hint.style.display = "none";
    } else if (answer === "why?") {
      result.innerHTML = `"Why?"<br><span style="font-size:0.95em;color:#a6adc8;">"Because it's there." &mdash; George Mallory, when asked why he wanted to climb Mount Everest</span>`;
      result.style.color = "#fab387";
      socialLinks.style.display = "flex";
      // Show hint in footer
      let hint = document.getElementById("footer-hint");
      if (!hint) {
        const footer = document.querySelector("footer .footer-container");
        hint = document.createElement("div");
        hint.id = "footer-hint";
        hint.style.fontSize = "0.95em";
        hint.style.color = "#a6e3a1";
        hint.style.marginTop = "0.5em";
        hint.textContent = "Hint: ROT13 is a simple substitution cipher.";
        footer.appendChild(hint);
      } else {
        hint.style.display = "block";
      }
    } else {
      result.textContent = "Access denied. Try again!";
      result.style.color = "#ff5555";
      socialLinks.style.display = "none";
      // Remove hint if present
      const hint = document.getElementById("footer-hint");
      if (hint) hint.style.display = "none";
    }
  });

  // Optional: allow pressing Enter to submit
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      submit.click();
    }
  });
});
