const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = false;

        if(exito){
            resolve('la operacion goood');
        }else {
            reject('la operacion me mame');
        }
    }, 2000);
});

promesa.then((mensaje) => {
    alert(mensaje);
});

promesa.catch((mensaje) => {
    alert(mensaje)
})