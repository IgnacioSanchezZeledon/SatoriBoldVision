# Prompt para Claude Code — Sitio web de Satori

> Pega esto como primer mensaje en Claude Code, dentro de una carpeta de proyecto
> donde ya hayas colocado los recursos (ver sección "Recursos").

---

Quiero que construyas el sitio web de **Satori**, una consultora costarricense
especializada en **licitaciones y contratación con el Estado**.

Prioridad: un sitio **sencillo y elegante**. Quiero **3 páginas** (Inicio,
Servicios y Contacto), no más. Nada recargado: poca pero buena información, mucha
jerarquía visual y que en 30 segundos se entienda qué hacemos y cómo contactarnos.

## Stack
- HTML, CSS y JavaScript **puro (vanilla)**, sin frameworks ni paso de *build*.
  El sitio es estático (marketing + un formulario), así que vanilla es lo correcto:
  más rápido, mejor SEO y se publica en cualquier hosting sin compilar.
- Estructura de archivos:
  - `index.html`, `servicios.html`, `contacto.html`
  - `styles.css` (una sola hoja compartida por las 3 páginas)
  - `script.js` (un solo archivo compartido)
  - `assets/` (imágenes, ya incluidas)
- **Evita repetir código:** el header y el footer son idénticos en las 3 páginas.
  Mantenlos consistentes y, si puedes, inyéctalos con un pequeño script o
  `fetch` de un parcial HTML para no duplicar; si lo dejas copiado en cada página,
  que sea exactamente igual. Marca el enlace activo del menú según la página.
- Tipografías desde Google Fonts. Código limpio, comentado en español y
  responsive (móvil primero).

## Recursos (ya están en la carpeta `assets/`)
- `assets/logo-blanco.png` → logo en blanco, fondo transparente. **Úsalo solo sobre fondos azul profundo o terracota.**
- `assets/logo-azul.png` → logo en azul profundo, fondo transparente. **Úsalo sobre fondos beige/claros** (header, footer).
- `assets/vanessa-retrato.jpg` → retrato de Vanessa Zeledón (blusa roja, sonriendo). Para la sección "Nosotros" en Contacto.
- `assets/vanessa-completa.jpg` → foto de cuerpo completo (traje negro). Para la imagen lateral del hero en Inicio.

No generes imágenes ni placeholders: usa estos archivos reales.

## Identidad visual
Regla de color **60 / 30 / 10**:
- **60% Beige arena `#E9E3DA`** → color de fondo dominante.
- **30% Azul profundo `#1F3A5F`** → header/footer, bloques destacados, títulos y franjas oscuras.
- **10% Terracota `#C65D4E`** → solo acentos: botones, enlaces, subrayados, detalles. Que sea el toque que resalta, no la base.

Define estos colores como variables CSS y respeta la proporción (el beige manda).

**Tipografía:** el logo usa una serif clásica y elegante. Acompáñala con una serif
refinada para los títulos (por ejemplo *Fraunces* o *Cormorant Garamond*) y una
sans humanista y limpia para el cuerpo (por ejemplo *Hanken Grotesk* o similar).
Estética **editorial, sobria y con aire** (mucho espacio en blanco). Nada
recargado. Animaciones sutiles al hacer scroll, sin exagerar.

## Header y footer (iguales en las 3 páginas)
- **Header fijo:** logo (`logo-azul.png`) a la izquierda; navegación con enlaces a
  las páginas: **Inicio · Servicios · Contacto**; y un botón terracota
  "Agende su cita" que lleva a `contacto.html`. En móvil, menú hamburguesa.
- **Footer:** franja azul profundo con `logo-blanco.png`, datos de contacto
  (teléfono **+506 8704-0004**, correo **info@satoriboldvision.com**,
  **San José, Costa Rica**), redes (Facebook `facebook.com/satoribv`,
  LinkedIn `linkedin.com/company/satoriboldvision`) y "© 2026 Satori".

