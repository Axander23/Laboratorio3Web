# Documentación Técnica y Estructura de Carpetas

Este documento describe la **estructura de carpetas** del proyecto y justifica las principales **decisiones técnicas** tomadas durante el desarrollo de la revista digital.

---

##  Estructura de Carpetas

```
ProyectoLabs/
│
├── index.html
├── Readme.md
├── assets/
│   └── imagenes/
│       └── iconchat.png
├── docs/
│   └── Readme.md
├── shared/
│   ├── estilos/
│   │   └── globalStile.css
│   └── js/
│       └── javascripGlobal.js
├── views/
│   ├── config/
│   │   ├── configuracion.html
│   │   └── estilosConfiguracion.css
│   └── contact/
│       ├── contacto.html
│       └── estilosContacto.css
├── estilosIndex.css
```

---

##  Descripción de Carpetas

- **/views/**  
  Contiene las vistas principales del sitio, separadas por funcionalidad.  
  - `/config/`: Formularios y páginas de configuración de usuario.
  - `/contact/`: Formulario de contacto.

- **/shared/**  
  Recursos reutilizables en todo el proyecto.
  - `/estilos/`: Hojas de estilo CSS globales.
  - `/js/`: Scripts JavaScript globales para validaciones, alertas y lógica común.

- **/assets/**  
  Archivos estáticos como imágenes, íconos y otros recursos multimedia.

- **/docs/**  
  Documentación técnica y archivos de apoyo para desarrolladores.

---

## 🛠️ Decisiones Técnicas Clave

- **Separación de vistas y recursos compartidos:**  
  Se optó por dividir las vistas (`/views/`) de los recursos compartidos (`/shared/`) para facilitar el mantenimiento y la escalabilidad. Así, los estilos y scripts pueden ser reutilizados en diferentes páginas sin duplicación.

- **Uso de Bootstrap 5:**  
  Se eligió Bootstrap para agilizar el desarrollo de la interfaz, aprovechar componentes responsivos y mejorar la experiencia de usuario con alertas y validaciones visuales.

- **Validación y UX amigable:**  
  Los formularios usan validación nativa de HTML5 y feedback visual de Bootstrap, mostrando alertas flotantes para mejorar la interacción y claridad ante errores o éxitos.

- **Simulación de backend con Fetch API:**  
  Para simplificar el desarrollo y pruebas, el envío de formularios se simula usando la API pública de prueba `jsonplaceholder.typicode.com`. Esto permite validar la lógica de frontend sin requerir un servidor real.

- **Almacenamiento temporal con LocalStorage:**  
  Las respuestas de los formularios se guardan en LocalStorage para simular persistencia y facilitar pruebas de usuario.

- **Estructura modular:**  
  Cada funcionalidad (contacto, configuración, etc.) tiene su propio archivo HTML, lo que facilita la navegación y el desarrollo incremental 

---
