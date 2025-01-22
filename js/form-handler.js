document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    fetch('https://script.google.com/macros/s/AKfycby1iH5yW9IiQVLzjJAquZpyh9My8vP1QQgFsa8m7nGGMrRLvdq35iDBvR5X7taROiQmGQ/exec', {
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
