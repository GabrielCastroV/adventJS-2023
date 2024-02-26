// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

// resultado:

const gifts = ['tren', 'oso', 'pelota', 'se', 'perro']
const materials = 'tronesa'

function manufacture(gifts, materials) {
    let box = []
    for (let index = 0; index < gifts.length; index++) {
        const word = gifts[index].split('');
        const isIn = word.every(item => materials.includes(item))
        if (isIn) box.push(gifts[index])
    }
    return box
  }

  manufacture(gifts, materials)

// console.log(materials.includes('one'));