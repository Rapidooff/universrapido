// Voix IA au chargement
window.addEventListener("DOMContentLoaded", () => {
    const msg = new SpeechSynthesisUtterance("Bienvenue dans l'univers de Rapido.");
    msg.lang = "fr-FR";
    speechSynthesis.speak(msg);
  });
  
  // Formulaire contact AJAX + confirmation
  const form = document.getElementById('contact-form');
  const confirmation = document.getElementById('confirmation-message');

  if (form && confirmation) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const data = new FormData(form);

      fetch('https://formsubmit.co/ajax/raphaelhaddad77@icloud.com', {
        method: 'POST',
        body: data,
      })
      .then(response => {
        if (response.ok) {
          confirmation.style.display = 'block';
          confirmation.textContent = '✅ Message envoyé avec succès !';
          form.reset();
        } else {
          confirmation.style.display = 'block';
          confirmation.style.color = 'red';
          confirmation.textContent = '❌ Erreur lors de l’envoi.';
        }
      })
      .catch(() => {
        confirmation.style.display = 'block';
        confirmation.style.color = 'red';
        confirmation.textContent = '❌ Problème de réseau.';
      });
    });
  }
  
  // Animation d'apparition images
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, {
    threshold: 0.3
  });
  
  document.querySelectorAll('.slider img, .gallery img, #boxe img').forEach(img => {
    observer.observe(img);
  });