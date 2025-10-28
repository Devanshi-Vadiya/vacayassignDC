// Basic interactive behaviors: mobile menu, dropdown, taste picker, promo form

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobilePanel = document.getElementById('mobilePanel');

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    const hidden = mobilePanel.getAttribute('aria-hidden') === 'true';
    mobilePanel.setAttribute('aria-hidden', String(!hidden));
  });

  // Dropdowns: made accessible by using button + aria attributes already.
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.has-dropdown');
      const panel = parent.querySelector('.dropdown-panel');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.setAttribute('aria-hidden', String(expanded));
    });
  });

  // Taste selector (changes preview & text)
  const tasteBtns = document.querySelectorAll('.taste-btn');
  const result = document.getElementById('flavorResult');
  const preview = document.getElementById('previewImage');

  const flavors = {
    classic: {
      text: 'Classic — crisp, balanced, timeless.',
      img: 'https://images.unsplash.com/photo-1598515216850-0ecff4f63b3e?auto=format&fit=crop&w=800&q=60'
    },
    cherry: {
      text: 'Cherry — sweet, fruity, bold.',
      img: 'https://images.unsplash.com/photo-1580932801780-5f2f67f7b3af?auto=format&fit=crop&w=800&q=60'
    },
    lime: {
      text: 'Lime — zesty, fresh, energetic.',
      img: 'https://images.unsplash.com/photo-1608788354168-e2f7b6c7f36b?auto=format&fit=crop&w=800&q=60'
    }
  };

  tasteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tasteBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.flavor;
      result.textContent = flavors[f].text;
      preview.src = flavors[f].img;
      preview.alt = `${f} preview`;
    });
  });

  // Promo form simple handler
  const promoForm = document.getElementById('promoForm');
  if (promoForm) {
    promoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      if (!email) {
        alert('Please enter an email.');
        return;
      }
      // Simulate signup
      alert(`Thanks! We'll send offers to ${email} (demo).`);
      promoForm.reset();
    });
  }

  // Year in footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
