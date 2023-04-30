palindromes = []
for (let a = 100; a < 1000; a++) {
    for (let b = 100; b < 1000; b++) {
        if ((a * b).toString().split('').reverse().join('') === (a * b).toString()) {
            palindromes.push(a * b)
        }
    }
}
console.log(Math.max.apply(null, palindromes))