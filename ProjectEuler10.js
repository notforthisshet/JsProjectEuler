function is_prime(number) {
    if (number === 1) {
        return false
    }
    for (let d = 2; d < Math.round(number ** 0.5) + 1; d++) {
        if (number % d === 0) {
            return false
        }
    }
    return true
}

let prime_numbers = []

for (let i = 0; i < 2_000_000; i++) {
    if (is_prime(i)) {
        prime_numbers.push(i)
    }
}

console.log(prime_numbers.reduce(function (a, b) {
    return a + b
}))