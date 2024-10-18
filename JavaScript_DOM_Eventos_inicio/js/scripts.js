// querySelector -> retorna 0 o hasta un elemento que concuerde con el selector que se este escribiendo.

const textoHeading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo Heading';
console.log(textoHeading);

// querySelectorAll -> retorna de 0 a todos los que concuerden con el selector que se este escribiendo.

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

// Algunas operaciones...

// Cambiar el texto
enlaces[0].textContent = 'Nuevo Texto enlace';

// Cambiar el enlace del primer enlace
enlaces[0].href = 'https://google.com';

// Agregar una clase...
enlaces[0].classList.add('nueva-clase');

// Eliminar una clase...
// enlaces[0].classList.remove('navegacion__enlace');




// getElementById




