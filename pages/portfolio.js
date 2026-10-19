const trabajos = [
  {
    titulo: "Proyecto web",
    descripcion: "Diseño y desarrollo de una experiencia web responsive.",
    url: "#"
  },
  {
    titulo: "Diseño de producto",
    descripcion: "Desarrollo de producto desde el concepto hasta su fabricación.",
    url: "#"
  },
  {
    titulo: "Sistema digital",
    descripcion: "Diseño de una solución digital para optimizar procesos.",
    url: "#"
  }
];

const lista = document.querySelector(".trabajos__lista");

trabajos.forEach(function (trabajo) {
  const card = document.createElement("article");

  card.className = "trabajo-card";

  card.innerHTML = `
    <div class="trabajo-card__imagen"></div>
    <h2>${trabajo.titulo}</h2>
    <p>${trabajo.descripcion}</p>
    <a href="${trabajo.url}">Ver más</a>
  `;

  lista.appendChild(card);
});