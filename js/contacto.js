  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // VALIDACIÓN SIMPLE
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Completá todos los campos.");
      return;
    }

    // MOSTRAR MENSAJE DE ÉXITO
    successMsg.classList.remove("d-none");

    // LIMPIAR FORMULARIO
    form.reset();
  });