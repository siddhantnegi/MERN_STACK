const b = Buffer.from('ABCDe')

console.log(b.toString())
b.write('other')
console.log(b.toString())