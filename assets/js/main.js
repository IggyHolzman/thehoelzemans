function createFallingLeaves(count = 30) {
  const maxDelay = 24; // controls median spacing
  const slowGroupSpeed = 36;
  const verySlowGroupSpeed = 52;

  for (let i = 0; i < count; i++) {
    const leaf = document.createElement('img');
    leaf.src = '../img/leaf.png';
    leaf.classList.add('falling-leaf');

    // Random horizontal position
    leaf.style.setProperty('--x', Math.random());

    // Random delay
    leaf.style.setProperty('--delay', `${Math.random() * maxDelay}s`);

    // Random speed group
    leaf.style.setProperty('--speed',
      Math.random() < 0.5 ? slowGroupSpeed + 's' : verySlowGroupSpeed + 's'
    );

    // Randomize again on each cycle
    leaf.addEventListener('animationiteration', () => {
      leaf.style.setProperty('--delay', `${Math.random() * maxDelay}s`);
      leaf.style.setProperty('--x', Math.random());
    });

    document.body.appendChild(leaf);
  }
}

createFallingLeaves();



// Menu toggle
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Parallax scroll
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll', window.scrollY);
});

// Countdown
function updateCountdown() {
  const weddingDate = new Date('2026-10-10T00:00:01');
  const now = new Date();
  const diff = weddingDate - now;

  const daysElement = document.getElementById('countdownDays');

  if (diff <= 0) {
    daysElement.innerHTML = '0<span>Days</span>';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  daysElement.innerHTML = days + '<span>Days</span>';
}

updateCountdown();
setInterval(updateCountdown, 60 * 60 * 1000);
