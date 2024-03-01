// En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

// Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

// Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

// const a = decode('hola (odnum)')
// console.log(a) // hola mundo

// const b = decode('(olleh) (dlrow)!')
// console.log(b) // hello world!

// const c = decode('sa(u(cla)atn)s')
// console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus

// Respuesta:

const txt = 'sa(u(cla)atn)s'

const txtTwo = 'c(oi(el(z(i))ac)mara)n'

const textThree = '(aloh) jojo (odnum) c(oi(el(z(i))ac)mara)n'

function decode(message) {
   const hasParenthesis = message.match(/\(([^()]+)\)/);
   
   if (!hasParenthesis) return message

   const rightWord = hasParenthesis[0].split('').slice(1,-1).reverse().join('');
   const newMessage = message.replace(hasParenthesis[0], rightWord);

   const result = decode(newMessage)
   return result
}


// Decodificar el texto y mostrar el resultado
console.log(decode('(oh)(al)'))
