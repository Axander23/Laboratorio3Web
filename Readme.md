# Proyecto Web: Revista Digital

Este proyecto es una **revista digital** desarrollada como práctica de laboratorio. Permite a los usuarios consultar noticias, tendencias, información de contacto y gestionar su perfil, todo con una interfaz moderna y validaciones amigables.

---

## Propósito

El objetivo es ofrecer una plataforma web sencilla y funcional donde los usuarios puedan:
- Leer noticias y tendencias tecnológicas.
- Consultar definiciones útiles (API, SEO, etc.).
- Contactar al equipo mediante un formulario.
- Configurar su perfil y cambiar su contraseña con formularios validados.

---

## Tecnologías usadas

- **HTML5** y **CSS3** (estructura y estilos)
- **Bootstrap 5** (componentes y alertas visuales)
- **JavaScript** (validación de formularios, envío de datos, alertas dinámicas)
- **Fetch API** (simulación de envío de formularios a una API)
- **LocalStorage** (almacenamiento de respuestas)
- **Estructura modular**: archivos separados para vistas, estilos y scripts

---

## ¿Cómo ejecutarlo?

1. **Clona o descarga** este repositorio.
2. Abre `index.html` en tu navegador favorito.
3. Navega por las secciones usando el menú superior.
4. Prueba los formularios de contacto y configuración de perfil.  
   - Los formularios muestran alertas Bootstrap flotantes al enviar o al detectar errores.
   - Los datos se simulan con una API de prueba y se almacenan en LocalStorage.

---

##  Notas

- El proyecto utiliza Bootstrap desde CDN, por lo que necesitas conexión a internet para los estilos y componentes.
- Las alertas se muestran como notificaciones flotantes y se cierran automáticamente.
- El formulario de perfil solo acepta imágenes como foto de perfil.
- El envío de formularios está simulado; no se almacenan datos reales en un servidor.

---