// Número de WhatsApp (código de país + área + número, sin signos)
var WHATSAPP = '5491100000000';

document.addEventListener('DOMContentLoaded', function () {
  // Animaciones al hacer scroll (librería AOS)
  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out' });
  }

  // Formulario de pedido: arma el mensaje y abre WhatsApp
  var formulario = document.getElementById('formulario-pedido');
  if (!formulario) {
    return;
  }

  var select = document.getElementById('producto');
  var preseleccion = new URLSearchParams(window.location.search).get('producto');
  if (preseleccion) {
    Array.prototype.forEach.call(select.options, function (opcion) {
      if (opcion.value === preseleccion) {
        select.value = preseleccion;
      }
    });
  }

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value.trim();
    var cantidad = document.getElementById('cantidad').value;
    var producto = select.options[select.selectedIndex].text;
    var mensaje = document.getElementById('mensaje').value.trim();

    var texto = 'Hola! Soy ' + nombre + '. Quiero pedir ' + cantidad + ' x ' + producto + '.';
    if (mensaje) {
      texto += ' ' + mensaje;
    }
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(texto), '_blank', 'noopener');
  });
});
