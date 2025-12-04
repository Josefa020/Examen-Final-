
const datosProyectos = [
  {
    "id": "2025",
    "titulo": "Noctu",
    "subtitulo": "Industrial",
    "enlace": "proyecto-1.html",
    "imagen_url": "assets/proyecto1.webp"
  },
  {
    "id": "2025",
    "titulo": "Alicate Universal",
    "subtitulo": "Ergonomía",
    "enlace": "proyecto-2.html",
    "imagen_url": "assets/proyecto2.webp"
  },
  {
    "id": "2025",
    "titulo": "Co-florecer",
    "subtitulo": "Estratégico",
    "enlace": "proyecto-3.html",
    "imagen_url": "assets/proyecto3.webp"
  },
  {
    "id": "2025",
    "titulo": "Chile en 5 pilares",
    "subtitulo": "Estratégico",
    "enlace": "proyecto-4.html",
    "imagen_url": "assets/proyecto4.webp"
  },
  {
    "id": "2024",
    "titulo": "Akutun",
    "subtitulo": "Souvenir",
    "enlace": "proyecto-5.html",
    "imagen_url": "assets/proyecto5.webp"
  },
  {
    "id": "2025",
    "titulo": "El cuerpo paciente",
    "subtitulo": "Crítico",
    "enlace": "proyecto-6.html",
    "imagen_url": "assets/proyecto6.webp"
  }
];

document.addEventListener('DOMContentLoaded', () => {
    
    const contenedor = document.getElementById('proyectos-contenedor');
    
    // Aquí usamos la variable local, ya no necesitamos fetch().
    datosProyectos.forEach(proyecto => {
        
        const proyectoLink = document.createElement('a');
        proyectoLink.href = proyecto.enlace;
        proyectoLink.className = 'proyecto-item';
        proyectoLink.style.backgroundImage = `url('${proyecto.imagen_url}')`;
        
        proyectoLink.innerHTML = `
            <div class="overlay">
                <h3>${proyecto.id.toUpperCase()}: ${proyecto.titulo}</h3>
                <p class="etiqueta">${proyecto.subtitulo}</p>
            </div>
        `;
        
        contenedor.appendChild(proyectoLink);
    });

});
