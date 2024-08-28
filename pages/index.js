document.addEventListener("DOMContentLoaded", function () {
  const rsvpForm = document.querySelector("form");
  rsvpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Obrigado por confirmar sua presença!");
  });
});
