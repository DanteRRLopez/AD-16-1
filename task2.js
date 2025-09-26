/*
Task 2:
Write a JavaScript function to get the values of First and Last name from the form.
By clicking on the button, the names should be printed to the console.
*/

window.getFormvalue = function () {};

// Seleccionamos por 'name' (porque en el HTML no hay id para estos inputs)
const form = document.getElementById('form1') || document.querySelector('form');
const firstname = document.querySelector('input[name="fname"]');
const lastname  = document.querySelector('input[name="lname"]');

if (form && firstname && lastname) {
  // Funciona tanto al dar clic en "Submit" como al presionar Enter
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // no recargar la página
    console.log('Nombre:', firstname.value);
    console.log('Apellido:', lastname.value);
  });
}