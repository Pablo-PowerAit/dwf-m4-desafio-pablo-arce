const servicios = [
  {
    titulo: "Desarrollo web",
    descripcion: "Diseño y desarrollo de sitios web responsive.",
    url: "#"
  },
  {
    titulo: "Diseño de producto",
    descripcion: "Diseño de productos funcionales orientados a fabricación.",
    url: "#"
  },
  {
    titulo: "Automatizaciones",
    descripcion: "Soluciones digitales para automatizar procesos y tareas.",
    url: "#"
  }
];

const lista = document.querySelector(".trabajos__lista");

servicios.forEach(function (servicio) {
  const card = document.createElement("article");

  card.className = "trabajo-card";

  card.innerHTML = `
    <div class="trabajo-card__imagen"></div>
    <h2>${servicio.titulo}</h2>
    <p>${servicio.descripcion}</p>
    <a href="${servicio.url}">Ver más</a>
  `;

  lista.appendChild(card);
});