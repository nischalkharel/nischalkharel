// Particle Animation
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 100;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function handleParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let particle of particlesArray) {
    particle.update();
    particle.draw();
  }
}

function animateParticles() {
  handleParticles();
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

// Fun Fact Generator
const facts = [
  "I can debug code for hours just to fix a missing semicolon!",
  "I built my first robot in high school using LEGO parts.",
  "I love combining AI with hardware for real-world applications.",
  "I'm a huge fan of sci-fi movies—Interstellar is my favorite!",
  "One of my goals is to design an AI that can play chess better than me."
];

document.getElementById("fact-button").addEventListener("click", () => {
  const funFact = document.getElementById("fun-fact");
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  funFact.textContent = randomFact;
  funFact.classList.remove("hidden");
});
