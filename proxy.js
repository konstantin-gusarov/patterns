function fetchToDB(ans) {
  return `${ans} - directly from the database`
}

const cache = new Set()
const proxiedFetchDB = new Proxy(fetchToDB, {
  apply(target, thisArg, args) {
    const ans = args[0]
    if (cache.has(ans)) {
      return `${ans} - from cache`
    } else {
      cache.add(ans)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxiedFetchDB('Enterprise NCC-1701'))
console.log(proxiedFetchDB('Discovery NCC-1031'))
console.log(proxiedFetchDB('Enterprise NCC-1701'))
