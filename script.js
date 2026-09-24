document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     1. LIVE SEARCH FILTER (Cards & Pricing Search)
     ========================================== */
  const searchInput = document.querySelector('.search-box input');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      // Dono tarah ke cards (Designs & Pricing) ko filter karne ke liye
      const searchableItems = document.querySelectorAll('.card, .price-card');

      searchableItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(query)) {
          item.style.display = 'flex'; // Layout maintain rakhne ke liye flex
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  /* ==========================================
     2. CONTACT FORM SUBMISSION & VALIDATION
     ========================================== */
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Default submit refresh ko rokenge

      const nameInput = contactForm.querySelector('input[placeholder*="Name"]') || contactForm.querySelector('input[type="text"]');
      const clientName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Valued Client';

      // Confirmation Alert Message
      alert(`Thank you, ${clientName}! Your booking request has been received. I will contact you soon.`);

      // Form inputs clear karna
      contactForm.reset();
    });
  }

  /* ==========================================
     3. SMOOTH SCROLLING FOR ALL ANCHOR LINKS
     ========================================== */
  const allNavLinks = document.querySelectorAll('a[href^="#"]');

  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // Agar sirf '#' ka link na ho
      if (targetId && targetId !== '#') {
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          e.preventDefault();
          
          // CSS scroll-margin-top ki wajah se smooth scroll sahi space maintain rakhega
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

});