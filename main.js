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
  const weddingDate = new Date('2026-10-10T13:00:00');
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
