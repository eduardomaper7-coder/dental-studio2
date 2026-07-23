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

TRADUCCIÓN
-----------
El selector con banderas usa el traductor clásico de Google dentro de la propia página.
Al elegir un idioma se guarda la preferencia, se recarga la misma URL y aparece la barra
superior tradicional de Google. La función requiere que la web esté publicada mediante
HTTP o HTTPS; no funciona correctamente abriendo los archivos directamente con file://.

