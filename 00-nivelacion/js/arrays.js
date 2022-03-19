// const numeros = [1, 2, 3, 4];

// document.write('<ul>');
// for (numero in numeros){
//     document.write('<li>');
//     document.write(numero);
//     document.write('</li>');
// }
// document.write('</ul>');

// document.write('<ul>');
// numeros.map((numero, i) => 
//     document.write('<li>'+ numero +'</li>'));
// document.write('</ul>');

// Array Destructuring
//const usuarios = ['Gowther', 'Wolfy', 'Mae', 'Victor'];
const [, , usuario3] = ['Gowther', 'Wolfy', 'Mae', 'Victor'];
document.write(usuario3)