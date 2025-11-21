
const barraFlotante = document.getElementById('barraFlotante'); 

// --- Lógica de la Barra Flotante (Scroll al final de la página) ---

window.addEventListener('scroll', function() {
    // Calcula la posición actual del scroll + la altura visible de la ventana
    const scrollPos = window.scrollY + window.innerHeight; 
    
    // Calcula la altura total del contenido del documento
    const totalHeight = document.body.offsetHeight;
    
    // Umbral de activación (50 píxeles antes de llegar al final)
    const umbral = 50; 
    
    // Comprueba si el usuario está cerca del final de la página
    if (scrollPos >= totalHeight - umbral) {
        barraFlotante.classList.add('visible');
    } else {
        barraFlotante.classList.remove('visible'); 
    }
});