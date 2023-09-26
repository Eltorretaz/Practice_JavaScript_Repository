//named imports

/* import {nombre as xd, obtenerPost } from "./nameExports";
console.log(`${nombre} y ${xd}`);
console.log(obtenerPost);   */ 

//namespace imports

import * as datos from './nameExports';
console.log(datos.nombre);
console.log(datos.obtenerPost());

//default imports

import obtener  from './defaultExports';
console.log(obtener());

//empty imports
import  './emptyExports';
import {correo} from './emptyExports';
console.log(correo);