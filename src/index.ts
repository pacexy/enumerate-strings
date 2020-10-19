import alphabet from 'iso-basic-latin-alphabet'
import isRegExp from 'lodash.isregexp'

import { getDigitsInBaseN } from './utils'

interface Options {
  length: number
  charset?: string[]
  regex?: RegExp
  // TODO: implement following options
  meaningful?: boolean
}

export default function enumerateStrings(options: Options) {
  const { length, charset = alphabet.lowercase, regex } = options
  const base = charset.length
  const total = Math.pow(charset.length, length)

  const strings: string[] = []
  for (let curr = 0; curr < total; curr++) {
    const digits = getDigitsInBaseN(curr, base)
    const filledDigits = [...Array(length - digits.length).fill(0), ...digits]
    const string = filledDigits.map((digit) => charset[digit]).join('')

    if (isRegExp(regex)) {
      if (regex!.test(string)) strings.push(string)
    } else {
      strings.push(string)
    }
  }

  return strings
}
