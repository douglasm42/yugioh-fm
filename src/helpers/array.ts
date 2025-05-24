export function forEachCombination<T>(array: T[], callback: (a: T, b: T) => void) {
  for (let a = 0 ; a < array.length - 1 ; a++) {
    for(let b = a + 1 ; b < array.length ; b++) {
      callback(array[a], array[b])
    }
  }
}