/**
 * indexOF: https://www.w3schools.com/jsref/jsref_indexof_array.asp
 * 
 */

 /**
  * LA función indexOf es muy usada en JavaScript; y en otros lenguajes de programación hay funciones similares. Sirve para indicar, en que posición se encuentra un elemento en un array
  */

 let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"]
 let pezPosicion = muchos_peces.indexOf("Nemo")
 console.log("Nemo está en la posición: " + pezPosicion)

 /**
  * Fíjate sin embargo qué valor arroja aplicar indexOf cuando buscamos a "estrella". CONTESTA: ¿Por qué crees que sucede esto?
  * Sucede porque "Estrella != estrella", por lo tanto indexOf no la encuentre en el array y da como resultado -1
  */

  let pezPosicion2 = muchos_peces.indexOf("estrella")
  console.log("Estrella está en la posición: " + pezPosicion2)

  
