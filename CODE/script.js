document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const mainContent = document.getElementById('main-content');
  const logo = document.getElementById('logo');

  logo.addEventListener('click', () => {
    intro.style.opacity = '0';
    intro.style.transition = 'opacity 1s ease';
    setTimeout(() => {
      intro.style.display = 'none';
      mainContent.style.display = 'flex';
    }, 1000); // 1000 ms = 1 seconde pour attendre que l'animation de disparition soit terminée
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulario enviado con éxito!");
    form.reset();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Préparer les paramètres de l'email
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    // Envoyer l'email via EmailJS
    emailjs.send("service_juanramun", "template_juanramun", templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Formulario enviado con éxito!");
        form.reset();
      }, function (error) {
        console.log('FAILED...', error);
        alert("Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.");
      });
  });
});