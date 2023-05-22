function validarFormulario() {
    var nombre = document.getElementsByName('nombre')[0].value;
    var mail = document.getElementsByName('mail')[0].value;
    var telefono =document.getElementsByName('telefono')[0].value;
    var pais = document.getElementsByName('pais')[0].value;
    var mensaje =document.getElementsByName('mensaje')[0].value;


    var validacion = document.getElementById('validacion');

    if (nombre === '' || mail === '') {
      console.log('Por favor, complete todos los campos.');
      validacion.innerHTML="Debe completar todos los campos";
    } else {
      console.log("Datos ingresados listos para enviar");
      console.log("Nombre: "+ nombre);
      console.log("eMail: "+ mail);
      console.log("Pais: "+ pais);
      console.log("Telefono: "+ telefono);
      console.log("Mensaje: "+ mensaje);
      validacion.innerHTML="Formulario completado correctamente. Puede ver en la consola los datos a enviar.";
    }
  }

  var dropdownPais = document.getElementById('pais');

  var paises = [
  "Argentina",
  "Bolivia",
  "Brasil",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Ecuador",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "México",
  "Nicaragua",
  "Panamá",
  "Paraguay",
  "Perú",
  "Puerto Rico",
  "Rep Dominicana",
  "Uruguay",
  "Venezuela"
];
for (let i = 0; i < paises.length; i++) {
    const p = paises[i];
    var opcion = document.createElement('option');
    opcion.value = p;
    opcion.text = p;
    dropdownPais.appendChild(opcion);
    
}