## Página 1 — Inicio (`index.html`)
1. **Hero** (fondo beige):
   - Titular: **"Gane licitaciones. Conviértase en proveedor del Estado."**
   - Subtítulo: "Acompañamos a empresas costarricenses a competir y vender al sector
     público —desde la inscripción en SICOP hasta la ejecución del contrato."
   - Botón terracota "Agende su cita" (→ `contacto.html`) + enlace "Ver servicios" (→ `servicios.html`).
   - A la derecha, la foto `vanessa-completa.jpg` integrada con elegancia (recortada
     o sobre una figura/marco de fondo azul profundo, lo que se vea mejor).
2. **Resumen de servicios** — 3 tarjetas breves que enlazan a `servicios.html`:
   - **Acceso al mercado público** — inscripción y gestión en SICOP.
   - **Ofertas que ganan** — preparación y presentación de ofertas conforme al cartel.
   - **Defensa y acompañamiento** — recursos, refrendo y ejecución del contrato.
3. **Proceso (breve)** — franja **azul profundo** con 4 pasos numerados, una línea
   cada uno: 1) Diagnóstico · 2) Inscripción y oportunidades · 3) Oferta y
   presentación · 4) Adjudicación y ejecución.
4. **CTA final** — beige, frase "Hablemos de su próxima licitación." y botón
   terracota a `contacto.html`.

## Página 2 — Servicios (`servicios.html`)
- Encabezado de página corto (título + una línea de intro).
- Los **3 pilares** desarrollados con un poco más de detalle (un párrafo + 3 viñetas
  cada uno):
  - **Acceso al mercado público.** Inscripción y gestión en SICOP, idoneidad y
    documentación al día para participar sin tropiezos.
  - **Ofertas que ganan.** Preparación del expediente, estrategia de precio
    competitiva y rentable, y manejo de aclaraciones y subsanaciones.
  - **Defensa y acompañamiento.** Objeciones al cartel, recursos de revocatoria y
    apelación, refrendo y acompañamiento durante la ejecución del contrato.
- **El proceso completo** (los mismos 4 pasos del Inicio, aquí con una descripción
  un poco más amplia por paso).
- CTA al final hacia `contacto.html`.

## Página 3 — Contacto (`contacto.html`)
1. **Nosotros / Vanessa** (fondo beige): foto `vanessa-retrato.jpg` a un lado y al otro:
   - **Vanessa Zeledón** — *CEO y Fundadora*.
   - "Fundó Satori con una convicción: que cualquier empresa bien preparada puede
     competir y ganar en las compras del Estado. Combina experiencia empresarial y
     dominio del marco de contratación pública costarricense (Ley N.° 9986), con un
     acompañamiento cercano y orientado a la rentabilidad del negocio."
2. **Contacto** (puede ir sobre franja azul profundo con `logo-blanco.png`):
   - Frase: "Hablemos de su próxima licitación."
   - Datos: teléfono/WhatsApp **+506 8704-0004**, correo **info@satoriboldvision.com**,
     **San José, Costa Rica**.
   - Botón terracota a WhatsApp: `https://wa.me/50687040004`.
   - Formulario simple (nombre, correo, mensaje). De momento solo **demo en
     front-end**: al enviar, muestra un mensaje de confirmación, sin backend.

## Qué NO hacer
- **No inventes cifras ni estadísticas** de la empresa (clientes, años, licitaciones
  ganadas). Si quieres una franja de credibilidad, usa solo hechos del marco legal
  (SICOP, Ley N.° 9986, los tres procedimientos: licitación mayor, menor y reducida).
- No agregues más páginas ni secciones de relleno. Solo estas 3.
- No uses morados, gradientes genéricos ni la paleta fuera de la regla 60/30/10.
- No abuses de animaciones ni de negritas.

Cuando termines, déjame ver `index.html` en el navegador y luego iteramos sobre
espaciado, tamaños y microcopys.
