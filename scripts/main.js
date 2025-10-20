const typewriter = document.getElementById("typewriter");
if (typewriter) {
  const words = [
    { text: "Syndrom", color: "#CDD6F4" }, // Mocha Text
    { text: "Senal", color: "#CBA6F7" }, // Mocha Mauve
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const text = currentWord.text;
    const color = currentWord.color;

    // Update text and cursor
    typewriter.innerHTML = `<span style="color: ${color}">${text.substring(0, charIndex)}</span><span class="cursor">|</span>`;

    if (!isDeleting) {
      // Typing
      charIndex++;
      if (charIndex <= text.length) {
        setTimeout(type, 150); // Typing speed
      } else {
        // Pause after typing
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 1000);
      }
    } else {
      // Deleting
      charIndex--;
      if (charIndex >= 0) {
        setTimeout(type, 100); // Deleting speed
      } else {
        // Move to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500); // Pause before next word
      }
    }
  }

  // Start typing
  type();
}

// --- SVG Timeline Drawing ---
document.addEventListener("DOMContentLoaded", function () {
  // Hide nav on scroll
  let lastScrollTop = 0;
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop && st > 60) {
      nav.classList.add("nav-hidden");
    } else {
      nav.classList.remove("nav-hidden");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  });

  // Timeline SVG
  const svg = document.getElementById("timeline-svg");
  if (!svg) return;

  // y positions for dots (should match .timeline-label top values)
  const milestones = [20, 120, 220, 320];

  // Draw vertical line
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", 40);
  line.setAttribute("y1", milestones[0]);
  line.setAttribute("x2", 40);
  line.setAttribute("y2", milestones[milestones.length - 1]);
  line.setAttribute("stroke", "#cba6f7");
  line.setAttribute("stroke-width", "16");
  line.setAttribute("stroke-linecap", "round");
  svg.appendChild(line);

  // Draw dots
  milestones.forEach((y, i) => {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    circle.setAttribute("cx", 40);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 12);
    circle.setAttribute("fill", "#cba6f7");
    circle.setAttribute("stroke", "#cdd6f4");
    circle.setAttribute("stroke-width", "2");
    if (i === milestones.length - 1) {
      circle.setAttribute("class", "active-dot");
    }
    svg.appendChild(circle);
  });
});
