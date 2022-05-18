/**
 * Recorrer arrays
 * 
 * Una actividad muy común en programación es recorrer los arrays en busca de un elemento. Imagina que en una pecera tienes un montón de peces, y quieres buscar uno en concreto
 * 
 * Añade un condicional if... que compruebe si, la variable "siguiente_pez" es "Nemo". Si es "Nemo" muestra por el terminal un mensaje: "He encontrado a Nemo!". Cada vez que no encuentre el pez Nemo, escribe "Este pez NO es Nemo!"
 *
 * Ejemplo:
 * 
 * "Pez siguiente: Dory"
 * "Este pez no es Nemo..."
 * "Pez siguiente: Nemo"
 * "He encontrado a Nemo!"
 * "Pez siguiente: Shipho"
 */

let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"];

for(let i=0; i<muchos_peces.length; i++) {
    let siguiente_pez = muchos_peces[i];
    console.log("Pez siguiente: " + siguiente_pez);
    if (siguiente_pez == "Nemo"){
        console.log("He encontrado a Nemo");
    } else {
        console.log("Este pez no es Nemo");
    }

    // Modifica SOLAMENTE a partir de aquí
}

// BONUS. Sólamente para pensarlo, no hace falta arreglar ni hacer nada más de momento. ¿No es muy ineficaz recorrer todo el array si ya hemos encontrado a Nemo?

