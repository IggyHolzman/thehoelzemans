/* -----------------------------------------------------------
   FALLING LEAVES — stable, staggered, fade-in
----------------------------------------------------------- */

function createFallingLeaves(count = 30) {

  const slowGroupSpeed = 36;
  const verySlowGroupSpeed = 52;

  const leafImages = [
    'assets/img/flora_falling1.png',
    'assets/img/flora_falling2.png',
    'assets/img/flora_falling3.png',
    'assets/img/flora_falling4.png',
    'assets/img/flora_falling5.png',
    'assets/img/flora_falling6.png'
  ];

  const container = document.getElementById('leafContainer');

  for (let i = 0; i < count; i++) {

    const leaf = document.createElement('img');
    leaf.classList.add('falling-leaf');

    leaf.src = leafImages[Math.floor(Math.random() * leafImages.length)];

    leaf.style.setProperty('--x', Math.random());
    leaf.style.setProperty('--y', Math.random());
    leaf.style.setProperty(
      '--speed',
      Math.random() < 0.5 ? `${slowGroupSpeed}s` : `${verySlowGroupSpeed}s`
    );

    container.appendChild(leaf);

    leaf.addEventListener('animationiteration', () => {
      leaf.style.setProperty('--y', Math.random() * 0.3);
      leaf.src = leafImages[Math.floor(Math.random() * leafImages.length)];
    });
  }
}

createFallingLeaves();

/* -----------------------------------------------------------
   MENU TOGGLE
----------------------------------------------------------- */

const menu = document.getElementById('menu');
const detailsButton = document.getElementById('detailsButton');

detailsButton.addEventListener('click', () => {
  menu.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && e.target !== detailsButton) {
    menu.classList.remove('open');
  }
});

/* -----------------------------------------------------------
   PARALLAX SCROLL
----------------------------------------------------------- */

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll', window.scrollY);
});

/* -----------------------------------------------------------
   COUNTDOWN
----------------------------------------------------------- */

function updateCountdown() {
  const weddingDate = new Date('2026-10-10T13:00:00');
  const now = new Date();
  const diff = weddingDate - now;

  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minutesEl = document.getElementById('countMinutes');

  if (diff <= 0) {
    daysEl.textContent = 0;
    hoursEl.textContent = 0;
    minutesEl.textContent = 0;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
}


updateCountdown();
setInterval(updateCountdown, 60 * 1000);
