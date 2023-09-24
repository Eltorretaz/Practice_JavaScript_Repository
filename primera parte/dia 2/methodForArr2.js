//.indexOf() obtenemos el primer index de un elemento // sino hay elemento nos regresa -1
const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
/* console.log(nombres.indexOf('Rafael')); */

//.lastIndexOf() ibtenemos el ultimo index de un elemento
/* console.log(nombres.lastIndexOf('Rafael')); */

//.forEach() ejecutar una funcion por cada elemento
//1er parameter: elementos
//2do arameter: index
/* nombres.forEach((nombre, index) => {
    console.log(`Hola ${nombre} y esta en el puesto ${index}`);
}); */

//.find() nos permite recorrer un arreglo y vuelve el primer elemento que reornemos
/* const resultado = nombres.find((nombre) => {
    if(nombre[0] === 'Z'){
        return nombre;
    }
}) */

/* console.log(resultado); */

//.map() ejecutar funcion por cada elemento y crear un nuevo arreglo en base a los resultados
/* const nombresMayus = nombres.map((nombre) => nombre.toUpperCase());

console.log(nombresMayus); */

//.filter() ejecutar una funcion por cada elento y luego crear un arreglo en base a los resutados de esa funcion
const nombres4letras = nombres.filter((nombre) => {
    if(nombre.length === 4){
    return nombre
    }
});

console.log(nombres4letras);

//.includes() nos permite saber si el arreglo contiene un elemento especificado
console.log(nombres.includes('Carlos'));
console.log(nombres.includes('Andrew'));

//.every() ejecutar un consicional sobre cada elemento y nos devuelve true si todos los elementos cumplieron la condicion
/* const nombresValidos = nombres.every((nombre) => {
    if(typeof nombre === 'string'){
        return true;
    }else{
        return false;
    };
}); */

/* console.log(`?todos los elementos son ${nombresValidos}`); */

//.some() ejecutar un condicional sobre cada elemento y nos devuelve true si algun elemento cumplio la condicion
const nombresValidos = nombres.some((nombre) => {
    if(typeof nombre !== 'string'){
        return true;
    }else{
        return false;
    };
});
console.log(`?el arreglo es invalido ${nombresValidos}`);