/* -----------------------------------------------------------
   FALLING LEAVES SYSTEM — STABLE, NO DELAY, RANDOM IMAGES
----------------------------------------------------------- */

function createFallingLeaves(count = 30) {

  // Two speed groups (slow + very slow)
  const slowGroupSpeed = 36;
  const verySlowGroupSpeed = 52;

  // List of leaf image variants (6 total, adjust paths as needed)
  const leafImages = [
    'assets/img/flora_falling1.png',
    'assets/img/flora_falling2.png',
    'assets/img/flora_falling3.png',
    'assets/img/flora_falling4.png',
    'assets/img/flora_falling5.png',
    'assets/img/flora_falling6.png'
  ];

  for (let i = 0; i < count; i++) {

    // Create leaf element
    const leaf = document.createElement('img');

    // Random image from list
    const imgIndex = Math.floor(Math.random() * leafImages.length);
    leaf.src = leafImages[imgIndex];

    leaf.classList.add('falling-leaf');

    /* -----------------------------------------------------------
       INITIAL RANDOM VALUES (NO DELAY, ALWAYS VISIBLE)
    ----------------------------------------------------------- */
    
    // Random vertical position
    leaf.style.setProperty('--y', Math.random());

    // Random horizontal position
    leaf.style.setProperty('--x', Math.random());

    // Random speed group
    leaf.style.setProperty(
      '--speed',
      Math.random() < 0.5 ? `${slowGroupSpeed}s` : `${verySlowGroupSpeed}s`
    );

    // Add leaf to DOM
    document.body.appendChild(leaf);

    /* -----------------------------------------------------------
       RANDOMIZE ON EACH CYCLE (NO DELAY CHANGE)
       Prevents flicker/disappear, keeps motion continuous
    ----------------------------------------------------------- */
    leaf.addEventListener('animationiteration', () => {
      //Randomize start height 
      leaf.style.setProperty('--y', Math.random() * 0.3);

      // Randomly change image each cycle
      const nextIndex = Math.floor(Math.random() * leafImages.length);
      leaf.src = leafImages[nextIndex];
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
   PARALLAX SCROLL (drives foliage vertical movement)
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

/* -----------------------------------------------------------
   NOTE: Page transition shutter effect for foliage
   can be added later using additional classes/animations.
----------------------------------------------------------- */


