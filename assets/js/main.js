/* -----------------------------------------------------------
   FALLING LEAVES SYSTEM — CLEAN, STABLE, RANDOM EVERY CYCLE
----------------------------------------------------------- */

function createFallingLeaves(count = 30) {

  // Median spacing controller (increase to spread leaves out more)
  const maxDelay = 24;

  // Two speed groups (slow + very slow)
  const slowGroupSpeed = 36;
  const verySlowGroupSpeed = 52;

  for (let i = 0; i < count; i++) {

    // Create leaf element
    const leaf = document.createElement('img');

    // Correct asset path (replace with your actual leaf assets)
    leaf.src = 'assets/img/flora_falling1.png';

    leaf.classList.add('falling-leaf');

    /* -----------------------------------------------------------
       INITIAL RANDOM VALUES (APPLIED BEFORE APPENDING)
       Ensures leaves start ABOVE viewport and do NOT appear mid‑air
    ----------------------------------------------------------- */

    // Random horizontal position
    leaf.style.setProperty('--x', Math.random());

    // Random delay BEFORE animation begins
    leaf.style.setProperty('--delay', `${Math.random() * maxDelay}s`);

    // Random speed group
    leaf.style.setProperty(
      '--speed',
      Math.random() < 0.5 ? `${slowGroupSpeed}s` : `${verySlowGroupSpeed}s`
    );

    // Add leaf to DOM AFTER delay + speed are set
    document.body.appendChild(leaf);

    /* -----------------------------------------------------------
       RANDOMIZE AGAIN ON EACH CYCLE
       Prevents deterministic looping pattern
       Prevents disappearing/reappearing mid‑air
    ----------------------------------------------------------- */
    leaf.addEventListener('animationiteration', () => {

      // New random delay for next cycle
      leaf.style.setProperty('--delay', `${Math.random() * maxDelay}s`);

      // New random horizontal position
      leaf.style.setProperty('--x', Math.random());

      // Reassign speed group randomly each cycle
      leaf.style.setProperty(
        '--speed',
        Math.random() < 0.5 ? `${slowGroupSpeed}s` : `${verySlowGroupSpeed}s`
      );
    });
  }
}

// Generate leaves
createFallingLeaves();



/* -----------------------------------------------------------
   MENU TOGGLE
----------------------------------------------------------- */

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


/* -----------------------------------------------------------
   PARALLAX SCROLL
----------------------------------------------------------- */

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll', window.scrollY);
});


/* -----------------------------------------------------------
   COUNTDOWN TIMER
----------------------------------------------------------- */

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

