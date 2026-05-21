/* =============================================================
   Satori — Script compartido
   - Inyecta header y footer desde parciales (evita duplicar HTML).
   - Activa el menú hamburguesa en móvil.
   - Marca el enlace activo según la página.
   - Animaciones sutiles al hacer scroll.
   - Demo del formulario de contacto (sin backend).
   ============================================================= */

(function () {
  "use strict";

  // ---------- 1. Inyección de parciales ----------
  // Cargamos header y footer desde archivos HTML para no duplicar
  // markup en las 3 páginas. Si el fetch falla (por ejemplo, al abrir
  // el archivo con file://), dejamos el HTML estático que ya esté en
  // la página como respaldo.
  async function inyectarParcial(selector, ruta) {
    const destino = document.querySelector(selector);
    if (!destino) return;
    try {
      const respuesta = await fetch(ruta);
      if (!respuesta.ok) throw new Error("No se pudo cargar " + ruta);
      destino.innerHTML = await respuesta.text();
    } catch (error) {
      console.warn("Parcial no inyectado (" + ruta + "):", error.message);
    }
  }

  async function montarLayout() {
    await Promise.all([
      inyectarParcial("[data-parcial='header']", "partials/header.html"),
      inyectarParcial("[data-parcial='footer']", "partials/footer.html"),
    ]);
    // Después de inyectar, configuramos lo que depende de esos nodos.
    configurarMenu();
    marcarEnlaceActivo();
  }

  // ---------- 2. Menú móvil ----------
  function configurarMenu() {
    const boton = document.querySelector(".btn-hamburguesa");
    const menu = document.querySelector(".nav-menu");
    if (!boton || !menu) return;

    boton.addEventListener("click", () => {
      const abierto = menu.classList.toggle("abierto");
      boton.classList.toggle("abierto", abierto);
      boton.setAttribute("aria-expanded", abierto ? "true" : "false");
    });

    // Cerrar al hacer click en un enlace del menú
    menu.querySelectorAll("a").forEach((enlace) => {
      enlace.addEventListener("click", () => {
        menu.classList.remove("abierto");
        boton.classList.remove("abierto");
        boton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- 3. Enlace activo ----------
  function marcarEnlaceActivo() {
    // Obtenemos el nombre del archivo actual (index.html por defecto).
    const ruta = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-menu a").forEach((enlace) => {
      const href = enlace.getAttribute("href");
      if (href === ruta) {
        enlace.classList.add("activo");
        enlace.setAttribute("aria-current", "page");
      }
    });
  }

  // ---------- 4. Animaciones al hacer scroll ----------
  function configurarAnimaciones() {
    const elementos = document.querySelectorAll(".aparece");
    if (!elementos.length || !("IntersectionObserver" in window)) {
      elementos.forEach((el) => el.classList.add("visible"));
      return;
    }
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elementos.forEach((el) => observador.observe(el));
  }

  // ---------- 5. Formulario (demo front-end) ----------
  function configurarFormulario() {
    const formulario = document.querySelector("#formulario-contacto");
    if (!formulario) return;
    const mensaje = formulario.querySelector(".form-mensaje");
    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();
      // Validación mínima nativa: si no es válido, dejamos que el
      // navegador muestre los mensajes por defecto.
      if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
      }
      const datos = new FormData(formulario);
      const nombre = (datos.get("nombre") || "").toString().trim();
      mensaje.textContent =
        "Gracias" + (nombre ? ", " + nombre : "") +
        ". Recibimos su mensaje y le responderemos en menos de 24 horas.";
      mensaje.classList.add("visible");
      formulario.reset();
    });
  }

  // ---------- Arranque ----------
  document.addEventListener("DOMContentLoaded", async () => {
    await montarLayout();
    configurarAnimaciones();
    configurarFormulario();
  });
})();
