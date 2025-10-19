const typewriter = document.getElementById("typewriter");
const words = [
  { text: "Syndrom", color: "#CDD6F4" } /* Mocha Text */,
  { text: "Senal", color: "#CBA6F7" } /* Mocha Mauve */,
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
