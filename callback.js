const obtenerPostDelUsuario = (usuario, callback) => {
    console.log(`Obteniendo post de ${usuario} ...`);

    setTimeout(() => {
        let post = ['post1', 'post2', 'post3'];
        callback(post);
    }, 2000);
}

obtenerPostDelUsuario('Pedro', (post) => {
    console.log(post);
});