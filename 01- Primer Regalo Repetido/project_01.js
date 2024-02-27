// En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

// Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

// ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

// En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

//respuesta:

function findFirstRepeated(gifts) {
    let repeated = []
    for (let index = 0; index < gifts.length; index++) {
      const element = gifts[index];
      if (!(gifts.indexOf(element) === gifts.lastIndexOf(element))) {
       if (repeated.includes(element)) return element
       repeated.push(element);
      }
    }
    return -1
  }
 
 console.log('respuesta ' + findFirstRepeated([1, 3, 7, 3, 7]));