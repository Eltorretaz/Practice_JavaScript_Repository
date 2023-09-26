'use strict';

/* //exports
export const nombre = 'Carlos';

export const obtenerPost = () => {
    return ['post1', 'post2', 'post3'];
}; */

//exports al final
const nombre = 'Carlos';

const obtenerPost = () => {
    return ['post1', 'post2', 'post3'];
};

//forma 1
/* export default () => {
    return {
        nombre: 'Carlos',
        correo: 'Correo@correo.com'
    };
}; */

//forma 2
const obtenerUsuario =  () => {
    return {
        nombre: 'Carlos',
        correo: 'Correo@correo.com'
    };
};

console.log('soy codigo que se corre desde el archivo empty exports');

const correo = 'correo';

//named imports

console.log(nombre);
console.log(obtenerPost());
console.log(obtenerUsuario());
console.log(correo);
