import alphabet from 'iso-basic-latin-alphabet'
import { getDigitsInBaseN } from './utils'

interface Options {
  length: number
  meaningful?: boolean
  regex?: RegExp
}

const letters = alphabet.lowercase
const base = letters.length

export default function enumerateStrings(options: Options) {
  const { length } = options

  const total = Math.pow(letters.length, length)
  const strings: string[] = []

  for (let curr = 0; curr < total; curr++) {
    const digits = getDigitsInBaseN(curr, base)
    const filledDigits = [...Array(length - digits.length).fill(0), ...digits]
    strings.push(filledDigits.map((digit) => letters[digit]).join(''))
  }

  return strings
}
