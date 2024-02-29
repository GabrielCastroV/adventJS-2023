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

function decode(message) {
    const newTxt = message
    const splitted = newTxt?.split(' ')
    let ans = newTxt;
    const reverse = () => {
        let lastOpened = ans.lastIndexOf('(')
        let firstClosed = ans.indexOf(')')
        const badString = Array(ans).join('').slice(lastOpened + 1, firstClosed);
        const rightString = badString.split('').reverse().join('');  

        ans = ans.replace(badString, rightString).split('');

        // elimino los parentesis
        ans.splice(firstClosed, 1)
        ans.splice(lastOpened, 1)
        ans = ans.join('')
    }

    if (splitted.length > 120) {
        console.log('tiene mas de una palabra');
        
        for (let i = 0; i < splitted.length; i++) {
            const element = splitted[i];
            while (element.includes('(')) {
                reverse()
                console.log('ciclando pa');
                if (!element.includes('(')) {
                    ans.push(ans)
                }
            }
        }
        return box
    }
    while (ans.includes('(') && ans.includes(')')) {
      reverse()
      console.log('asdoooo ciclando');
      if (!ans.includes('(')) return ans
    }
    return 'nada'
}
const txt = 'sa(u(cla)atn)s'

const txtTwo = 'c(oi(el(z(i))ac)mara)n'

const textThree = '(aloh)'

console.log('palabra original: ' + textThree);
console.log(decode(textThree))