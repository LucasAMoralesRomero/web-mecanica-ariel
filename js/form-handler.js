document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    fetch('https://script.google.com/macros/s/AKfycbwWafzniUPSOsx0TU1QYbvpCOLq4AgvoWSSFxa1JmX5vEc2ntV_SKDIYV3BMFBkiopxVQ/exec', {
        method: "POST",
        body: JSON.stringify({
            nombre: formData.get('nombre'),
            telefono: formData.get('telefono'),
            mensaje: formData.get('mensaje')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              alert('Mensaje enviado, gracias por contactarse con nosotros, a la brevedad lo contactaremos.');
              document.getElementById('contactForm').reset();
          } else {
              alert('Error: ' + data.message);
          }
      }).catch(error => {
          alert('Error al enviar el mensaje, por favor intente nuevamente.');
          console.error("Error de conexión:", error);
      });
});
