function crearFooter() {
  const footer = document.querySelector(".footer-component");

  footer.innerHTML = `
    <div class="footer__contenido">
      <div class="footer__logo">PA</div>

      <div class="footer__links">
        <a href="./index.html">Home</a>
        <a href="./portfolio.html">Portfolio</a>
        <a href="./servicios.html">Servicios</a>
        <a href="./contacto.html">Contacto</a>
      </div>

      <div class="footer__redes">
        <span>LinkedIn</span>
        <span>GitHub</span>
      </div>

      <p class="footer__copy">© 2026 - Portfolio personal</p>
    </div>
  `;
}

crearFooter();