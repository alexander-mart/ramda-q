import { findObject, findValue } from './ramda-extended.js'

const array = [
    { id: 1 , letter: 'a', t: 3     },
    { id: 2 , letter: 'b', t: 'd'   },
    { id: 3 , letter: 'c', t: false },
    { id: 10, letter: 'c', t: {}    },
    { id: 11, letter: 'd'           },
]

const result_1 = findObject('id', 2, array)
const result_2 = findObject('letter', 'c', array)
const result_3 = findObject('letter', '', array)
const result_4 = findObject('letter_', '', array)

const result_5 = findValue('letter', 'c', 't', array)
const result_6 = findValue('letter', 'c', 'id', array)
const result_7 = findValue('letter', 'c', 'name', array)
const result_8 = findValue('letter_', 'c', 'name', array)

console.log('result_1:', result_1)
console.log('result_2:', result_2)
console.log('result_3:', result_3)
console.log('result_4:', result_4)

console.log('result_5:', result_5)
console.log('result_6:', result_6)
console.log('result_7:', result_7)
console.log('result_8:', result_8)

// result_1: { id: 2, letter: 'b', t: 'd' }
// result_2: { id: 3, letter: 'c', t: false }
// result_3: undefined
// result_4: undefined

// result_5: false
// result_6: 3
// result_7: undefined
// result_8: undefined
