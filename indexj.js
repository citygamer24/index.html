// Esperar 2 segundos antes de comenzar la animación
window.onload = function() {
    setTimeout(function() {
        // Deslizar la pantalla de bienvenida
        document.getElementById("intro-screen").classList.add("slide-out");

        // Mostrar el contenido principal
        setTimeout(function() {
            document.getElementById("main-content").classList.add("show");
        }, 1000);  // Tiempo de la animación de la pantalla de bienvenida
    }, 2000);  // Tiempo que permanece visible la pantalla de bienvenida
};
