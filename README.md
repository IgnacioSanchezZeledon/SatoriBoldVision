# Satori — Sitio web

Sitio estático de **Satori**, consultora costarricense especializada en
licitaciones y contratación con el Estado.

## Estructura

```
├── index.html         Página de inicio
├── servicios.html     Página de servicios
├── contacto.html      Página de contacto (con formulario demo)
├── styles.css         Hoja de estilos compartida
├── script.js          JS compartido (parciales, menú móvil, animaciones, form)
├── partials/
│   ├── header.html    Header inyectado en las 3 páginas
│   └── footer.html    Footer inyectado en las 3 páginas
└── assets/            Logos y fotos
```

## Stack

HTML + CSS + JavaScript vanilla, sin paso de *build*. Tipografías desde
Google Fonts (*Fraunces* + *Hanken Grotesk*). Paleta 60/30/10:

- 60 % Beige arena `#E9E3DA`
- 30 % Azul profundo `#1F3A5F`
- 10 % Terracota `#C65D4E`

## Cómo probarlo en local

El header y el footer se cargan con `fetch` desde `partials/`, por lo que
hay que servir el sitio (no abrirlo con `file://`). Cualquier servidor
estático sirve:

```bash
# Opción 1: Python
python3 -m http.server 8000

# Opción 2: Node
npx serve .
```

Y abrir `http://localhost:8000`.

## Despliegue

Subir todos los archivos a cualquier hosting estático (Netlify, Vercel,
GitHub Pages, Cloudflare Pages, etc.). No requiere compilación.
