export function getDigitsInBaseN(num: number, base: number): number[] {
  if (num < 0) return getDigitsInBaseN(-1 * num, base)
  if (num < base) return [num]
  return [...getDigitsInBaseN(Math.floor(num / base), base), num % base]
}
