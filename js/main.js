/* Kongwa & Co. — Main JavaScript */

// Navigation scroll behaviour
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// Mobile menu
const hamburger = document.querySelector('.nav-hamburger');
const overlay = document.querySelector('.nav-overlay');
const overlayClose = document.querySelector('.nav-overlay-close');

function openMenu() {
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (hamburger) hamburger.addEventListener('click', openMenu);
if (overlayClose) overlayClose.addEventListener('click', closeMenu);

// Close overlay on link click
if (overlay) {
  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// Active nav link
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-overlay a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Web3Forms submit
const applyForm = document.getElementById('apply-form');
if (applyForm) {
  applyForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = applyForm.querySelector('.form-submit');
    const successMsg = document.getElementById('form-success');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    const data = new FormData(applyForm);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const json = await res.json();

      if (json.success) {
        applyForm.style.display = 'none';
        if (successMsg) successMsg.classList.add('visible');
      } else {
        submitBtn.textContent = 'Something went wrong. Try again.';
        submitBtn.disabled = false;
        setTimeout(() => {
          submitBtn.textContent = originalText;
        }, 3000);
      }
    } catch {
      submitBtn.textContent = 'Connection error. Try again.';
      submitBtn.disabled = false;
      setTimeout(() => {
        submitBtn.textContent = originalText;
      }, 3000);
    }
  });
}
