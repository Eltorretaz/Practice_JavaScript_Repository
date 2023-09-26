//window.setTimeOut() funcion despues de cierto timepo

/* const saludo = () => {
    console.log('hola')
}

let id;
const iniciar = () => {
    console.log('iniciando timer')
    id = setTimeout(saludo, 2000);
};

const parar = () => {
    console.log('parando timer');
    clearTimeout(id);
}; */

//window.setInterval() nos permite ejecutar funcion cada cierto tiempo

let cuenta = 0;
let id;

const iniciar = () => {

    id = setInterval(() => {
        console.log(cuenta);
        cuenta++;
    }, 1000);
}

const parar = () => {
    console.log('paramos la cuenta');
    clearInterval(id);;
}