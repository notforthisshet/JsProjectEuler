function is_prime(number) {
    if (number == 1) {
        return false
    }
    for (let i = 2; i < Math.round(number ** 0.5) + 1; i++) {
        if (number % i == 0) {
            return false
            }
        }
    return true
    }

prime_divisors = []

bruh = 600851475143

for (let i = 1; i < Math.round(bruh ** 0.5) + 1; i++) {
    if (bruh % i == 0 & is_prime(i)) {
        prime_divisors.push(i)
    }
}

console.log(Math.max.apply(null, prime_divisors))
console.log(prime_divisors)
