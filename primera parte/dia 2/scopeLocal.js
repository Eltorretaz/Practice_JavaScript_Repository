var obtenerNumeroLetra = (nombre) => {
    var numero = nombre.length;

    console.log(`${nombre} tiene ${numero} de letras`)

    var funcionAnidada = () => {
        console.log(numero);
    }
    funcionAnidada();
};

obtenerNumeroLetra('Armando');
