function crearContacto() {
  const contenedor = document.querySelector(".contact-component");

  if (!contenedor) {
    return;
  }

  contenedor.innerHTML = `
    <section class="contacto">
      <div class="contacto__contenido">
        <h2>Escribime</h2>

        <form class="contacto__form">
          <div class="contacto__campos">
            <label>
              Nombre
              <input type="text" name="nombre" required>
            </label>

            <label>
              Email
              <input type="email" name="email" required>
            </label>
          </div>

          <label>
            Mensaje
            <textarea name="mensaje" required></textarea>
          </label>

          <button type="submit">Enviar ➤</button>
        </form>
      </div>
    </section>
  `;

  const form = contenedor.querySelector(".contacto__form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const nombre = formData.get("nombre");
    const email = formData.get("email");
    const mensaje = formData.get("mensaje");

    const texto = `
Nombre: ${nombre}
Email: ${email}
Mensaje: ${mensaje}
    `;

    fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        to: "pabloisaiarce@gmail.com",
        message: texto
      })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function () {
        alert("Mensaje enviado");
        form.reset();
      })
      .catch(function () {
        alert("No se pudo enviar el mensaje");
      });
  });
}

crearContacto();