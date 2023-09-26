console.log(`la ventana del navegador mide ${window.innerHeight}px de alto`);
console.log(`la ventana del navegador mide ${window.innerWidth}px de ancho`);

/*
    windows.open
*/
let ventana;
const abrirVentana = () => {
    ventana = window.open('', 'mamawebo', 'width=500,height=500');
    ventana.document.write('<h1>Hola mamawebo</h1>')
}

const cerrarVentana = () => {
    ventana.close();
};
/* 
    screen object
*/
console.log('Ancho de pantalla:', window.screen.width);
console.log('Ancho de alto:', window.screen.height);


console.log('Acncho de pantalla sin bordes de windows:', window.screen.availWidth);
console.log('alto de pantalla sin bordes de windows:', window.screen.availHeight);