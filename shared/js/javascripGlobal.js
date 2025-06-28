
//JavaScript para el botón de chat

function animacionChat() {
    const chatButton = document.querySelector('.chat-button');
    if (chatButton) {
        chatButton.classList.add('pulsating');
        setTimeout(() => {
            chatButton.classList.remove('pulsating');
            chatButton.classList.add('regreso');
            setTimeout(() => {
                chatButton.classList.remove('regreso');
            }, 500);
        }, 5000);
    }
}



function enviarFormularioConFetch(form, storageKey = 'formResponse') {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validación de Bootstrap
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }



        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const json = await response.json();
                localStorage.setItem(storageKey, JSON.stringify(json));
                mostrarAlertaBootstrap('¡Formulario enviado correctamente!', 'success'); 

                console.log('Respuesta del servidor:', json);
                form.reset(); // Limpiar el formulario después de enviar
                form.classList.remove('was-validated'); // Quita los mensajes de validación visual
            } else {
                mostrarAlertaBootstrap('Error al enviar el formulario', 'danger');
            }
        } catch (error) {
             mostrarAlertaBootstrap('Error de red o servidor, revisa tu internet', 'danger');
        }
    });
}



function mostrarAlertaBootstrap(mensaje, tipo = 'success') {
    const alertContainer = document.getElementById('alert-container');
    if (!alertContainer) return;

    alertContainer.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
      ${mensaje}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;

     // Quitar la alerta automáticamente después de "2000" milisegundos
    setTimeout(() => {
        const alerta = alertContainer.querySelector('.alert');
        if (alerta) {
            alerta.classList.remove('show');
            alerta.classList.add('hide');
            setTimeout(() => {
                alertContainer.innerHTML = '';
            }, 500); // Espera la animación fade
        }
    }, 2000);
}




//Recibe todos los formularios con la clase needs-validation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form.needs-validation').forEach((form, idx) => {
        // Usa un storageKey distinto para cada formulario 
        const storageKey = form.id ? form.id + 'Response' : 'formResponse' + idx;
        enviarFormularioConFetch(form, storageKey);
    });
});

// Limpia los mensajes de validación al resetear el formulario
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form.needs-validation').forEach((form) => {
        form.addEventListener('reset', () => {
            form.classList.remove('was-validated');
        });
    });
});






// Bootstrap custom validation 
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
