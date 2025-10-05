// Mobile navigation toggle
const CALENDLY_URL = 'https://calendly.com/your-name/free-consultation';
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id';
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

// Set Calendly URLs from single source
document.querySelectorAll('[data-calendly-cta]').forEach((a) => {
  a.setAttribute('href', CALENDLY_URL);
});

// Smooth scroll for same-page anchor links
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const href = anchor.getAttribute('href');
  if (!href || href === '#') return;
  const id = href.slice(1);
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// lightbox code removed (gallery removed)

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Page fade-in after load
window.addEventListener('load', () => {
  document.body.classList.add('is-page-loaded');
});

// Reveal on scroll
const revealEls = Array.from(document.querySelectorAll('.section, .card, .quote, .hero-copy'));
revealEls.forEach((el) => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  revealEls.forEach((el) => io.observe(el));
}

// Formspree submit for lead forms
function serializeForm(form) {
  const fields = ['name','email','phone','message'];
  const data = {};
  fields.forEach((f) => {
    const el = form.querySelector(`[name="${f}"]`);
    if (el && el.value) data[f] = el.value.trim();
  });
  return data;
}

document.querySelectorAll('[data-lead-form]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const endpoint = form.getAttribute('data-endpoint') || FORMSPREE_ENDPOINT;
    const data = serializeForm(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';
    try {
      if (submitBtn) submitBtn.textContent = 'Sending...';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        form.reset();
        alert('Thanks! Your message has been sent.');
      } else {
        alert('Sorry, something went wrong. Please try again later.');
      }
    } catch (err) {
      alert('Network error. Please try again.');
    } finally {
      if (submitBtn) submitBtn.textContent = originalText;
    }
  });
});

// Update active nav aria-current based on scroll
const sections = Array.from(document.querySelectorAll('main .section'));
const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
function setActiveLink() {
  let currentId = '';
  const scrollPos = window.scrollY + 100;
  sections.forEach((sec) => {
    const top = sec.offsetTop; const bottom = top + sec.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) currentId = sec.id;
  });
  navLinks.forEach((a) => {
    const href = a.getAttribute('href') || '';
    const id = href.startsWith('#') ? href.slice(1) : '';
    if (id && id === currentId) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', setActiveLink);
setActiveLink();


