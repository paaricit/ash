// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggle && siteNav) {
  const closeNav = () => {
    siteNav.setAttribute('hidden', '');
    navToggle.setAttribute('aria-expanded', 'false');
  };
  const openNav = () => {
    siteNav.removeAttribute('hidden');
    navToggle.setAttribute('aria-expanded', 'true');
  };
  closeNav();
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    if (expanded) closeNav(); else openNav();
  });
  siteNav.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeNav();
  });
}

// Smooth scroll for same-page anchor links
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const href = anchor.getAttribute('href');
  const id = href.slice(1);
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Lightbox for gallery
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
if (lightbox && lightboxImg && lightboxClose) {
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-lightbox]');
    if (!trigger) return;
    const href = trigger.getAttribute('href');
    if (!href) return;
    e.preventDefault();
    lightboxImg.src = href;
    lightbox.removeAttribute('hidden');
  });
  lightboxClose.addEventListener('click', () => {
    lightbox.setAttribute('hidden', '');
    lightboxImg.removeAttribute('src');
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.setAttribute('hidden', '');
      lightboxImg.removeAttribute('src');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hasAttribute('hidden')) {
      lightbox.setAttribute('hidden', '');
      lightboxImg.removeAttribute('src');
    }
  });
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());


