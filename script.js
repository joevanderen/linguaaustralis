/* ==================================================================
   LINGUA AUSTRALIS: small bits of interactivity
   1. Mobile menu
   2. Header shadow on scroll
   3. Program buttons pre-select the form's "I'm interested in" field
   4. Show child fields when "My child" is selected
   5. Send the form to Formspree without leaving the page
   ================================================================== */

// 1. Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  nav.classList.toggle('open', !open);
});

// Close the menu after tapping a link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    nav.classList.remove('open');
  });
});

// 2. Header shadow once the page is scrolled
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// 3. Buttons with data-program="..." pre-select that option in the form
const programSelect = document.getElementById('program');

document.querySelectorAll('[data-program]').forEach(btn => {
  btn.addEventListener('click', () => {
    const wanted = btn.dataset.program;
    const match = [...programSelect.options].find(o => o.text === wanted || o.value === wanted);
    if (match) programSelect.value = match.value;
    if (wanted.toLowerCase().includes('kids')) setStudent('My child');
  });
});

// 4. Child fields
const childFields = document.getElementById('child-fields');

function setStudent(value) {
  const radio = document.querySelector(`input[name="student"][value="${value}"]`);
  if (radio) radio.checked = true;
  childFields.hidden = value !== 'My child';
}

document.querySelectorAll('input[name="student"]').forEach(radio => {
  radio.addEventListener('change', () => setStudent(radio.value));
});

// 5. Form submission (Formspree)
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (form.action.includes('YOUR_FORM_ID')) {
    statusEl.className = 'form-status error';
    statusEl.textContent = 'The form isn\'t connected yet. Please message us on WhatsApp or Instagram in the meantime.';
    return;
  }

  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'Sending…';
  statusEl.className = 'form-status';
  statusEl.textContent = '';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      form.reset();
      setStudent('Myself');
      statusEl.className = 'form-status success';
      statusEl.textContent = '¡Gracias! We got your message and will get back to you soon.';
    } else {
      throw new Error('Request failed');
    }
  } catch (err) {
    statusEl.className = 'form-status error';
    statusEl.textContent = 'Something went wrong. Please try again, or message us on WhatsApp.';
  } finally {
    button.disabled = false;
    button.textContent = 'Send';
  }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
