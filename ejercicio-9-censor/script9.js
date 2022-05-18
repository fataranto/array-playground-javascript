// Implementa en este fichero la solución
// Escribe antes todos los pasos que hay que realizar con lenguaje natural

// Estas palabras prohibidas vienen de la base de datos. Úsa la variable palabrasProhibidas, porque sus valores podrían cambiar en función de las necesidades del censor 

let palabrasProhibidas = ["Bugatti", "yummy", "booty"];

//No sé si éste el error: yummmy (3 emes) y en el html "yummy" (2 emes)???

//console.log("Es hora de censurar!")

// Resultado esperado: tras cargar la aplicación Web, las palabras contenidas en el array 'palabrasProhibidas' han sido substituidas por **** en el documento Web ya renderizado.

// Pista: Fíjate que todas las palabras candidatas a ser prohibidas estan dentro de un <span>
// Pista: REcuerda que existe un método de array muy interesante para saber si un elemento esta dentro de un array: https://www.w3schools.com/jsref/jsref_includes_array.asp

/* 
Pasos:
1-generar un array con todos los span del cocumento
2-comparar el array palabrasProhibidas con el generado del documento y buscar las coincidencias
3-cambiar el contenido por "****"
 */

let palabrasRevisar = document.querySelectorAll("span");


for (let i = 0; i < palabrasRevisar.length; i++) {
    let palabraScan = palabrasRevisar[i].textContent.toLowerCase();
    //console.log(palabraScan);
    for (let j = 0; j < palabrasProhibidas.length; j++) {
        let palabraProhibir = palabrasProhibidas[j].toLowerCase();
        if (palabraScan == palabraProhibir) {
            console.log(palabraScan, palabraProhibir);
            palabrasRevisar[i].textContent = "****";
        }
    }
};