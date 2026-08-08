// Shared script for both case-file pages.
// Each block checks the element exists before wiring it up, so the
// same file can run on index.html and characters.html without errors.

// 1. Fade sections in as they scroll into view.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// 2. Character filter (characters.html only).
const filterBar = document.querySelector('.filter-bar');
if (filterBar) {
  const cards = document.querySelectorAll('.file-card[data-role]');

  filterBar.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    filterBar.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === button)));

    const role = button.dataset.filter;
    cards.forEach((card) => {
      card.classList.toggle('is-hidden', role !== 'all' && card.dataset.role !== role);
    });
  });
}

// 3. City / field-office selector (index.html only).
const cityBar = document.querySelector('#cityChips');
if (cityBar) {
  const status = document.querySelector('#cityStatus');
  const bookLink = document.querySelector('#cityBook');

  cityBar.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    cityBar.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === button)));

    const city = button.dataset.city;
    status.innerHTML = `<strong>${city}</strong> logged. Continue to BookMyShow for theatre and showtime.`;
    bookLink.textContent = `Find showtimes in ${city} ↗`;
  });
}
