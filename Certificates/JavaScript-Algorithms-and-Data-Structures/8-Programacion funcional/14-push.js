//! Agrega elementos al final de un arreglo utilizando concat en lugar de push

//todo/ La programación funcional consiste en crear y utilizar funciones no mutantes.

//* El último desafío introdujo el método concat como una forma de combinar arreglos en uno nuevo sin mutar los arreglos originales. 


//? Ejemplo

// Compara concat con el método push. push añade un elemento al final del arreglo desde el que se llama, lo cual muta ese arreglo.

const arr = [1, 2, 3];
arr.push([4, 5, 6]);

// arr = [1, 2, 3, [4, 5, 6]]

//* arr tendría un valor modificado de [1, 2, 3, [4, 5, 6]], que no encaja con el paradigma de la programación funciona


//todo/ concat ofrece una forma de añadir nuevos elementos al final de un arreglo, sin provocar ningún efecto de mutación.


//? Ejercicio

// Cambia la función nonMutatingPush para que use concat para añadir newItem al final de original en lugar de push. La función debe devolver un arreglo.

function nonMutatingPush(original, newItem) {
  // Cambia solo el código debajo de esta línea
  return original.concat(newItem);

  // Cambia solo el código encima de esta línea
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);