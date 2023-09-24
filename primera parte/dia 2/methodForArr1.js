const colores = ['Rojo', 'verde', 'Azul'];

//.length() tamaño de arreglo
//console.log(colores.length);

//.toString() transformar un arreglo a una cadena
//document.body.innerHTML = colores.toString();

//.join() tranformar un arreglo a cadena de texto y separar cada elemento
//console.log(colores.join('-'));

//.sort() ordenar un arreglo de cadena de texto de forma alfabetica
const letras = ['c', 'd', 'e', 'f', 'b', 'a'];
console.log(letras.sort());

const numero = [5, 4, 3, 2, 1];
console.log(numero.sort());

//.reverse() ordenar los arreglos de forma invertida 
console.log(numero.reverse());
console.log(letras.reverse());

//.concat() nos permite juntar dos arrglos
const arreglo1 = [1,2,3];
const arreglo2 = ['a', 'b', 'c'];
const arreglo3 = arreglo1.concat(arreglo2);

console.log(arreglo3)

//.push() agregar un elemento al final del areglo
colores.push('Amarillo');
console.log(colores);

//.pop() elimina el ultimo elemento del arreglo
colores.pop();
console.log(colores);

//.shift() elimina el primer elemento de un arreglo y llena los espacios libres
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
/* const diaEliminado = dias.shift();
console.log(diaEliminado); */
console.log(dias[0]);

//unshift() agrega un elemento al inicio del arreglo
dias.unshift('Carlos');
console.log(dias);

//.splice() agregar elemetos donde quierael usuario
//1er parameter: pocision donde queremos comenzar a insertar los elementos
//2do parameter: si queremos eliminar elementos del arreglo desde la pocision indicada
//3er parameter: elementos a agregar
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.splice(0, 0, 'Juanito', 'Predrito');
console.log(amigos);

//.slice() permite copiar un elemento de un arreglo a otro
//1er parameter: pocision desde donde queremos copiar
//2do parameter: hasta antes de que elementos podemos copiar
const frutas = ['fresa', 'manzana', 'uva', 'piña', 'mango', 'naranja', 'melon'];
const frutasFavoritas = frutas.slice(1, 6);
console.log(frutasFavoritas); 