// Serviette site — shared behaviour across all pages

// Mobile nav toggle
const navEl = document.getElementById('siteNav');
const navToggle = document.getElementById('navToggle');
if (navEl && navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navEl.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  const navLinks = document.getElementById('navLinks');
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navEl.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// Before / after toggle — only present on how-it-works.html
const btnWithout = document.getElementById('btnWithout');
const btnWith = document.getElementById('btnWith');
const tlWithout = document.getElementById('tl-without');
const tlWith = document.getElementById('tl-with');
if (btnWithout && btnWith && tlWithout && tlWith) {
  btnWithout.addEventListener('click', () => {
    btnWithout.classList.add('active'); btnWith.classList.remove('active');
    tlWithout.classList.add('active'); tlWith.classList.remove('active');
  });
  btnWith.addEventListener('click', () => {
    btnWith.classList.add('active'); btnWithout.classList.remove('active');
    tlWith.classList.add('active'); tlWithout.classList.remove('active');
  });
}

// Scroll-reveal animation
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}
