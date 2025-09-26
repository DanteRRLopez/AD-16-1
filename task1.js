/*
Task 1.
Modify the style of the paragraph text through JavaScript code. By clicking on the button, the font, font size, and colour of the paragraph text should change.

*/

const parrafo = document.querySelector('p'); // Selecciona el párrafo.
const button = document.querySelector('button'); // Selecciona el botón.
console.log('p:', parrafo); 
// 'p:' Identificar en la consola que es el párrafo.
console.log('button:', button); 
// 'button:' Identificar en la consola que es el botón.

button.addEventListener('click', () => {
    parrafo.style.fontFamily = 'Verdana, Geneva, Tahoma,sans-serif'; // Cambia la fuente del párrafo.
    parrafo.style.fontSize = '50px'; // Cambia el tamaño de fuente del párrafo.
    parrafo.style.color = '#26aa29ff'; // Cambia el color del texto del párrafo.
});
