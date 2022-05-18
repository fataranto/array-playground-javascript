/**
 * Métodos de Array útiles
 * 
 * JavaScript nos propociona una serie de métodos que realizan muchas de las tareas que se necesita hacer de manera habitual, como buscar un elemento en un array, con funciones ya predefinidas.
 * 
 * Si bien es MUY CONVENIENTE saber como recorrer un array y buscar un elemento en él, de manera "manual"; el uso de funciones a más alto nivel nos permite ahorrar líneas de código y hacer nuestro código más legible. Los iremos  viendo a lo largo del curso.
 */

 /**
  * Mira algunos ejemplos de uso de la función "includes"
  * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/includes
  * 
  */
let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"]

console.log("console1: ", muchos_peces.includes("Nemo"))
console.log("console2: ", muchos_peces.includes("Pepitillo"))
console.log("console3: ", muchos_peces.includes("nemo"))

/**
 * CONTESTA: ¿Por qué el primer console log arroja el valor "true" y el segundo arroja el valor "false"?
 * Porque el array incluye "Nemo" pero no incluye "Pepitillo"
 * 
 * CONTESTA: ¿Que TIPO de dato devuelve la función 'includes' (number, string, boolean o array)? 
 * La función 'includes' devuelve boolean
 * 
 *  CONTESTA: ¿Por qué el tercer console devuelve 'false', si claramente Nemo está en el array)? 
 * "nemo" (con minúsculas) no está en el array
 */
