const crearCookie = () => {
    //document.cookie = 'nombre=Carlos';
    document.cookie = 'nombre=Carlos; expires=1 Oct 2023 01:00:00 UTC';
};

const iniciarSeccion = () => {
    const usuario = prompt('Usuario:');
    document.cookie = `nombre=${usuario}; expires=1 Oct 2023 01:00:00 UTC`;
    alert('Seccion iniciada');
};

/* console.log(document.cookie); */

//librerias y packetes
let usuario;

const cookies = document.cookie.split(';');

cookies.forEach((cookie) => {
    const propiedad = cookie.split('=')[0];
    if(propiedad === 'nombre'){
        usuario = cookie.split('=')[1];
    }
});

console.log(usuario);

if(usuario){
    console.log('Hola ' + usuario);
}else {
    console.log('por favor inicia seccion');
};

const cerrarSeccion = () => {
    document.cookie = 'nombre=; expires=1 Jan 2023 01:00:00 UTC;'
}