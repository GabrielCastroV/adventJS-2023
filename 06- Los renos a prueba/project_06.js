/* Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

> = Avanza a la derecha
< = Avanza a la izquierda
* = Puede avanzar o retroceder
Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno al finalizar todos los movimientos.

En el ejemplo anterior, la máxima distancia que recorre el reno es 2. Va a la derecha dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar la distancia +1 y luego va a la izquierda -1.

Crea una función maxDistance que reciba la cadena de texto movements y devuelva la máxima distancia que puede recorrer el reno en cualquier dirección:*/

const movements = '>>*<'

function maxDistance(movements) {
    const newMovements = movements.split('')
    let positive = 0
    let negative = 0
    let asterisco = 0
    for (let i = 0; i < newMovements.length; i++) {
        const element = newMovements[i];
        if (element === '>') {
            positive++
        } else if (element === '<') {
            negative++
        } else if (element === '*') {
            asterisco++
        }
    }
    if ((positive > negative) || (positive === negative)) {
        positive += asterisco
        positive -= negative
        return positive
    } else if (positive < negative) {
        negative += asterisco
        negative -= positive
        return negative
    }
    return 0
  }

  maxDistance(movements)