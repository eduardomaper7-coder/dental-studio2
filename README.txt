DENTAL STUDIO - REDISEÑO

Estructura sencilla:
- Archivos HTML en la raíz.
- assets/css/styles.css: todos los estilos.
- assets/js/site.js: menú móvil, slider automático, acordeones, comparador, animaciones, selector de idiomas y formulario visual.
- assets/img/: imágenes y QR de reseñas.

El navbar y el footer están incluidos directamente en cada HTML.
El botón de WhatsApp usa Font Awesome mediante CDN.
El selector de idiomas usa banderas y abre la traducción del sitio al publicarlo por HTTP/HTTPS.
El formulario es visual: para recibir correos debe conectarse a un backend o servicio de formularios.

Prueba local:
python -m http.server 8080
Abrir http://localhost:8080


ACTUALIZACIÓN DE ANIMACIONES
- Logo de alta resolución y mayor tamaño en la navegación.
- Favicon, Apple Touch Icon y web manifest incluidos.
- Contadores 10+ y 9+ animados al entrar en pantalla.
- Animaciones escalonadas, movimiento del hero, carrusel, tarjetas, imágenes y barra de progreso.
- Se respeta prefers-reduced-motion para accesibilidad.


Último ajuste: las tarjetas destacadas de Inicio son enlaces completos. La imagen, icono, título, descripción y texto “Descubrir” llevan a la especialidad correspondiente.


TRADUCCIÓN GOOGLE CLÁSICA (BARRA INFERIOR)
- El selector oficial de Google aparece fijo en la parte inferior.
- Las banderas controlan el selector nativo dentro de la página.
- No se crean ni abren direcciones translate.goog.
- No se comprueba el protocolo HTTP/HTTPS.
- Español limpia la traducción y recarga exactamente la misma URL.


ACTUALIZACIÓN DEL SELECTOR DE IDIOMAS
- La barra inferior clásica se mantiene.
- El selector visible usa banderas, nombre completo e indicador de idioma activo.
- El selector nativo de Google queda oculto y se utiliza únicamente como motor.
- La traducción se realiza en la misma URL, sin dominios translate.goog.
