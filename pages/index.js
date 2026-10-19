const servicios = [
  {
    titulo: "Desarrollo web",
    descripcion: "Diseño y desarrollo de sitios web adaptados a distintos dispositivos."
  },
  {
    titulo: "Diseño de producto",
    descripcion: "Desarrollo de productos combinando funcionalidad, estética y fabricación."
  },
  {
    titulo: "Automatizaciones",
    descripcion: "Implementación de herramientas para optimizar procesos y tareas."
  }
];

const lista = document.querySelector(".servicios__lista");

servicios.forEach(function (servicio) {
  const card = document.createElement("article");

  card.className = "servicio-card";

  card.innerHTML = `
    <div class="servicio-card__imagen"></div>
    <h3>${servicio.titulo}</h3>
    <p>${servicio.descripcion}</p>
  `;

  lista.appendChild(card);
});