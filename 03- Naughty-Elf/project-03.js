// En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

// Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

// Respuesta:

function findNaughtyStep(original, modified) {
    const newOriginal = original.split('')
    const newModified = modified.split('')

    if (newOriginal.length === 0) return newModified[0]
    if (newOriginal.length > newModified.length) {
        for (let i = 0; i < newOriginal.length; i++) {
            const refOrifinal = newOriginal[i];
            const refModified = newModified[i];
            if (!(refModified === refOrifinal)) return newOriginal[i]
        }
    }
    if (newOriginal.length <= newModified.length) {
        for (let i = 0; i < newModified.length; i++) {
            const refOrifinal = newOriginal[i];
            const refModified = newModified[i];
            if (!(refModified === refOrifinal)) return newModified[i]
        }
    }
    return ''
  }

  console.log(findNaughtyStep('abcde','abcd')); 