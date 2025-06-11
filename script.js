// Voix IA au chargement
window.addEventListener("DOMContentLoaded", () => {
    const msg = new SpeechSynthesisUtterance("Bienvenue dans l'univers de Rapido.");
    msg.lang = "fr-FR";
    speechSynthesis.speak(msg);
  });
  
  // Formulaire contact simple
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.textContent = "Merci, ton message a bien été reçu ! 🚀";
    form.reset();
  });
  
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