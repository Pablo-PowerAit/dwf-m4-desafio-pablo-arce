function crearHeader() {
  const header = document.querySelector(".header-component");

  header.innerHTML = `
    <div class="header__contenido">
      <a href="./index.html" class="header__logo">PA</a>

      <nav class="header__nav">
        <a href="./portfolio.html">Portfolio</a>
        <a href="./servicios.html">Servicios</a>
        <a href="./contacto.html">Contacto</a>
      </nav>

      <button class="header__menu">☰</button>
    </div>
  `;

  const boton = header.querySelector(".header__menu");
  const nav = header.querySelector(".header__nav");

  boton.addEventListener("click", function () {
    nav.classList.toggle("header__nav--visible");
  });
}

crearHeader();