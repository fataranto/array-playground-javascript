/**
 * Acceder a la posición de un array.
 * 
 * Cambia los console.log para que:
 * 1. El primer console.log muestre el nombre de "Dory" en el terminal
 * 2. El segundo console.log muestre el nombre de "Boby" en el terminal  
 */

let lista_peces = ["Dory", "Nemo"]
let mas_peces = ["Pinky", "Boby"]

// Cambiar SOLAMENTE las dos siguientes líneas:
console.log(lista_peces[0]);
console.log(mas_peces[2]);


// Preguntas BONUS:
/**
 * 1. ¿Cuántos elementos tiene el array 'lista_peces'?
 * console.log(lista_peces.length); // 2 
 * 2. ¿Qué pasa si ejecutamos console.log(mas_peces[2])? ¿Por qué vemos ese valor?
 * se muestra "undefined" porque el array sólo tiene dos posiciones, la 0 y la 1, le estamos pidiendo una posición que no está definida
 */