// Puede ser redefinido, problema de seguridad
//function sumar(a, b){
//     return(a + b);
// }

// fat arrow function 
// const sumar = (a, b) =>{
//     return a + b;
// }

// forma resumida para una sola linea
// callback de la funcion flecha
const sumar = (a, b) => a + b;

const resultado = sumar(5,3);
document.write(resultado);