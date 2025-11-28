{"id":"52103","variant":"standard","title":"JS universal para proyectos"}
/* ============================================
   JS UNIVERSAL PARA TODOS LOS PROYECTOS
   ============================================ */

const PROYECTOS_DETALLE = {
    "1": {
        titulo: "Noctu",
        subtitulo: "Industrial",
        descripcion: [
            "Aquí puedes describir el contexto, motivación o intención del proyecto.",
            "Incluye tu proceso, exploración, prototipos, decisiones y enfoque.",
            "Puedes cerrar con una reflexión sobre aprendizajes y resultados."
        ],
        banner: "assets/proyecto1.jpg",
        imagenes: [
            "assets/proyecto1-1.jpg",
            "assets/proyecto1-2.jpg",
            "assets/proyecto1-3.jpg"
        ]
    },

    "2": {
        titulo: "Producto Sustentable",
        subtitulo: "Materialidad + Sostenibilidad",
        descripcion: [
            "Descripción de introducción del proyecto 2.",
            "Proceso, exploración, referentes y decisiones.",
            "Reflexión final."
        ],
        banner: "assets/proyecto2.jpg",
        imagenes: [
            "assets/proyecto2-1.jpg",
            "assets/proyecto2-2.jpg",
            "assets/proyecto2-3.jpg"
        ]
    },

    "3": {
        titulo: "UX/UI Aplicación",
        subtitulo: "Digital + UX",
        descripcion: [
            "Descripción introductoria del proyecto 3.",
            "Proceso de diseño, wireframes, prototipos y decisiones.",
            "Reflexión final del proyecto."
        ],
        banner: "assets/proyecto3.jpg",
        imagenes: [
            "assets/proyecto3-1.jpg",
            "assets/proyecto3-2.jpg",
            "assets/proyecto3-3.jpg"
        ]
    }
};


/* ============================================
   CARGA DE PROYECTO SEGÚN URL
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const proyectoID = params.get("id");

    const data = PROYECTOS_DETALLE[proyectoID];

    if (!data) {
        document.body.innerHTML = "<h1>Proyecto no encontrado.</h1>";
        return;
    }

    /* Insertar textos */
    document.getElementById("titulo-proyecto").textContent = data.titulo;
    document.getElementById("subtitulo-proyecto").textContent = data.subtitulo;

    /* Insertar banner */
    document.getElementById("banner-proyecto").src = data.banner;

    /* Insertar párrafos */
    const textoCont = document.getElementById("texto-proyecto");
    textoCont.innerHTML = "";
    data.descripcion.forEach(p => {
        const pEl = document.createElement("p");
        pEl.textContent = p;
        textoCont.appendChild(pEl);
    });

    /* Insertar imágenes internas */
    const contenedorImagenes = document.getElementById("imagenes-proyecto");
    contenedorImagenes.innerHTML = "";
    data.imagenes.forEach(img => {
        const el = document.createElement("img");
        el.src = img;
        el.classList.add("imagen-proyecto-full");
        contenedorImagenes.appendChild(el);
    });
});
