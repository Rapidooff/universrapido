// Voix IA au chargement
window.addEventListener("DOMContentLoaded", () => {
    const msg = new SpeechSynthesisUtterance("Bienvenue dans l'univers de Rapido.");
    msg.lang = "fr-FR";
    speechSynthesis.speak(msg);
  });
  
  // Formulaire contact AJAX + confirmation
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('formMessage');

if (form && formMessage) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch('https://formsubmit.co/ajax/raphaelhaddad77@icloud.com', {
      method: 'POST',
      body: data,
    })
    .then(response => {
      if (response.ok) {
        formMessage.style.display = 'block';
        formMessage.textContent = '✅ Message envoyé avec succès !';
        form.reset();
      } else {
        formMessage.style.display = 'block';
        formMessage.style.color = 'red';
        formMessage.textContent = '❌ Erreur lors de l’envoi.';
      }
    })
    .catch(() => {
      formMessage.style.display = 'block';
      formMessage.style.color = 'red';
      formMessage.textContent = '❌ Problème de réseau.';
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